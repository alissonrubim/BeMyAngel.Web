import React from "react";
import { Route } from "react-router";
import Area from "components/Area";
import MainLayout from 'areas/main/layouts/Main.layout'
import HomePage from 'areas/main/pages/Home.page'
import ChatPage from 'areas/main/pages/Chat.page'

export default class MainArea extends Area {
  getHomePage = (props: any) => (
    <MainLayout>
      <HomePage />
    </MainLayout>)
  getChatPage = (props: any) => (
    <MainLayout>
      <ChatPage ChatId={props.match.params.ChatId}/>
    </MainLayout>
  )

  render(){
    return (<>
      <Route exact path={this.getPath("/")} component={this.getHomePage}/>
      <Route path={this.getPath("/chat/:ChatId?")} component={this.getChatPage}/> 
    </>)
  }
};