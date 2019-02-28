import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/screens/Home'
import Login from './components/userRegistration/Login'
import ClownRegister from './components/clownRegistration/Register'
import ClownLogin from './components/clownRegistration/Login'
import Register from './components/userRegistration/Register'
import Profile from './components/screens/Profile'
import Videos from './components/screens/Videos'
import VideoChat from './components/screens/VideoChat'
import Clowns from './components/screens/Clowns'
import SingleClown from './components/screens/SingleClown'

import './reset.css'
import './main.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videochat" component={VideoChat} />
            <Route exact path="/clowns" component={Clowns} />
            <Route exact path="/clowns/:id" component={SingleClown} />
            <Route exact path="/clowns/login" component={ClownLogin} />
            <Route exact path="/clowns/register" component={ClownRegister} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
