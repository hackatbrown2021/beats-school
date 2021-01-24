import React from "react";
import { Song, Track, Instrument } from "reactronica";
import snare from "../sounds/hiphop/Snare.wav";

// Simplified Drum Pads
export default () => {
  const [notes, setNotes] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <Song>
        <Track>
          <Instrument
            type="sampler"
            notes={notes}
            samples={{
              C3: snare,
            }}
            onLoad={() => {
              // Runs when samples are loaded
              setIsLoaded(true);
              // console.log("SAMPLE LOADED");
            }}
          />
        </Track>
      </Song>
      <button
        disabled={!isLoaded}
        onMouseDown={() => {
          try {
            setNotes([{ name: "C3" }]);
            setIsLoaded(false);
          } catch (err) {
            console.log(err);
          }
        }}
        onMouseUp={() => setNotes(null)}
      >
        Snare
      </button>
      {/* ...other pads */}
      {/* Reactronica Components */}
    </>
  );
};
