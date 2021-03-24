import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import { ThemeProvider } from '@material-ui/core';
import MainTheme  from './Themes';

import MainArea from 'areas/main/MainArea';
import AngelArea from 'areas/angel/AngelArea';

export default class App extends Component {
  render() {
    return (<ThemeProvider theme={MainTheme}>
      <BrowserRouter>
        <MainArea path="/"/>
        <AngelArea path="/angel"/>
      </BrowserRouter>
    </ThemeProvider>);
  }
}