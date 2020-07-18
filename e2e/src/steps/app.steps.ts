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

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('githubusers');
});

When(/^I clear the user field$/, async () => {
  await page.clearBaseUserFormText();
});

When(/^I fill out the user field with "test"$/, async () => {
  await page.setBaseUserFormText('test');
});

Then(/^I should see the user "lasellers"$/, async () => {
  expect(await page.getBaseUserFormText()).to.equal('lasellers');
});

Then(/^I should see the user "test"$/, async () => {
  expect(await page.getBaseUserFormText()).to.equal('test');
});
