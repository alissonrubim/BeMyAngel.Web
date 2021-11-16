import axios, { AxiosInstance } from 'axios';
import querystring from 'querystring';
import AccessTokenPresentation from 'presentations/IdentityServer/AccessToken.presentation'

const Settings = require('AppSettings.json');

export default class IdentityServer {
  request: AxiosInstance;

  constructor(){
    this.request = axios.create({
      baseURL: Settings.Authentication.Authority,
      withCredentials: true,
      headers: {
        'Allow-Access-Origin': Settings.Api.BaseUrl,
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  public async GetTokenUsingPassword(username: string, password: string): Promise<AccessTokenPresentation>{
    return new Promise<AccessTokenPresentation>((resolver) => {
      this.request.post('/connect/token', querystring.stringify({
        client_id:  Settings.Authentication.ClientId,
        grant_type: "password",
        username: username,
        password: password
      })).then((response) => {
        resolver(response.data)
      })
    });
  }
}