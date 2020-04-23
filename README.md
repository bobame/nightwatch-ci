# NightwatchJS + TravisCI

Following steps from [CodingWithDom Youtube Series](https://www.youtube.com/watch?v=TCOPxAKrwUY&list=PLHe-juD38yt4t38EsggDx2viWXz9Dc0OS&index=5)


### Setup

- $ npm init -y # create a default 
- $ npm install nightwatch --save-dev # add first dependency
- set package.json $.scripts.test to "nightwatch"
- $ npm i chromedriver --save-dev

    >Workaround on error indicating chromedriver only supports chrome version 83 when current version in system is 80 
    >>$ CHROMEDRIVER_VERSION=LATEST_80 npm install chromedriver --save-dev
    >>> chromedriver@81.0.0

____


### Running

- Add ```tests``` directory in project path
- Add test JS file(s) in tests directory with ```module.exports = { ... }``` [API Commands](https://nightwatchjs.org/api/commands/)
- Execute ```$ npm test```
- Execute with tag by adding ```'@tags': ['<tagName>'],``` in test file, run with ```npm test -- --tag <tagName>``` 

____


### Travis CI
[Travis CI Documentation for JavaScript with NodeJS](https://docs.travis-ci.com/user/languages/javascript-with-nodejs)

1. Sign up for Travis CI
2. Add non-private github repository to Travis CI
3. Add .travis.yml yaml file to the root of your project

TravisCI gives option to use on Google Chrome
    which is a free alternative to BrowserStack and SauceLabs!

___


### BrowserStack 
[BrowserStack Live](https://live.browserstack.com/dashboard#os=android&os_version=5.1&device=Google+Nexus+9&device_browser=chrome&zoom_to_fit=true&full_screen=true&url=www.browserstack.com%2Fwelcome&speed=1), 
[Products > Automate](https://automate.browserstack.com/dashboard/v2/getting-started), 
[Selenium with Nightwatch](https://www.browserstack.com/automate/nightwatch)

###### Quick Start Guide 

- Browserstack - Get Username and Access Key
- Browserstack - Get Capabilities configuration in target language, [capabilities generator](https://www.browserstack.com/automate/capabilities)
- Project - Create a .env file with ```BROWSERSTACK_USER=<username>``` and ```BROWSERSTACK_KEY=accesskey```
- Project - Update dependency, "dotenv" in package.json file
- Project - Add require statement at the top of nightwatch.conf.js file
- Project - Add nightwatch.browserstack.conf.js
- Project - Add to package.json $.scripts, ```"test:browserstack": "nightwatch -c nightwatch.browserstack.conf.js"```

___


### Page Objects
[Nightwatch docs](https://nightwatchjs.org/guide/working-with-page-objects/)
>Pattern to write e2e tests by wrapping pages or page fragments into objects. Allows software client to do and see anything a human can by abstracting away the underlying html actions needed to access and manipulate the page.

To configure, add the page_objects_path in ```nightwatch.conf.js```, the pair ```page_objects_path: ['page-objects'],```


____


### Debugging
###### Break at start:

- Start with ```$ node --help```
- Use ```--inspect-brk[=[host:]port]``` to activate inspector on host:port to break at start of script, then use debugger to step through code

###### Break naive:
- ```npx which nightwatch```
- Use npx to get the absolute path of nightwatch ```npx which nightwatch```

    >npx allows you to run local modules as if they are global, npx maps function to the relative function for the command that follows it

- Set package.json $.scripts.debug to ```"debug": "node --inspect-brk {result of npx which nightwatch}"```
- Run in terminal ```$ npm run debug```
- Open in chrome  ```chrome://inspect/#devices```, click ```inspect``` links, and press play button to execute 
- Run with tag in terminal ```$ npm run debug -- --tag <tagName>```
- Note same output in browser dev tools console tab
- Note that the double dash -- allows you to pass in arguments to npm script
- Add ```"debugger;"``` within test script, run, stops at this location

###### Break as expected:
* When nightwatch executes your test file, it grabs each command and puts it in a "command queue" on the side. It doesn't execute 
everything in a synchronous way. But it looks synchronous because because there are no .then(), or callbacks. And once it has created the queue, then it starts actually executing commands.
* But that requires us to use a client nightwatch command, and add ```.perform(() => { debugger; })``` within the chain in order to break where we expect to break.
