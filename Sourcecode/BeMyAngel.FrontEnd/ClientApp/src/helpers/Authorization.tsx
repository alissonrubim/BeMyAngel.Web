import React from 'react';
import { Redirect } from 'react-router';
import { setCookie, getCookie } from 'react-use-cookie';
import IdentityServer from 'gateways/IdentityServer';
import AccessTokenPresentation from 'presentations/IdentityServer/AccessToken.presentation';

export class Authorization {
  cookieName: string = "BeMyAngelAccessToken";
  identityServer: IdentityServer;

  constructor(){
    this.identityServer = new IdentityServer();  
  }

  public GetCurrentToken(): string | null {
    var cookie = getCookie(this.cookieName);
    if(cookie === undefined || cookie === ""){
      return null;
    }
    return cookie;
  }

  public IsLogged(){
    return this.GetCurrentToken() != null;
  }

  public async Login(username: string, password: string): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      this.identityServer.GetTokenUsingPassword(username, password).then((accessToken: AccessTokenPresentation) => {
        setCookie(this.cookieName, accessToken.access_token, { path: '/' });
        resolve(true);
      });
    });
  }

  public Logout(){
    setCookie(this.cookieName, "", { path: '/' });
  }
}

var AuthorizationContext = new Authorization();

export interface AuthorizeProps {
  children?: any;
  roles?: string[]
}
export function Authorize(props: AuthorizeProps) { 
  if(!AuthorizationContext.IsLogged())
    return <Redirect to="/angel/login" />

  return (<>{props.children}</>)
}

export default AuthorizationContext;





//export default function GoogleAuthorization() {
    /*const oidcConfig = {
        onSignIn: async (user: any) => {
          alert('You just signed in, congratz! Check out the console!');
          console.log(user);
          window.location.hash = '';
        },
        authority: 'https://accounts.google.com',
        clientId: '1066073673387-undfdseanu1soilcdprq1p4m8gq8a1iu.apps.googleusercontent.com',
        responseType: 'id_token',
        redirectUri:'http://localhost:3000/',
    };*/

    /*const oidcConfig = {
        onSignIn: async (user: any) => {
          alert('You just signed in, congratz! Check out the console!');
          console.log(user);
          window.location.hash = '';
        },
        authority: 'https://accounts.google.com',
        clientId: '267197204406-07535cmi2fk82o19t6c3evgl9d4njeai.apps.googleusercontent.com',
        clientSecret: '6pHfcjvokN-F1D1hdyBMvgaC',
        responseType: 'id_token',
        redirectUri:'http://localhost:3000/authentication/google',
    };*/

    /*const oidcConfig = {
      onSignIn: async (user: any) => {
        alert('You just signed in, congratz! Check out the console!');
        console.log(user);
        window.location.hash = '';
      },
      authority: 'https://localhost:5051',
      clientId: '7D33F51A-2145-47EF-AF86-7922083E6C89.WebApp.BeMyAngel',
      responseType: 'code',
      popup_redirect_uri: "http://localhost:3000/authentication/google",
      redirectUri:'http://localhost:3000/authentication/google',
      scope: 'openid'
  };
    return <AuthProvider {...oidcConfig}></AuthProvider>;*/
//}