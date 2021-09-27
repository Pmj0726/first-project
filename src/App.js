import React, { useState, useEffect } from "react";
import Home from "./Home/Home.js";
import Mentor from "./Mentor/Mentor";
import Feedback from "./Feedback/Feedback";
import Contact from "./Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  const [loginData, setLoginData] = useState({
    Name: "",
    Branch: "",
    RollNumber: "",
    Email: "",
  });
  const [Interest, setInterest] = useState({
    Web: false,
    App: false,
    Ml: false,
    Dl: false,
    Cp: false,
  });
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setLoginData(data);
    } // eslint-disable-next-line
    data = JSON.parse(localStorage.getItem("Interest"));
    if (data) {
      setInterest(data);
    } // eslint-disable-next-line
  }, []);
 
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home
              onChangeLogin={setLoginData}
              onChangeInterest={setInterest}
              Interest={Interest}
              loginData={loginData}
            />
          </Route>
          <Route path="/mentor" exact>
            <Mentor interest={Interest} />
          </Route>
          <Route path="/contact">
            <Contact loginData={loginData} />
          </Route>
          <Route path="/feedback">
            <Feedback loginData={loginData} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
