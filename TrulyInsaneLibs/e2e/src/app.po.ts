import { browser, by, element } from 'protractor';

by.addLocator('formControlName', (value, optParentElement, optRootSelector) => {
  const using = optParentElement || document;

  return using.querySelectorAll('[formControlName="' + value + '"]');
});

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

getTitleText(): Promise<string> {
    return element(by.css('div.title')).getText() as Promise<string>;
  }

setUsername()
{
    element(by.formControlName('username')).sendKeys('swilson');
  }

setPassword()
{
    element(by.formControlName('password')).sendKeys('pass');
  }

clickLoginButton()
{
    element(by.id('loginbutton')).click();
  }

getUserWelcome(): Promise<string>
  {
    return element(by.id('welcome')).getText() as Promise<string>;
  }
}
