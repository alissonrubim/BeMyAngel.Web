import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return ( 
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/chatroom' component={ChatRoom} />
      </BrowserRouter>
    );
  }
}
