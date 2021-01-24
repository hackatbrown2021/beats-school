import { useEffect, useState } from "react";
import { Card } from "../visly";
import { Settings } from "../visly/Components/Profile/";
import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  let [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  });

  const innerContent =
    user === null ? (
      <div></div>
    ) : (
      <Settings
        SignOut={
          <Settings.SignOut
            onClick={() => {
              auth.signOut().then(() => {
                history.push("/");
              });
            }}
          />
        }
      />
    );

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      {innerContent}
    </div>
  );
};
