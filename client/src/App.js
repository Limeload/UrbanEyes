import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    fetch('/me')
      .then(response => {
        if(response.ok) {
          response.json()
          .then((user) => setCurrentUser(user))
        }
      })
  }, [])

  function onLogIn(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  function onLogOut(){
    setCurrentUser(null)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage currentUser={currentUser} onLogOut={onLogOut} />
        </Route>
        <Route path="/login">
          <LoginForm onLogIn={onLogIn} />
          </Route>
          <Route exact path='/signup'>
          <SignUpForm onLogIn={onLogIn}/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
