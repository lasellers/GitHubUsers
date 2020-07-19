import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getUserInputText() {
    return element(by.name('baseUsername')).getAttribute('value') as Promise<string>;
  }

  setUserInputText(text) {
    let el = element(by.name('baseUsername'));
    el.sendKeys(text);
  }

  clearUserInputText() {
    let el = element(by.name('baseUsername'));
    el.clear();
  }

  getFilterInputText() {
    return element(by.name('filterString')).getAttribute('value') as Promise<string>;
  }

  setFilterInputText(text) {
    let el = element(by.name('filterString'));
    el.sendKeys(text);
  }

  clearFilterInputText() {
    let el = element(by.name('filterString'));
    el.clear();
  }

  getUserButton() {
    return element(by.buttonText('User'));
  }

  getDefaultUserButton() {
    return element(by.buttonText('Default User'));
  }

  getUserStorageCacheButton() {
    return element(by.buttonText('Clear local storage cache'));
  }

  getPhotoNameFromDetail() {
    return element(by.css('h3.card-title')).getText() as Promise<string>;
  }

  getLoginFromDetail() {
    return element(by.id('login')).getText() as Promise<string>;
  }

  getNameFromDetail() {
    return element(by.id('name')).getText() as Promise<string>;
  }

  getCompanyFromDetail() {
    return element(by.id('company')).getText() as Promise<string>;
  }

  getIdFromDetail() {
    return element(by.id('id')).getText() as Promise<string>;
  }

}
