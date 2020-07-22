import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {
});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('GitHub Users');
});

Given(/^Local Storage Caching is off$/, async () => {
  await page.setLocalStorageCachingOff();
});
Given(/^Local Storage Caching is on$/, async () => {
  await page.setLocalStorageCachingOn();
});
Given(/^Cache Only is off$/, async () => {
  await page.setCacheOnlyOff();
});
Given(/^Cache Only is on$/, async () => {
  await page.setCacheOnlyOn();
});

When(/^I clear the login field$/, async () => {
  await page.clearUserInputText();
});

When(/^I fill out the login field with "([^"]*)"$/, async (login) => {
  await page.setUserInputText(login);
});

Then(/^I should see the login field has "([^"]*)"$/, async (user) => {
  expect(await page.getUserInputText()).to.equal(user);
});

When(/^I fill out the filter field with "([^"]*)"$/, async (filter) => {
  await page.setFilterInputText(filter);
});

Then(/^I should see the filter field has "([^"]*)"$/, async (filter) => {
  expect(await page.getFilterInputText()).to.equal(filter);
});

Then(/^I should see the login field is blank$/, async () => {
  expect(await page.getUserInputText()).to.be.null;
});

Then(/^I should see the filter field is blank$/, async () => {
  const value = (await page.getFilterInputText()) ?? '';
  expect(await page.getFilterInputText()).to.equal('');
});

When(/^Click User$/, async () => {
  await page.getUserButton().click();
});

Then(/^I should see the detail photo name is "([^"]*)"$/, async (name) => {
  expect(await page.getPhotoNameFromDetail()).to.equal(name);
});

Then(/^I should see the detail login is "([^"]*)"$/, async (login) => {
  expect(await page.getLoginFromDetail()).to.equal(login);
});

Then(/^I should see the detail name is "([^"]*)"$/, async (name) => {
  expect(await page.getNameFromDetail()).to.equal(name);
});

Then(/^I should see the detail id is "([^"]*)"$/, async (id) => {
  expect(await page.getIdFromDetail()).to.equal(id);
});

Then(/^I should see the detail company is "([^"]*)"$/, async (company) => {
  const value = (await page.getCompanyFromDetail()) ?? '';
  company = company ?? '';
  expect(value).to.equal(company);
});

Then(/^I should see "([^"]*)" gists$/, async (count) => {
  const str = (await page.getGistsText()).trim();
  expect("Gists " + count).to.equal(str);
});

Then(/^I should count "([^"]*)" gists$/, async (count) => {
  const value = (await page.getGistsCount()) ?? 0;
  expect(value.toString()).to.equal(count.toString());
});

Then(/^I should count "([^"]*)" followers$/, async (count) => {
  const value = (await page.getFollowersCount()) ?? 0;
  expect(value.toString()).to.equal(count.toString());
});

Then(/^I should count "([^"]*)" followings$/, async (count) => {
  const value = (await page.getFollowingsCount()) ?? 0;
  expect(value.toString()).to.equal(count.toString());
});

Then(/^I find user "([^"]*)" in cache$/, async (user) => {
  expect((await page.isUserInLocalStorage(user))).to.not.be.null;
});
Then(/^I find followings "([^"]*)" in cache$/, async (followings) => {
  expect(await page.isFollowingsInLocalStorage(followings)).to.be.true;
});
Then(/^I find followers "([^"]*)" in cache$/, async (followers) => {
  expect(await page.isFollowersInLocalStorage(followers)).to.be.true;
});
Then(/^I find gists "([^"]*)" in cache$/, async (gists) => {
  expect(await page.isGistsInLocalStorage(gists)).to.be.true;
});
Then(/^I find gist "([^"]*)" in cache$/, async (gist) => {
  expect(await page.isGistInLocalStorage(gist)).to.be.true;
});

Then(/^I find user "([^"]*)" not in cache$/, async (user) => {
  expect(await page.isUserInLocalStorage(user)).to.be.false;
});
Then(/^I find followings "([^"]*)" not in cache$/, async (followings) => {
  expect(await page.isFollowingsInLocalStorage(followings)).to.be.false;
});
Then(/^I find followers "([^"]*)" not in cache$/, async (followers) => {
  expect(await page.isFollowersInLocalStorage(followers)).to.be.false;
});
Then(/^I find gists "([^"]*)" not in cache$/, async (gists) => {
  expect(await page.isGistsInLocalStorage(gists)).to.be.false;
});
Then(/^I find gist "([^"]*)" not in cache$/, async (gist) => {
  expect(await page.isGistInLocalStorage(gist)).to.be.false;
});

Given(/^I clear user cache for "([^"]*)"$/, async (user) => {
  await page.clearUserCache(user);
});
