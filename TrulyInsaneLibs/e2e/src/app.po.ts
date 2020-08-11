import { browser, by, element, ElementFinder } from 'protractor';

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

getLoggedInMessage(): Promise<boolean>
{
  return element(by.css('span.loggedin')).isPresent() as Promise<boolean>;
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

clickChooseFileButton()
{
  element(by.buttonText('Choose File')).click();
}

chooseFileCreate(absolutePath)
{
  element(by.css('input[type="file"]')).sendKeys(absolutePath);
}

clickSelectLibButton()
{
  element(by.id('getlib')).click();
}

seeCreateButton(): Promise<boolean>
{
  return element(by.id('createbutton')).isPresent() as Promise<boolean>;
}

clickLogout()
{
  element(by.id('navLogout')).click();
}

setNoun()
{
  const sampleElement: ElementFinder = element(by.className('loggedIn'))
        .element(by.id('libcreate'))
        .element(by.id('inputs'))
        .element(by.className('nouns'))
        .element(by.tagName('input'));
  sampleElement.sendKeys('dog');
}

setAdjective()
{
  const sampleElement: ElementFinder = element(by.className('loggedIn'))
        .element(by.id('libcreate'))
        .element(by.id('inputs'))
        .element(by.className('adjectives'))
        .element(by.tagName('input'));
  sampleElement.sendKeys('tiny');
}

setColor()
{
  const sampleElement: ElementFinder = element(by.className('loggedIn'))
    .element(by.id('libcreate'))
    .element(by.id('inputs'))
    .element(by.className('colors'))
    .element(by.tagName('input'));
  sampleElement.sendKeys('purple');
}

setPastVerb()
{
  const sampleElement: ElementFinder = element(by.className('loggedIn'))
    .element(by.id('libcreate'))
    .element(by.id('inputs'))
    .element(by.className('pasts'))
    .element(by.tagName('input'));
  sampleElement.sendKeys('ran');
}

clickCreateButton()
{
  element(by.id('createbutton')).click();
}

getFinishedLib(): Promise<string>
{
  return element(by.id('finished')).getText() as Promise<string>;
}
}
