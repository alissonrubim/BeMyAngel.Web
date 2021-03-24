import React from "react";
import { Route } from "react-router";
import Area from "../../components/Area";
import { Authorize } from "../../helpers/Authorization";

import Layout from './layouts/Layout'
import Home from './pages/Home'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'

export default class AngelArea extends Area {
    getHomePage = () => (<Layout>
            <Authorize roles={["psychiatrist"]}><Home /></Authorize>
        </Layout>)
    getChatRoomPage = () => (<Layout>
        <Authorize roles={["psychiatrist"]}><Home /></Authorize>
    </Layout>)
    getLoginPage = () => (<Layout><Login /></Layout>)

    render(){
        return (<>
            <Route exact path={this.getPath("/")} component={this.getHomePage}/>
            <Route path={this.getPath("/chatroom")} component={this.getChatRoomPage}/>
            <Route path={this.getPath("/login")} component={this.getLoginPage}/>
        </>)
    }
};