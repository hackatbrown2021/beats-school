import React from "react";
import { Card } from "../visly";
import { Login } from "../visly/Layout/Auth";

export default () => {
  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <Login
        Password={<Login.Password type="password" />}
        Email={<Login.Email type="email" />}
        Button={<Login.Button />}
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
};
