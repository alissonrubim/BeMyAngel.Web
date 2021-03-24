const Settings = require('../../AppSettings.json');

export default class BeMyAngelApi {
  public async LoginAsAnonymous(): Promise<any>{
    const response = await fetch(Settings.Api.BaseUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    return response.json();
  }
}