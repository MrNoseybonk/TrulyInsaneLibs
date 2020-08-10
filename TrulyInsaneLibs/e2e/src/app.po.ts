import { browser, by, element } from 'protractor';

by.addLocator('formControlName', (value, optParentElement, optRootSelector) => {
  const using = optParentElement || document;

  return using.querySelectorAll('[formControlName="' + value + '"]');
});

by.addLocator('routerLink', (value, optParentElement, optRootSelector) => {
  const using = optParentElement || document;

  return using.querySelectorAll('[routerLink="' + value + '"]');
});

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

getTitleText(): Promise<string>
{
  return element(by.css('div.title')).getText() as Promise<string>;
}

clickRegisterButton()
{
  element(by.id('register')).click();
}

getRegistrationMessage(): Promise<string>
{
  return element(by.id('message')).getText() as Promise<string>;
}

setRegUsername()
{
  element(by.formControlName('regUsername')).sendKeys('swilson');
}

setRegPassword()
{
  element(by.formControlName('regPassword')).sendKeys('pass');
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

getWelcome(): Promise<string>
{
  return element(by.css('div.intro h2')).getText() as Promise<string>;
}

navigateToFileCreate()
{
  element(by.routerLink('/filecreate')).click();
}

navigateToFileUpload()
{
  element(by.routerLink('/fileupload')).click();
}

navigateToSavedCreate()
{
  element(by.routerLink('/savedcreate')).click();
}

navigateToSaveView()
{
  element(by.routerLink('/savedview')).click();
}

clickLogout()
{
  element(by.id('navLogout')).click();
}
}
