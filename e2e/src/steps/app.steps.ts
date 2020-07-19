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
  expect(await page.getTitleText()).to.equal('githubusers');
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
  // expect(await page.getFilterInputText()).to.be.null;
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
