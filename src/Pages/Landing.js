import React from "react";
import Landing from "../visly/Layout/Landing";
import LandingFrame from "../images/landing.svg";

export default () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Landing imageSrc={LandingFrame} />
    </div>
  );
};
