import { useEffect, useState } from "react";
import { Daw } from "../visly/Components/Editor";
import { SongControl } from "../visly/Components/Editor/Song";
import {
  TrackLabel,
  TrackButton,
  TrackColumn,
} from "../visly/Components/Editor/Track";

import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  return (
    <Daw
      TrackTable={
        <Daw.TrackTable
          Notes={
            <>
              <TrackLabel text="A4" />
              <TrackLabel text="B4" />
              <TrackLabel text="C4" />
            </>
          }
          Grid={
            // need to auto generate this
            <>
              <TrackColumn>
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
              </TrackColumn>

              <TrackColumn>
                <TrackButton />
                <TrackButton />
                <TrackButton />
                <TrackButton />
              </TrackColumn>
              <TrackColumn>
                <TrackButton />
                <TrackButton />
                <TrackButton />
                <TrackButton />
              </TrackColumn>
            </>
          }
          Markers={<></>}
        />
      }
      SongInfo={
        <Daw.SongInfo
          text="Song Name"
          trackFocus="Effects"
          ExistingTracks={
            <ul>
              <li>melody</li>
              <li>beat</li>
            </ul>
          }
          SongControl={
            <Daw.SongInfo.SongControl
              Play={
                <Daw.SongInfo.SongControl.Play
                  onClick={(event) => {
                    console.log("play/pause");
                    // need to implement state
                  }}
                />
              }
              Bpm={
                <Daw.SongInfo.SongControl.Bpm
                  text={"197 bpm"} // need to implement state
                  BpmDecr={
                    <SongControl.Bpm.BpmDecr
                      onClick={(event) => {
                        console.log("BPM -1");
                        // need to implement state
                      }}
                    />
                  }
                  BpmIncr={
                    <SongControl.Bpm.BpmIncr
                      onClick={(event) => {
                        console.log("BPM +1");
                        // need to implement state
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
  );
};
