import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './App.css';
import {addUser} from './component/models/addUser';
import {welcome} from './component/welcome';


function App() {
  return (
      <div>
        <div className="App">
          <Router>
            <div>

              <Switch>
                <Route exact path='/' component={welcome} />
                <Route exact path='/adduser' component={addUser} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
  );
}

export default App;
