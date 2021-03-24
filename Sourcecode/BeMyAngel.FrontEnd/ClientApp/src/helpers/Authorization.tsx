import { AuthProvider } from 'oidc-react';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { useCookies } from 'react-cookie';

export class Authorization {
  cookieName: string = "BMA_SESSION_TOKEN";

  isLogged(){
    const [cookies] = useCookies();
    return (cookies[this.cookieName] != undefined);
  }

  loginUrl(){
    return "/angel/login";
  }

  loginAsAnonymous(){
    const [cookies, setCookie] = useCookies();
    setCookie(this.cookieName, "GGHHAA", { path: '/' });
  }

  logout(){
    const [cookies, setCookie, removeCookie] = useCookies();
    removeCookie(this.cookieName, { path: '/' });
  }
}

const AuthorizonContext = new Authorization();

export function Authorize(props: AuthorizeProps) { 
  if(!AuthorizonContext.isLogged())
    return <Redirect to={AuthorizonContext.loginUrl()} />

  return (<>{props.children}</>)

}
interface AuthorizeProps {
  children?: any;
  roles?: string[]
}

export default AuthorizonContext; 





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