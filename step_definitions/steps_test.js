const { I } = inject();
// Add in your custom step files
const assert = require('assert');
const allure = codeceptjs.container.plugins('allure');

Before(async () => {
  // This code will run before each scenario
  await I.amOnPage('https://www.saucedemo.com/');
});

After(async () => {
  // This code will run after each scenario
});

Given('I use credentials as standard user', async() => {
  allure.severity('critical');
  await I.waitForElement({id: 'user-name'}, 60);
  await I.waitForElement({id: 'password'}, 60);
  await I.fillField({id: 'user-name'}, 'standard_user');
  await I.fillField({id: 'password'}, secret('secret_sauce'));
});

Given('I user credentials as locked out user', async() => {
  await I.waitForElement({id: 'user-name'}, 60);
  await I.waitForElement({id: 'password'}, 60);
  await I.fillField({id: 'user-name'}, 'locked_out_user');
  await I.fillField({id: 'password'}, secret('secret_sauce'));
});

Given('I use credentials as as problem user', async() => {
  await I.waitForElement({id: 'user-name'}, 60);
  await I.waitForElement({id: 'password'}, 60);
  await I.fillField({id: 'user-name'}, 'problem_user');
  await I.fillField({id: 'password'}, secret('secret_sauce'));
});

// common method
When('I try to login', async() => {
  await I.waitForElement({id: 'login-button'}, 60);
  await I.click({id: 'login-button'});
});

Then('I should not be able to login', async() => {
  await I.waitForElement({xpath: '//h3[@data-test="error"]'}, 60);
  await I.see('Epic sadface: Sorry, this user has been locked out.', {xpath: '//div[@class="error-message-container error"]'});
  let errorMsg = await I.grabTextFrom({xpath: '//div[@class="error-message-container error"]'});
  await console.log('Error Message: ' + errorMsg);
});

Then('I should be able to login', async() => {
  let grabTitle = await I.grabTitle();
  await console.log('Page Title: ' + grabTitle);
  await assert(grabTitle,'Swag Labs');
  let currentURL = await I.grabCurrentUrl();
  await console.log('Current Page URL: ' + currentURL);
  await assert(currentURL,'https://www.saucedemo.com/inventory.html');
});

