import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async setLocalStorageCachingOff() {
    const state = (await element(by.id('local-storage-caching')).isSelected());
    if (state) {
      await element(by.id('local-storage-caching')).click();
    } else {
    }
  }

  async setLocalStorageCachingOn() {
    const state = (await element(by.id('local-storage-caching')).isSelected());
    if (state) {
    } else {
      await element(by.id('local-storage-caching')).click();
    }
  }

  async setCacheOnlyOff() {
    const state = (await element(by.id('cache-only')).isSelected());
    if (state) {
      await element(by.id('cache-only')).click();
    } else {
    }
  }

  async setCacheOnlyOn() {
    const state = (await element(by.id('cache-only')).isSelected());
    if (state) {
    } else {
      await element(by.id('cache-only')).click();
    }
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getUserInputText() {
    return element(by.name('baseUsername')).getAttribute('value') as Promise<string>;
  }

  setUserInputText(text) {
    element(by.name('baseUsername')).sendKeys(text);
  }

  clearUserInputText() {
    element(by.name('baseUsername')).clear();
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
    return element(by.id('photo-name')).getText() as Promise<string>;
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

  getGistsCount() {
    return element.all(by.css('table#gists tbody tr')).count() as Promise<number>;
  }

  getGistsText() {
    // return (element(by.css('app-user-gists .card-title')).textContent).trim();
    return element(by.css('app-user-gists .card-title')).getText();
  }

  getFollowersCount() {
    return element.all(by.css('table#followers tbody tr')).count() as Promise<number>;
  }

  getFollowingsCount() {
    return element.all(by.css('table#followings tbody tr')).count() as Promise<number>;
  }

  public clearUserCache(username: string) {
    return element(by.css('[ngbtooltip="Clear user cache"]')).click();
  }

  public isUserInLocalStorage(username: string) {
    return element(by.css('[ngbtooltip="User is cached"]')).isPresent() as Promise<boolean>
  }

  public isFollowersInLocalStorage(username: string) {
    return element(by.css('[ngbtooltip="Followers is cached"]')).isPresent() as Promise<boolean>
  }

  public isFollowingsInLocalStorage(username: string) {
    return element(by.css('[ngbtooltip="Followings is cached"]')).isPresent() as Promise<boolean>
  }

  public isGistsInLocalStorage(username: string) {
    return element(by.css('[ngbtooltip="Gists is cached"]')).isPresent() as Promise<boolean>
  }

  public isGistInLocalStorage(username: string) {
    return element(by.css('[ngbtooltip="Gist is cached"]')).isPresent() as Promise<boolean>
  }

}
