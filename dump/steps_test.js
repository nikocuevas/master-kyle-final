const { I } = inject();
// Add in your custom step files

Before(async () => {
  // This code will run before each scenario
  await I.amOnPage('/');
});

After(async () => {
  // This code will run after each scenario
});

Given('I have a defined step', async() => {
  // TODO: replace with your own step
  
  await I.waitForElement({css: 'div[class=cookie-notification]'},30);
  await I.seeElement({css: 'div[class=cookie-notification]'});
  await I.click({xpath: '//a[@class="band--button cookie-button"]'});
  await console.log('Cookie is accepted!');
  await I.wait(5);
});
