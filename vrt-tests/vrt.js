// TODO: DEBUGGING NOW

exports.assertion = function localgrace(elementId) {
    console.log("\n\n\n*********** inside local func **************\n\n");
  }
const screenshotIdenticalToBaseline = require('/Users/grace/Documents/Courses/nightwatch-ci/node_modules/nightwatch-vrt/assertions/screenshotIdenticalToBaseline')
    
  module.exports = {
      '@tags': ['first'],
      'My second test case'(browser) {
        // const headerSelector = 'td[bgcolor="#ff6600"]';
        const headerSelector = '.hnname';
        browser
          .url('https://news.ycombinator.com/')
          .waitForElementVisible(headerSelector, 10000)
          .resizeWindow(1024,768)
          .assert.screenshotIdenticalToBaseline(headerSelector) //(headerSelector, fileName=headerSelector, null,'hn-header');
          // .assert.localgrace(headerSelector,'.hnname')
          .end()
        }
  }

  // 'use strict'
  // 
  // module.exports = {
  //     'Render test': function (browser) {
  //         browser
  //             .url('http://localhost:8080/demo2/')
  //             .waitForElementVisible('body', 1000)
  //             .resizeWindow(1024, 768)
  //             .assert.screenshotIdenticalToBaseline('body h1')
  //             .end()
  //     }
  // }





