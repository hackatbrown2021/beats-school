import { useEffect, useState } from "react";
import logo from "./images/title.png";
import "./App.css";
import { SignIn } from "./visly/Components/Navbar/";
import { Account } from "./visly/Components/Navbar/";
import Navbar from "./visly/Layout/Navbar";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import ProfilePage from "./Pages/Profile";
import LandingPage from "./Pages/Landing";
import DashboardPage from "./Pages/Dashboard";
import MusicApp from "./MusicApp.js";
import { Route, Switch } from "react-router-dom";
import { auth } from "./auth/firebase";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  });

  return (
    <main>
      <Navbar
        Logo={
          <Navbar.Logo
            imageSrc={logo}
            onClick={() => {
              history.push("/");
            }}
          />
        }
        DashboardButton={
          user == null ? (
            <div></div>
          ) : (
            <Navbar.DashboardButton
              onClick={() => {
                history.push("/dashboard");
              }}
            />
          )
        }
        AccountButton={
          user == null ? (
            <SignIn
              ExistingUser={
                <SignIn.ExistingUser
                  onClick={() => {
                    history.push("/login");
                  }}
                />
              }
              NewUser={
                <SignIn.NewUser
                  onClick={() => {
                    history.push("/signup");
                  }}
                />
              }
            />
          ) : (
            <Account
              Button={
                <Account.Button
                  onClick={() => {
                    history.push("/profile");
                  }}
                />
              }
            />
          )
        }
      />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/music" component={MusicApp} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </main>
  );
};

export default App;
