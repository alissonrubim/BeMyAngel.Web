import BeMyAngelApi from 'gateways/BeMyAngelApi/BeMyAngelApi'

export default class AuthService {
  Api = new BeMyAngelApi();

  public LoginAsAnonymous(): string{
    this.Api.LoginAsAnonymous();
    return '';
  }
}