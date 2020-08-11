import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { isRegExp } from 'util';

describe('workspace-project App tests', () => {
  let page: AppPage;

  const path = require('path');

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Truly InsaneLibs!');
  });

  it('should display username exists message', () => {
    page.navigateTo();
    page.clickRegisterButton();
    page.setRegUsername();
    page.setRegPassword();
    expect(page.getRegistrationMessage()).toEqual('That username has already been taken. Please choose another one.');
  });

  it('should display user welcome message', () => {
    page.navigateTo();
    page.setUsername();
    page.setPassword();
    page.clickLoginButton();
    expect(page.getUserWelcome()).toEqual('Welcome swilson!');
  });

  it('should display file create welcome message', () => {
    page.navigateTo();
    page.navigateToFileCreate();
    expect(page.getWelcome()).toEqual('Lib Creation With A Local File');
  });

  it('should upload a file and be ready to create a lib', () => {
    const fileToUpload = 'D://testing/test2.txt';
    const absolutePath = path.resolve(process.cwd(), fileToUpload);

    page.chooseFileCreate(absolutePath);
    page.clickSelectLibButton();
    browser.wait(element(by.id('createbutton')).isPresent(), 5000, 'The create lib button is not visible.');
    expect(page.seeCreateButton()).toEqual(true);
  });

  it('should display the finished lib after clicking Create Insane Lib', () => {
    page.setNoun();
    page.setAdjective();
    page.setColor();
    page.setPastVerb();
    page.clickCreateButton();
    expect(page.getFinishedLib()).toEqual('The tiny purple dog ran over the lazy dog.');
  });

  it('should display the correct alert after saving a finished lib', () => {
    page.setSavedLibName();
    page.clickSaveButton();
    browser.sleep(250);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Lib saved!');
  });

  it('should display file upload welcome message', () => {
    page.navigateTo();
    page.navigateToFileUpload();
    expect(page.getWelcome()).toEqual('Upload A Lib Template');
  });

  it('should display saved create welcome message', () => {
    page.navigateTo();
    page.navigateToSavedCreate();
    expect(page.getWelcome()).toEqual('Create A Lib With A Saved Template');
  });

  it('should display save view welcome message', () => {
    page.navigateTo();
    page.navigateToSaveView();
    expect(page.getWelcome()).toEqual('View Saved Lib');
  });

  it('should display the saved lib after clicking the select lib button', () => {
    page.setSavedLibToView();
    page.clickSelectButton();
    expect(page.getFinishedLib()).toEqual('The tiny purple dog ran over the lazy dog.');
  });

  it('should display the correct alert after deleting a saved lib', () => {
    page.clickDeleteButton();

    browser.sleep(250);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Lib deleted.');
  });

  it('should not display a logged in message after logging out', () => {
    expect(page.getLoggedInMessage()).toEqual(true);
    page.clickLogout();
    browser.switchTo().alert().dismiss();
    expect(page.getLoggedInMessage()).toEqual(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
