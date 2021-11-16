import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

const Settings = require('AppSettings.json');

export default class BeMyAngelApiChatHub {
  private Connection?: HubConnection;

  public OnReceiveEvent?: (hubEvent: any) => void;

  public Connect(ChatToken: string): void {
    this.Connection = new HubConnectionBuilder()
      .withUrl(Settings.Api.BaseUrl + `/hubs/chat/${ChatToken}`)
      .withAutomaticReconnect()
      .build();

    /*this.Connection!.start()
      .then(result => {
        console.log('Connected to BeMyAngelApiChatHub!');
        this.Connection!.on('ReceiveMessage', hubEvent => {
          if(this.OnReceiveEvent != null)
            this.OnReceiveEvent(hubEvent);
        });
      })
      .catch(e => {
        console.log('Connection failed: ', e)
      });*/
  }

  public Disconnect(): void {
    if(this.Connection != null)
      this.Connection!.stop();
  }
}