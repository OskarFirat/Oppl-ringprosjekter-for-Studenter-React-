import React from 'react';
import Contacts from './components/Contacts.js';
import Header from './components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About.js';
import Notfound from './NotFound.js';

function App() {
  return (
    <Router>
      <div>
        <Header Yrke="Contact Manager"/>
        <div className="container">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Contacts" exact component={Contacts} />
              <Route path="/About" exact component={About} />
              <Route component={Notfound}/>      
          </Switch>
          </div>
      </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <h1> Home Page </h1>
  </div>
);

export default App;
