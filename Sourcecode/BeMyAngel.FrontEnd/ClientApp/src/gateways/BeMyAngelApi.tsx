import axios, { AxiosInstance } from 'axios';
import AuthorizationContext from 'helpers/Authorization';
import ChatPresentation from 'presentations/Chat.presentation'
import ChatEventPresentation from 'presentations/ChatEvent.presentation';

const Settings = require('AppSettings.json');

export default class BeMyAngelApi {
  private GetRequest(): AxiosInstance{
    var headers:any = {
      'Allow-Access-Origin': Settings.Api.BaseUrl,
      'Content-Type': 'application/json'
    };

    if(AuthorizationContext.IsLogged())
      headers['Authorization'] = `Bearer ${AuthorizationContext.GetCurrentToken()}`;

    return axios.create({
      baseURL: Settings.Api.BaseUrl,
      withCredentials: true,
      headers: headers
    });
  }

  /** Chat **/
  public async Chat_GetCurrent(): Promise<ChatPresentation>{
    return new Promise<ChatPresentation>((resolve) => {
      this.GetRequest().get('/chat/current').then((response) => {
        resolve(response.data)
      })
    });
  }

  public async Chat_Get(ChatId: number): Promise<ChatPresentation>{
    return new Promise<ChatPresentation>((resolve) => {
      this.GetRequest().get(`/chat/${ChatId}`).then((response) => {
        resolve(response.data)
      })
    });
  }

  /** ChatEvent **/
  public async ChatEvent_PostMessage(ChatId: number, message: string): Promise<void>{
    return new Promise<void>(() => {
      this.GetRequest().post('/chatEvent/postMessage', { 
          ChatId: ChatId,
          Message: message 
        })
    });
  }

  public async ChatEvent_GetAll(ChatId: number): Promise<ChatEventPresentation[]>{
    return new Promise<ChatEventPresentation[]>((resolve) => {
      this.GetRequest().get(`/chatEvent/${ChatId}`).then((response) => {
        resolve(response.data)
      })
    });
  }

  /** Session **/
  public async Session_GetToken(): Promise<string>{
    return new Promise<string>((resolve) => {
      this.GetRequest().get(`/session/current`).then((response) => {
        resolve(response.data)
      })
    });
  }
}