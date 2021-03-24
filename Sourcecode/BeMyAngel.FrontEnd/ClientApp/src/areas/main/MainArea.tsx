import React from "react";
import { Route } from "react-router";
import Area from "../../components/Area";
import Home from './pages/Home'
import Chat from './pages/Chat'

export default class MainArea extends Area {
  getHomePage = () => (<Home />)
  getChatPage = () => (<Chat />)

  render(){
    return (<>
      <Route exact path={this.getPath("/")} component={this.getHomePage}/>
      <Route path={this.getPath("/chat")} component={this.getChatPage}/> 
    </>)
  }
};