import React, { useState, useCallback, useEffect, Suspense } from "react";
import Home from './Home/Home.js' ;
import Card from './Card/Card' ;
import Feedback from './Feedback/Feedback' ;
import Contact  from './Contact/Contact' ;
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  return (
      <Router>
        <main>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Card" exact>
          <Card />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Redirect to="/" />
      </Switch>
        </main>
      </Router>
  );
}

export default App;
