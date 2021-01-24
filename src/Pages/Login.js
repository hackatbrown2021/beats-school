import { useState } from "react";
import { Card } from "../visly";
import { Login } from "../visly/Layout/Auth";
import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  let [errorMsg, setError] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const attemptSignIn = () => {
    console.log("click");
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        setError("");
        history.push("/dashboard");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found"
        ) {
          setError("Wrong password.");
        } else if (errorCode === "auth/invalid-email") {
          setError("Invalid email.");
        } else {
          setError(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <Login
        error={errorMsg}
        Password={<Login.Password onChange={setPassword} type="password" />}
        Email={<Login.Email onChange={setEmail} type="email" />}
        Button={<Login.Button onClick={attemptSignIn} />}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
};
