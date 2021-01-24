import React, { useState, useEffect, useRef } from "react";
import { Song, Track, Instrument } from "reactronica";
import snare from "../sounds/hiphop/hh_Snare.wav";

// Simplified Drum Pads
export default () => {
  const [notes, setNotes] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [steps, setSteps] = React.useState([
    ["D3"],
    [],
    ["C#3"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    ["F3"],
    [],
    [],
    [],
    [],
    [],
    [],
    ["A4"],
  ]);
  const keysAvailable = ["C3", "C#3", "F4"];
  const handleClick = (key, measureNum) => {
    var tempArray = steps;
    tempArray[measureNum] = tempArray[measureNum].concat(key);
    setSteps(tempArray);
  };
  // useEffect(() => {
  //   setSteps(steps.concat(["F3"]));
  // });
  // for (var i = 0; i < 5; i++) {
  //   setSteps(oldsteps);
  // }
  return (
    <>
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
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Play"}
      </button>
      {/* <br />
      C3 */}
      {keysAvailable.map((i) => (
        <>
          <br />
          <p>{i}</p>
          {[...Array(32).keys()].map((j) => (
            <>
              {/* key is a React property, keyName is the music key (e.g., C3, C#3)
              psn is the measure for the button, which will be 0 to 31 */}
              <input
                type="radio"
                key={"".concat(i).concat(j)}
                keyName={i}
                psn={j}
                name={"".concat(i).concat(j)}
                onClick={() => handleClick(i, j)}
              />
            </>
          ))}
        </>
      ))}
      <Song isPlaying={isPlaying}>
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
        <Track
          steps={steps}
          // Callback triggers on every step
          onStepPlay={(stepNotes, index) => {
            setCurrentStepIndex(index);
          }}
        >
          <Instrument type="polySynth" />
        </Track>
      </Song>
      {/* ...other pads */}
      {/* Reactronica Components */}
    </>
  );
};
