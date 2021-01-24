import { useEffect, useState } from "react";
import { TrackTable } from "./visly/Components/Editor";

import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      {innerContent}
    </div>
  );
};
