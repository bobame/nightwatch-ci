/* Cucumber also needs some configuration. Create JavaScript configuration file in the 
   project root folder. This file is responsible for setting up the default timeout,
   starting the WebDriver and creating the session.
*/
const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber'); // taking some stuff from cucumber runner
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');

setDefaultTimeout(60000); // max timeout a test can do by default

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});