import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App tests', () => {
  let page: AppPage;

  const path = require('path');

  beforeEach(() => {
    page = new AppPage();
  });

  // 1
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Truly InsaneLibs!');
  });

  // 2
  it('should display username exists message', () => {
    page.navigateTo();
    page.clickRegisterButton();
    page.setRegUsername();
    page.setRegPassword();
    expect(page.getRegistrationMessage()).toEqual('That username has already been taken. Please choose another one.');
  });

  // 3
  it('should display user welcome message', () => {
    page.navigateTo();
    page.setUsername();
    page.setPassword();
    page.clickLoginButton();
    expect(page.getUserWelcome()).toEqual('Welcome swilson!');
  });

  // 4
  it('should display file create welcome message', () => {
    page.navigateTo();
    page.navigateToFileCreate();
    expect(page.getWelcome()).toEqual('Lib Creation With A Local File');
  });

  // 5
  it('should upload a file and be ready to create a lib', () => {
    const fileToUpload = 'D://testing/test2.txt';
    const absolutePath = path.resolve(process.cwd(), fileToUpload);

    page.chooseFile(absolutePath);
    page.clickSelectLibButton();
    browser.wait(element(by.id('createbutton')).isPresent(), 5000, 'The create lib button is not visible.');
    expect(page.seeCreateButton()).toEqual(true);
  });

  // 6
  it('should display the finished lib after clicking Create Insane Lib', () => {
    page.setNoun();
    page.setAdjective();
    page.setColor();
    page.setPastVerb();
    page.clickCreateButton();
    expect(page.getFinishedLib()).toEqual('The tiny purple dog ran over the lazy dog.');
  });

  // 7
  it('should display the correct alert after saving a finished lib', () => {
    page.setSavedLibName();
    page.clickSaveButton();
    browser.sleep(350);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Lib saved!');
  });

  // 8
  it('should display file upload welcome message', () => {
    page.navigateTo();
    page.navigateToFileUpload();
    expect(page.getWelcome()).toEqual('Upload A Lib Template');
  });

  // 9
  it('should make the upload button active when a file is selected and a lib template name is entered', () => {
    const fileToUpload = 'D://testing/test2.txt';
    const absolutePath = path.resolve(process.cwd(), fileToUpload);

    page.chooseFile(absolutePath);
    page.setLibName();
    expect(page.getUploadButtonIsEnabled()).toEqual(true);
  });

  // 10
  it('should display the correct alert after saving a lib template', () => {
    page.clickUploadButton();

    browser.sleep(250);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Template saved!');
  });

  // 11
  it('should display saved create welcome message', () => {
    page.navigateTo();
    page.navigateToSavedCreate();
    expect(page.getWelcome()).toEqual('Create A Lib With A Saved Template');
  });

  // 12
  it('should be ready to create a lib after selecting a lib template from the list and clicking on the select lib button', () => {
    page.setLibTemplateToUse();
    page.clickSelectLibButton();
    browser.wait(element(by.id('createbutton')).isPresent(), 5000, 'The create lib button is not visible.');
    expect(page.seeCreateButton()).toEqual(true);
  });

  // 13
  it('should show the correct alert after deleting a lib template', () => {
    page.clickDeleteTemplateButton();

    browser.sleep(250);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Template deleted.');
  });

  // 14
  it('should display save view welcome message', () => {
    page.navigateTo();
    page.navigateToSaveView();
    expect(page.getWelcome()).toEqual('View Saved Lib');
  });

  // 15
  it('should display the saved lib after clicking the select lib button', () => {
    page.setSavedLibToView();
    page.clickSelectButton();
    expect(page.getFinishedLib()).toEqual('The tiny purple dog ran over the lazy dog.');
  });

  // 16
  it('should display the correct alert after deleting a saved lib', () => {
    page.clickDeleteButton();

    browser.sleep(250);
    const alerttext = browser.switchTo().alert().getText().then.toString();
    browser.switchTo().alert().dismiss();
    expect(alerttext === 'Lib deleted.');
  });

  // 17
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
