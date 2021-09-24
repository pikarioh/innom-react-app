import React from 'react'
import { Route, Link } from 'react-router-dom';

import HomePage from "./HomePage";
import EventPage from "./EventPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/test" component={EventPage} />
    </div>
  )
}

export default App;
