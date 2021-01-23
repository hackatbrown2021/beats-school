import logo from "./images/title.png";
import "./App.css";
import SignIn from "./visly/Components/Navbar/SignIn";
import Account from "./visly/Components/Navbar/Account";
import Navbar from "./visly/Layout/Navbar";
import LoginPage from "./Pages/Login";
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
        <Route path="/" component={MusicApp} exact />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </main>
  );
}

export default App;
