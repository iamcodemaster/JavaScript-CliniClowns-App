import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/screens/Home'
import Login from './components/userRegistration/Login'
import ClownRegister from './components/clownRegistration/Register'
import ClownLogin from './components/clownRegistration/Login'
import Register from './components/userRegistration/Register'
import Settings from './components/screens/Settings'
import GuestBook from './components/screens/GuestBook'
import Agenda from './components/screens/Agenda'
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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/agenda" component={Agenda} />
            <Route exact path="/guestbook" component={GuestBook} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videochat" component={VideoChat} />
            <Route exact path="/clowns" component={Clowns} />
            <Route exact path="/clowns/:id" component={SingleClown} />
            <Route exact path="/clowns/login" component={ClownLogin} />
            <Route exact path="/clowns/register" component={ClownRegister} />
          </div>
      </Router>
    );
  }
}

export default App;
