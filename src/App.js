import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MyTable from './components/MyTable';
import MyHome from './components/MyHome';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><MyHome /></Route>
          <Route path="/myTable"><MyTable /></Route>
          {/* <Route path="/userDetails/:id"><UserDetails /></Route> */}
          <Route path="/userDetails/:id" render={(props) => <UserDetails {...props} />}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
