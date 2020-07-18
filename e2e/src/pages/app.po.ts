import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getBaseUserFormText() {
    return element(by.name('baseUsername')).getAttribute('value') as Promise<string>;
  }

  setBaseUserFormText(text) {
    let el = element(by.name('baseUsername'));
    el.sendKeys(text);
  }
  clearBaseUserFormText() {
    let el = element(by.name('baseUsername'));
    el.clear();
  }
}
