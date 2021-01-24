import React, { useState, useEffect, useRef } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Daw } from "../visly/Components/Editor";
import { SongControl } from "../visly/Components/Editor/Song";
import {
  TrackLabel,
  TrackButton,
  TrackColumn,
} from "../visly/Components/Editor/Track";
import hh_highhat from "../sounds/hiphop/hh_HighHat.wav";
import hh_kick from "../sounds/hiphop/hh_Kick.wav";
import hh_snare from "../sounds/hiphop/hh_Snare.wav";
import r_highhat from "../sounds/rock/r_HighHat.wav";
import r_kick from "../sounds/rock/r_Kick.wav";
import r_snare from "../sounds/rock/r_Snare.wav";

import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  const [notes, setNotes] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [BPM, setBPM] = React.useState(90);
  const [volumeLevel, setVolumeLevel] = React.useState(-5);
  //const [melodyInstrument, setMelodyInstrument] = React.useState("pluckSynth");
  const SONG_LENGTH = 16;
  const [steps, setSteps] = React.useState([
    [], // 1 measure
    [], // 2 measures...
    [], // 3
    [], // 4
    [], // 5
    [], // 6
    [], // 7
    [], // 8
    [], // 9
    [], // 10
    [], // 11
    [], // 12
    [], // 13
    [], // 14
    [], // 15
    [], // 16
    // [], // 17
    // [], // 18
    // [], // 19
    // [], // 20
    // [], // 21
    // [], // 22
    // [], // 23
    // [], // 24
    // [], // 25
    // [], // 26
    // [], // 27
    // [], // 28
    // [], // 29
    // [], // 30
    // [], // 31
    // [], // 32
  ]);
  const [drumSteps, setDrumSteps] = React.useState([
    [], // 1 measure
    [], // 2 measures...
    [], // 3
    [], // 4
    [], // 5
    [], // 6
    [], // 7
    [], // 8
    [], // 9
    [], // 10
    [], // 11
    [], // 12
    [], // 13
    [], // 14
    [], // 15
    [], // 16
    // [], // 17
    // [], // 18
    // [], // 19
    // [], // 20
    // [], // 21
    // [], // 22
    // [], // 23
    // [], // 24
    // [], // 25
    // [], // 26
    // [], // 27
    // [], // 28
    // [], // 29
    // [], // 30
    // [], // 31
    // [], // 32
  ]);
  const [bassSteps, setBassSteps] = React.useState([
    [], // 1 measure
    [], // 2 measures...
    [], // 3
    [], // 4
    [], // 5
    [], // 6
    [], // 7
    [], // 8
    [], // 9
    [], // 10
    [], // 11
    [], // 12
    [], // 13
    [], // 14
    [], // 15
    [], // 16
    // [], // 17
    // [], // 18
    // [], // 19
    // [], // 20
    // [], // 21
    // [], // 22
    // [], // 23
    // [], // 24
    // [], // 25
    // [], // 26
    // [], // 27
    // [], // 28
    // [], // 29
    // [], // 30
    // [], // 31
    // [], // 32
  ]);

  const keysAvailable = [
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
  ];

  const drumKeysAvailable = ["D17", "D18", "D19", "D20", "D21", "D22"];

  const bassKeysAvailable = [
    "A0",
    "A#0",
    "B0",
    "C1",
    "C#1",
    "D1",
    "D#1",
    "E1",
    "F1",
    "F#1",
    "G1",
    "G#1",
  ];

  const handleClick = (key, measureNum) => {
    var tempArray = steps;
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray.indexOf(key);
      tempArray[measureNum].splice(psn, 1);
    }
    setSteps(tempArray);
  };

  const drumHandleClick = (key, measureNum) => {
    var tempArray = drumSteps;
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray.indexOf(key);
      tempArray[measureNum].splice(psn, 1);
    }
    setDrumSteps(tempArray);
  };

  const bassHandleClick = (key, measureNum) => {
    var tempArray = bassSteps;
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray.indexOf(key);
      tempArray[measureNum].splice(psn, 1);
    }
    setBassSteps(tempArray);
  };

  const adjustBPM = (amount) => {
    var tempVal = BPM;
    tempVal += amount;
    setBPM(tempVal);
  };

  const adjustVol = (amount) => {
    var tempVal = volumeLevel;
    tempVal += amount;
    if (tempVal < -10) {
      tempVal = -10;
    }
    setVolumeLevel(tempVal);
  };

  return (
    <>
      <Daw
        TrackTable={
          <>
            <Daw.TrackTable
              Notes={
                <>
                  {keysAvailable.map((i) => (
                    <TrackLabel text={i} />
                  ))}
                </>
              }
              Grid={
                <>
                  {/* <TrackColumn>
                    <TrackButton
                      onClick={(event) => {
                        // When you generate <TrackButton> programatically
                        // create a arrow function for each one that passes
                        // their 'id' (a reference to their note and their beat
                        // number) to some general function to handle clicks.
                        // The onclick will interface to that state array you
                        // already have.
                        console.log(event);
                      }}
                    />
                    <TrackButton />
                    <TrackButton />
                    <TrackButton />
                  </TrackColumn> */}
                  {[...Array(SONG_LENGTH).keys()].map((j) => (
                    <>
                      <TrackColumn>
                        {keysAvailable.map((i) => (
                          <TrackButton
                            key={"".concat(i).concat(j)}
                            onClick={() => handleClick(i, j)}
                          />
                        ))}
                      </TrackColumn>
                    </>
                  ))}
                </>
              }
              Markers={<></>}
            />
            <Daw.TrackTable
              Notes={
                <>
                  <TrackLabel text={"Hip-Hop High Hat"} />
                  <TrackLabel text={"Hip-Hop Kick"} />
                  <TrackLabel text={"Hip-Hop Snare"} />
                  <TrackLabel text={"Rock High Hat"} />
                  <TrackLabel text={"Rock Kick"} />
                  <TrackLabel text={"Rock Snare"} />
                </>
              }
              Grid={
                <>
                  {[...Array(SONG_LENGTH).keys()].map((j) => (
                    <>
                      <TrackColumn>
                        {drumKeysAvailable.map((i) => (
                          <TrackButton
                            key={"".concat(i).concat(j)}
                            onClick={() => drumHandleClick(i, j)}
                          />
                        ))}
                      </TrackColumn>
                    </>
                  ))}
                </>
              }
              Markers={<></>}
            />
            <Daw.TrackTable
              Notes={
                <>
                  {bassKeysAvailable.map((i) => (
                    <TrackLabel text={i} />
                  ))}
                </>
              }
              Grid={
                <>
                  {[...Array(SONG_LENGTH).keys()].map((j) => (
                    <>
                      <TrackColumn>
                        {bassKeysAvailable.map((i) => (
                          <TrackButton
                            key={"".concat(i).concat(j)}
                            onClick={() => bassHandleClick(i, j)}
                          />
                        ))}
                      </TrackColumn>
                    </>
                  ))}
                </>
              }
              Markers={<></>}
            />
          </>
        }
        SongInfo={
          <Daw.SongInfo
            text="Song Name"
            trackFocus="Melody"
            ExistingTracks={
              <ul>{/* <li>melody</li>
                <li>beat</li> */}</ul>
            }
            SongControl={
              <Daw.SongInfo.SongControl
                Play={
                  <Daw.SongInfo.SongControl.Play
                    onClick={() => setIsPlaying(!isPlaying)}
                  />
                }
                Bpm={
                  <Daw.SongInfo.SongControl.Bpm
                    text={"BPM: ".concat(BPM)} // need to implement state
                    BpmDecr={
                      <SongControl.Bpm.BpmDecr
                        onClick={() => {
                          adjustBPM(-5);
                        }}
                      />
                    }
                    BpmIncr={
                      <SongControl.Bpm.BpmIncr
                        onClick={() => {
                          adjustBPM(5);
                        }}
                      />
                    }
                  />
                }
                Volume={
                  <Daw.SongInfo.SongControl.Volume
                    text={"Vol: ".concat(volumeLevel + 10).concat(" db")} // need to implement state
                    VolDecr={
                      <SongControl.Volume.VolDecr
                        onClick={() => {
                          adjustVol(-1);
                        }}
                      />
                    }
                    VolIncr={
                      <SongControl.Volume.VolIncr
                        onClick={() => {
                          adjustVol(1);
                        }}
                      />
                    }
                  />
                }
              />
            }
          />
        }
      />
      <Song bpm={BPM} volume={volumeLevel} isPlaying={isPlaying}>
        <Track
          steps={steps}
          // Callback triggers on every step
          onStepPlay={(stepNotes, index) => {
            setCurrentStepIndex(index);
          }}
        >
          <Instrument type="polySynth" />
        </Track>
        <Track
          steps={drumSteps}
          // Callback triggers on every step
          onStepPlay={(stepNotes, index) => {
            setCurrentStepIndex(index);
          }}
        >
          <Instrument
            type="sampler"
            samples={{
              D17: hh_highhat,
              D18: hh_kick,
              D19: hh_snare,
              D20: r_highhat,
              D21: r_kick,
              D22: r_snare,
            }}
          ></Instrument>
        </Track>
      </Song>
    </>
  );
};
