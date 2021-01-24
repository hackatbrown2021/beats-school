import React from "react";
import { useEffect, useState } from "react";
import { Dashboard } from "../visly/Layout/Home";
import { SongDetail } from "../visly/Components/Song";
import { SongEntry } from "../visly/Components/Song";
import { auth, data, firebase } from "../auth/firebase";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  let [user, setUser] = useState(null);
  let [tab, setTab] = useState("current");
  let [content, setContent] = useState(<React.Fragment></React.Fragment>);

  const songEntryFromDoc = (doc) => {
    if (doc.exists) {
      const s_data = doc.data();

      return (
        <SongEntry
          id={"song" + doc.id}
          songName={s_data.name}
          dateName={new Date(s_data.ts_start.seconds * 1000).toDateString()}
          progress={"50 %"}
          ContinueButton={
            <SongEntry.ContinueButton
              onPress={() => {
                history.push("/dawsample/" + doc.id);
              }}
            />
          }
        />
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });

    //data.c
  }, []);

  useEffect(() => {
    setContent(<></>); // Delete content before switched
    if (user !== null) {
      if (tab === "current") {
        data
          .collection("assignments")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) {
              data
                .collection("songs")
                .where("tracks", "<", 3)
                .get()
                .then((querySnapshot) => {
                  if (querySnapshot.empty) {
                    console.log("NO existing song");
                    var newSong = data.collection("songs").doc();

                    newSong.set({
                      name: uniqueNamesGenerator({
                        dictionaries: [adjectives, animals],
                        length: 2,
                        separator: " ",
                      }),
                      ts_start: firebase.firestore.FieldValue.serverTimestamp(),
                      tracks: 1,
                    });
                    data.collection("assignments").doc(user.uid).set({
                      song_id: newSong.id,
                      type: "melody",
                    });
                  } else {
                    var selectSong = querySnapshot.docs[0];

                    selectSong.ref.update({
                      tracks: selectSong.data().tracks + 1,
                    });

                    var trackType = "drum";
                    if (selectSong.tracks === 3) {
                      trackType = "bass";
                    }
                    data.collection("assignments").doc(user.uid).set({
                      song_id: selectSong.id,
                      type: trackType,
                    });
                  }
                });
            } else {
              const t_data = doc.data();
              const song_id = t_data.song_id;
              const t_type = t_data.type;

              data
                .collection("songs")
                .doc(song_id)
                .get()
                .then((doc) => {
                  const s_data = doc.data();
                  setContent(
                    <div
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        display: "flex",
                        paddingTop: "16px",
                      }}
                    >
                      <SongDetail
                        name={s_data.name}
                        type={t_type}
                        ContinueButton={
                          <SongDetail.ContinueButton
                            onPress={() => {
                              history.push("/dawsample/" + doc.id);
                            }}
                          />
                        }
                      />
                    </div>
                  );
                });
            }
          });
      } else {
        if (tab === "contributed") {
          data
            .collection("tracks")
            .where("user_id", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              Promise.all(
                querySnapshot.docs.map((doc) => {
                  const t_data = doc.data();
                  return data.collection("songs").doc(t_data.song_id).get();
                })
              ).then((documents) => {
                setContent(
                  <Dashboard.SongList>
                    {documents.map((doc) => songEntryFromDoc(doc))}
                  </Dashboard.SongList>
                );
              });
            });
        } else if (tab === "finished") {
          data
            .collection("tracks")
            .where("user_id", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              const s_ids = querySnapshot.docs.map((doc) => doc.data().song_id);

              let songPromises = [];
              s_ids.forEach((song_id) => {
                songPromises.push(data.collection("songs").doc(song_id).get());
              });

              Promise.all(songPromises).then((documents) => {
                let songs = [];
                documents.forEach((doc) => {
                  if (doc.exists) {
                    const s_data = doc.data();
                    if (s_data.completed === true) {
                      songs.push(songEntryFromDoc(doc));
                    }
                  }
                });
                setContent(<Dashboard.SongList>{songs}</Dashboard.SongList>);
              });
            });
        }
      }
    }
  }, [tab, user]);

  const innerContent = user === null ? <div></div> : <div></div>;

  const selectTab = (value) => {
    console.log(value);
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
          <Dashboard.Tabs onChange={setTab} value={tab}>
            <Dashboard.Tabs.Button value="current" text="Current" />
            <Dashboard.Tabs.Button value="contributed" text="Contributed" />
            <Dashboard.Tabs.Button value="finished" text="Finished" />
          </Dashboard.Tabs>
        }
        SongList={content}
      />
    </div>
  );
};
