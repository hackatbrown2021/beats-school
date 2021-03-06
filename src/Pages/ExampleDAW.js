import React, { useState, useEffect, useRef } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Daw } from "../visly/Components/Editor";
import { icons } from "../visly";
import { SongControl } from "../visly/Components/Editor/Song";
import {
  TrackLabel,
  TrackButton,
  TrackColumn,
  BeatLabel,
} from "../visly/Components/Editor/Track";
import hh_highhat from "../sounds/hiphop/hh_HighHat.wav";
import hh_kick from "../sounds/hiphop/hh_Kick.wav";
import hh_snare from "../sounds/hiphop/hh_Snare.wav";
import r_highhat from "../sounds/rock/r_HighHat.wav";
import r_kick from "../sounds/rock/r_Kick.wav";
import r_snare from "../sounds/rock/r_Snare.wav";

import { auth, data, firebase } from "../auth/firebase";
import { useHistory, useParams } from "react-router-dom";

const genEmptyTrack = (length) => {
  var track = [];
  for (let i = 0; i < length; i++) {
    track.push([]);
  }
  return track;
};

const beatSelected = (instrumentSteps, note, step) => {
  return instrumentSteps[step].includes(note);
};

export default () => {
  const history = useHistory();
  const [notes, setNotes] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [existingTracks, setExistingTracks] = React.useState([]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [songName, setSongName] = React.useState("Name");
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [BPM, setBPM] = React.useState(120);
  const [volumeLevel, setVolumeLevel] = React.useState(-5);
  //const [melodyInstrument, setMelodyInstrument] = React.useState("pluckSynth");
  const SONG_LENGTH = 32;
  const [steps, setSteps] = React.useState(genEmptyTrack(SONG_LENGTH));
  const [drumSteps, setDrumSteps] = React.useState(genEmptyTrack(SONG_LENGTH));
  const [bassSteps, setBassSteps] = React.useState(genEmptyTrack(SONG_LENGTH));
  let [user, setUser] = useState(null);
  const { song_id } = useParams();

  const submitTrack = () => {
    if (user !== null) {
      let trackData = null;
      if (currentTrack === "melody") {
        trackData = steps;
      } else if (currentTrack === "drum") {
        trackData = drumSteps;
      } else if (currentTrack === "bass") {
        trackData = bassSteps;
      }

      let finalStruc = {};
      for (const [index, element] of trackData.entries()) {
        finalStruc[index] = element;
      }

      data
        .collection("tracks")
        .doc()
        .set({
          song_id: song_id,
          ts_added: firebase.firestore.FieldValue.serverTimestamp(),
          type: currentTrack,
          user_id: user.uid,
          data: finalStruc,
        })
        .then(() => {
          data
            .collection("assignments")
            .doc(user.uid)
            .delete()
            .then(() => {
              history.push("/dashboard");
            });
        });
    }
    console.log("submit");
  };

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  });

  useEffect(() => {
    if (user !== null) {
      data
        .collection("assignments")
        .doc(user.uid)
        .get()
        .then((doc) => {
          const a_data = doc.data();
          console.log(doc);
          if ((a_data === null) | (a_data.song_id !== song_id)) {
            history.push("/dashboard");
          } else {
            // LOAD SONG DATA
            data
              .collection("songs")
              .doc(song_id)
              .get()
              .then((doc) => {
                const s_data = doc.data();
                setSongName(s_data.name);
              });
            // LOAD OTHER TRACKS
            setCurrentTrack(a_data.type);
            data
              .collection("tracks")
              .where("song_id", "==", song_id)
              .get()
              .then((querySnapshot) => {
                console.log("finding tracks");
                querySnapshot.forEach((doc) => {
                  const t_data = doc.data();

                  const trackBeats = genEmptyTrack(SONG_LENGTH);
                  for (const [key, value] of Object.entries(t_data.data)) {
                    trackBeats[key].push(...value);
                  }

                  console.log("track");
                  if (t_data.type === "melody") {
                    setSteps(trackBeats);
                  } else if (t_data.type === "drum") {
                    setDrumSteps(trackBeats);
                  } else if (t_data.type === "bass") {
                    setBassSteps(trackBeats);
                  }
                  let newTracks = [...existingTracks];
                  newTracks.push(t_data.type);
                  setExistingTracks(newTracks);
                });
              });
          }
        });
    }
  }, [user]);

  const keysAvailable = [
    "B3",
    "A#3",
    "A3",
    "G#3",
    "G3",
    "F#3",
    "F3",
    "E3",
    "D#3",
    "D3",
    "C#3",
    "C3",
  ];

  const drumKeysAvailable = ["D17", "D18", "D19", "D20", "D21", "D22"];

  const bassKeysAvailable = [
    "G#1",
    "G1",
    "F#1",
    "F1",
    "E1",
    "D#1",
    "D1",
    "C#1",
    "C1",
    "B0",
    "A#0",
    "A0",
  ];

  const beatLabels = [...new Array(SONG_LENGTH).keys()].map((val) => {
    const beat = val / 2 + 1;

    if (beat % 1 != 0) {
      return "";
    } else {
      return "".concat(beat);
    }
  });

  const handleClick = (key, measureNum) => {
    var tempArray = [...steps];
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray[measureNum].indexOf(key);
      tempArray[measureNum].splice(psn, 1);
    }
    setSteps(tempArray);
  };

  const drumHandleClick = (key, measureNum) => {
    var tempArray = [...drumSteps];
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray[measureNum].indexOf(key);
      tempArray[measureNum].splice(psn, 1);
    }
    setDrumSteps(tempArray);
  };

  const bassHandleClick = (key, measureNum) => {
    var tempArray = [...bassSteps];
    if (!tempArray[measureNum].includes(key)) {
      tempArray[measureNum] = tempArray[measureNum].concat(key);
    } else {
      var psn = tempArray[measureNum].indexOf(key);
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
        SubmitButton={<Daw.SubmitButton onPress={submitTrack} />}
        TrackTable={
          <>
            <Daw.TrackTable
              Notes={
                <>
                  {currentTrack === "melody" &&
                    keysAvailable.map((i) => <TrackLabel text={i} />)}
                  {currentTrack === "drum" && (
                    <>
                      <TrackLabel text={"Hip-Hop High Hat"} />
                      <TrackLabel text={"Hip-Hop Kick"} />
                      <TrackLabel text={"Hip-Hop Snare"} />
                      <TrackLabel text={"Rock High Hat"} />
                      <TrackLabel text={"Rock Kick"} />
                      <TrackLabel text={"Rock Snare"} />
                    </>
                  )}
                  {currentTrack === "bass" &&
                    bassKeysAvailable.map((i) => <TrackLabel text={i} />)}
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
                        {currentTrack === "melody" &&
                          keysAvailable.map((i) => (
                            <TrackButton
                              key={"".concat(i).concat(j)}
                              onClick={() => handleClick(i, j)}
                              selected={beatSelected(steps, i, j)}
                            />
                          ))}
                        {currentTrack === "drum" &&
                          drumKeysAvailable.map((i) => (
                            <TrackButton
                              key={"".concat(i).concat(j)}
                              onClick={() => drumHandleClick(i, j)}
                              selected={beatSelected(drumSteps, i, j)}
                            />
                          ))}
                        {currentTrack === "bass" &&
                          bassKeysAvailable.map((i) => (
                            <TrackButton
                              key={"".concat(i).concat(j)}
                              onClick={() => bassHandleClick(i, j)}
                              selected={beatSelected(bassSteps, i, j)}
                            />
                          ))}
                      </TrackColumn>
                    </>
                  ))}
                </>
              }
              Markers={beatLabels.map((label) => (
                <BeatLabel text={label} />
              ))}
            />
          </>
        }
        SongInfo={
          <Daw.SongInfo
            text={songName}
            trackFocus={currentTrack}
            ExistingTracks={
              <ul>
                {existingTracks.map((o) => (
                  <li>{o}</li>
                ))}
              </ul>
            }
            SongControl={
              <Daw.SongInfo.SongControl
                Play={
                  <Daw.SongInfo.SongControl.Play
                    onClick={() => setIsPlaying(!isPlaying)}
                    icon={isPlaying ? icons.close : icons.arrowRight}
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
      <Song bpm={BPM * 2} volume={volumeLevel} isPlaying={isPlaying}>
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
        <Track
          steps={bassSteps}
          onStepPlay={(stepNotes, index) => {
            setCurrentStepIndex(index);
          }}
        >
          <Instrument type="duoSynth" />
        </Track>
      </Song>
    </>
  );
};
