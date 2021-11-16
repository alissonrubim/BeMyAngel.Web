import BeMyAngelApi from 'gateways/BeMyAngelApi';
import React from 'react';
import { setCookie, getCookie } from 'react-use-cookie';

export class SessionManager {
  beMyAngelApi: BeMyAngelApi;
  cookieName: string = "BeMyAngelSessionToken";

  constructor(){
    this.beMyAngelApi = new BeMyAngelApi();
  }

  public GetCurrentToken(): string | null {
    var cookie = getCookie(this.cookieName);
    if(cookie === undefined || cookie === ""){
      return null;
    }
    return cookie;
  }

  public Start(): void {
    this.beMyAngelApi.Session_GetToken().then((sessionToken: string) => {
      setCookie(this.cookieName, sessionToken);
    })
  }
}

var SessionContext = new SessionManager();

export interface SessionProps {
  children?: any;
}
export function Session(props: SessionProps) { 
  if(SessionContext.GetCurrentToken() == null)
    SessionContext.Start();

  return (<>{props.children}</>)
}

export default SessionContext;