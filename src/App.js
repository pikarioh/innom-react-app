import React from 'react'
import { Route, Link } from 'react-router-dom';

import HomePage from "./HomePage";
import EventPage from "./EventPage";
import AboutPage from "./AboutPage"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/eventer" component={EventPage} />
      <Route exact path="/omoss" component={AboutPage} />
    </div>
  )
}

export default App;
