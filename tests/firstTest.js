module.exports = {
    '@tags': ['first'],
    'My first test case': function(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', "Hacker News");
    }
}
