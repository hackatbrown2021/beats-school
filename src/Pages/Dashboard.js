import { useEffect, useState } from "react";
import { Dashboard } from "../visly/Layout/Home";
import { SongEntry } from "../visly/Components/Song";
import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  let [user, setUser] = useState(null);
  let [songs, setSongs] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });

    // DEBUG example:
    setSongs([1, 2, 3]);
  }, []);

  const innerContent = user === null ? <div></div> : <div></div>;

  const selectTab = (value) => {
    console.log(value);
    console.log(songs);
    // Update which songs are shown here
  };

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        paddingTop: "4px",
      }}
    >
      <Dashboard
        Tabs={
          <Dashboard.Tabs onChange={selectTab}>
            <Dashboard.Tabs.Button value="current" text="Current" />
            <Dashboard.Tabs.Button value="contributed" text="Contributed" />
            <Dashboard.Tabs.Button value="finished" text="Finished" />
          </Dashboard.Tabs>
        }
        SongList={
          <Dashboard.SongList>
            {songs.map((o) => (
              <SongEntry />
            ))}
          </Dashboard.SongList>
        }
      />
    </div>
  );
};
