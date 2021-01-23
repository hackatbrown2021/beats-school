import logo from "./images/title.png";
import "./App.css";
import SignIn from "./visly/Components/Navbar/SignIn";
import Account from "./visly/Components/Navbar/Account";
import Navbar from "./visly/Layout/Navbar";
import LoginPage from "./Pages/Login";
import LandingPage from "./Pages/Landing";
import MusicApp from "./MusicApp.js";
import { Route, Switch } from "react-router-dom";

function App() {
  var authenticated = true;
  return (
    <main>
      <Navbar
        imageSrc={logo}
        AccountButton={authenticated ? <Account /> : <SignIn />}
      />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/music" component={MusicApp} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </main>
  );
}

export default App;
