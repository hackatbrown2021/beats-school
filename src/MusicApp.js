import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { icons, IconButton } from "./visly";

const PlayButton = (props) => {
  return (
    <IconButton
      onPress={props.onPress}
      icon={props.state ? icons.close : icons.arrowRight}
    />
  );
};

const SongContainer = (props) => {
  return (
    // Top level component must be Song, with Tracks nested inside
    <Song bpm={90} volume={-20} isPlaying={props.play}>
      <Track
        // Array of several types
        steps={[
          // Note in string format
          "C3",
          // Object with note name and duration
          { name: "C3", duration: 0.5 },
          { name: "D3", duration: 0.5 },
          // Array of strings for chords
          ["C3", "G3"],
          null,
          null,
          // Array of objects for chords
          [
            { name: "C3", duration: 0.5 },
            { name: "G3", duration: 0.5 },
          ],
          null,
        ]}
        pan={0}
        // Callback for every tick
        onStepPlay={(step, index) => {
          //doSomething(step, index);
        }}
      >
        <Instrument type="synth" />
        {/* Add effects chain here */}
        <Effect type="feedbackDelay" />
        <Effect type="distortion" />
      </Track>
    </Song>
  );
};

const MusicApp = () => {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <SongContainer play={play} />
      <PlayButton onPress={() => setPlay(!play)} state={play} />
    </div>
  );
};
export default MusicApp;
