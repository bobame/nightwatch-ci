module.exports = {
    '@tags': ['study-hn'],
    '@disabled': false,

    'Navigate to Hacker News home page and test API commands': function(browser) {
        browser.page.hackerNewsHomePage().navigate().waitForElementVisible('@logo');
    },

    'Expect title, url, elements count and individual element types': function(browser) {
        const page = browser.page.hackerNewsHomePage();

        // Expect on title and url
        page.expect.title().to.contain('Hacker News');
        page.expect.title().to.equals('Hacker News');
        page.expect.url().to.contain('ycombinator');
        page.expect.url().to.startWith('https://');
        page.expect.url().to.endWith('.com/');

        // Elements Count
        page.expect.elements('@news_item').count.to.equal(30);

        // Element
        page.expect.element('@navLink_new').to.be.present;
        page.expect.element('@navLink_past').to.be.an('a', 'Testing if past nav link is an a tag element');
        page.expect.element('.pagetop > b').to.have.css('height').which.equals('auto');
        page.expect.element('@news_item_last_row').to.have.css('height').which.equals('10px');
        page.expect.element('@moreLink_cssp').to.have.property('className').equals('morelink');
        page.expect.element('@moreLink_cssp').to.have.property('classList').contain('morelink');
        page.expect.element('@navLink_comments').to.be.present;
        page.expect.element('@navLink_ask').to.be.visible;
        page.expect.element('@navLink_show').to.be.visible.before(100);
        page.expect.element('@navLink_jobs').text.to.contain('jobs');
        page.expect.element('@navLink_submit').text.to.equal('submit');
        page.expect.element('@navLink_login').to.be.present;
    },

    'Assert attributes and properties on elements': function(browser) {
        const page = browser.page.hackerNewsHomePage();

        page // positive assertions
            .assert.attributeContains('@searchForm', 'action', 'hn.algolia.com')
            .assert.attributeEquals('@searchField', 'autocorrect', 'off') // false vs. off?
            .assert.containsText('@searchForm', "Search")
            .assert.cssClassPresent('@news_items_table', 'itemlist')
            .assert.cssProperty('@news_item_last_row', 'height', '10px')
            .assert.domPropertyContains('@news_item_first_row', 'classList', 'title')
            .assert.domPropertyContains('@news_item_first_row', 'classList', ['title'])
            .assert.domPropertyContains('@news_item_first_row', 'className', 'title')
            .assert.domPropertyContains('@news_item_first_row_rank', 'innerText', '1.')
            .assert.domPropertyEquals('@news_item_first_row_rank', 'classList', ['rank'])
            .assert.elementPresent('input')
            .assert.elementPresent('@searchField')
            .assert.title('Hacker News')
            .assert.urlContains('/news')
            .assert.urlEquals('https://news.ycombinator.com/')
            .assert.value('@searchField', '')
            .assert.visible('@navLink_login')
            ;

        // todo negative assertions, toggle candidates
    },

    'Login to Hacker News': function(browser) {
        const homePage = browser.page.hackerNewsHomePage();
        const loginPage = browser.page.hackerNewsLoginPage();

        homePage
            .waitForElementPresent('@navLink_login')
            .clickLoginLink();
        loginPage
            .waitForElementVisible('@loginBtn')
            .enterLoginCredentialsFromFile();
        homePage
            .assert.visible('@navLink_logout')
            ;

    },

    before : function(browser) {
        console.log('Setting up...');
    },

    after : function(browser) {
        console.log('Tearing down...');
        browser.pause(5000);
    }


}
