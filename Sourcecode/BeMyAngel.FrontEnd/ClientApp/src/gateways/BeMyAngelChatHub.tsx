import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

const Settings = require('AppSettings.json');

export default class BeMyAngelApiChatHub {
  private Connection?: HubConnection;

  public OnReceiveChatEvent?: (senderSessionToken: string, hubEvent: any) => void;
  public OnConnected?: () => void;
  public OnError?: () => void;

  public Connect(ChatToken: string): void {
    let url = Settings.Api.BaseUrl + `/hubs/chat` + (ChatToken ? `/${ChatToken}` : '');

    this.Connection = new HubConnectionBuilder()
      .withUrl(url, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    this.Connection!.start()
      .then(result => {
        console.log('Connected to BeMyAngelApiChatHub!');
        if(this.OnConnected != null)
          this.OnConnected();
        this.Connection!.on('ReceiveMessage', (senderSessionToken, chatEvent) => {
          if(this.OnReceiveChatEvent != null)
            this.OnReceiveChatEvent(senderSessionToken, chatEvent);
        });
      })
      .catch(e => {
        console.log('Connection failed: ', e)
        if(this.OnError != null)
          this.OnError();
      });
  }

  public Disconnect(): void {
    if(this.Connection != null)
      this.Connection!.stop();
  }
}
