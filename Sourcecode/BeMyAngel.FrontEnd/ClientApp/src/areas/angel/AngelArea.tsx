import React from "react";
import { Route } from "react-router";
import Area from "../../components/Area";
import { Authorize } from "../../helpers/Authorization";

import MainLayout from './layouts/Main.layout'
import HomePage from './pages/Home.page'
import ChatPage from './pages/Chat.page'
import LoginPage from './pages/Login.page'

export default class AngelArea extends Area {
    getHomePage = (props: any) => (
      <MainLayout>
        <Authorize roles={["psychiatrist"]}>
          <HomePage />
        </Authorize>
      </MainLayout>)
      
    getChatPage = (props: any) => (
      <MainLayout>
        <Authorize roles={["psychiatrist"]}>
          <ChatPage />
        </Authorize>
      </MainLayout>)

    getLoginPage = (props: any) => (
      <MainLayout>
        <LoginPage />
      </MainLayout>)

    render(){
        return (<>
            <Route exact path={this.getPath("/")} component={this.getHomePage}/>
            <Route path={this.getPath("/Chat")} component={this.getChatPage}/>
            <Route path={this.getPath("/login")} component={this.getLoginPage}/>
        </>)
    }
};