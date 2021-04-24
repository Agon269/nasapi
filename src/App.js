import React from "react";
import Asteroid from "./pages/Asteroid";
import Error404 from "./pages/Error";
import Home from "./pages/Home";
import WeatherOnMars from "./pages/WeatherOnMars";
import Header from "./components/Header";
import "./style/main.css";
import Satellite from "./pages/SatelliteImage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./style/app.css";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/asteroid" component={Asteroid} />
          <Route path="/mars" component={WeatherOnMars} />
          <Route path="/satelite" component={Satellite} />
          <Route path="/404" component={Error404} />
          <Redirect from="*" to="/404" />
        </Switch>
      </>
    </Router>
  );
}

export default App;
