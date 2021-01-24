import { useState } from "react";
import { Card } from "../visly";
import { SignUp } from "../visly/Layout/Auth";
import { auth } from "../auth/firebase";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  let [errorMsg, setError] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const attemptSignIn = () => {
    console.log("click");
    auth
      .createUserWithEmailAndPassword(email, password)
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
        } else if (errorCode === "auth/email-already-in-us") {
          setError("Email already in use.");
        } else {
          setError(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <SignUp
        error={errorMsg}
        Name={<SignUp.Name onChange={setPassword} type="text" />}
        Password={<SignUp.Password onChange={setPassword} type="password" />}
        Email={<SignUp.Email onChange={setEmail} type="email" />}
        Button={<SignUp.Button onClick={attemptSignIn} />}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
};
