import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import {Container} from 'reactstrap';
import Register from './components/Register';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  state = { 
    name: '',
    email: '',
    password: '',
    loggedIn: false,

  }


  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
      console.log('yay')
      if(this.state.loggedIn === false) {
        this.setState({loggedIn: true})
      }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <AppNavbar />
        <Container>
          <Route
            exact path='/'
            render={(props) => <Register {...props} onSubmit={this.onSubmit} onChange={this.onChangeHandler} />} />
          <Route exact path="/Profile" render={(props) => <Profile {...props} {...this.state}/>} />
        </Container>
        </div>
      </Router>
    );
  }
}

export default App;
