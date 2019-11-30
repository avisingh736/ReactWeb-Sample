import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MyTable from './MyTable';
import MyHome from './MyHome';
import UserDetails from './UserDetails';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><MyHome /></Route>
          <Route path="/myTable"><MyTable /></Route>
          <Route path="/userDetails/:id"><UserDetails /></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
