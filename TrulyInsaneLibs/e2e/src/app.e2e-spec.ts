import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

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

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
