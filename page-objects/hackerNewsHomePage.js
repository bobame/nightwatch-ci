module.exports = {
    url: 'https://news.ycombinator.com/',
    elements: {
        // Header Section
        logo: { selector: 'img[src="y18.gif"]', locatorStrategy: 'css' }, // default is css
        navLinks_container: '.pagetop',
        // navLinks_container: {
        //     // go to parent a of logo, parent td of a, then the following td, and target its span
        //     //selector: '(//img[@src="y18.gif"]/parent::a/parent::td/following-sibling::td/span)[1]',
        //     selector: '//',
        //     locatorStrategy: 'xpath'
        // },
        navLink_new: '.pagetop a[href="newest"]',
        navLink_past: '.pagetop a[href="front"]',
        navLink_comments: '.pagetop a[href="newcomments"]',
        navLink_ask: '.pagetop a[href="ask"]',
        navLink_show: '.pagetop a[href="show"]',
        navLink_jobs: '.pagetop a[href="jobs"]',
        navLink_submit: '.pagetop a[href="submit"]',
        navLink_login: 'a[href^=login]',
        navLink_me: '#me',
        navLink_logout: '#logout',
        // News Items Section
        news_items_table: '#pagespace + tr table',
        news_item_first_row: '.itemlist .athing:first-child > td:first-child',
        news_item_first_row_rank: '.itemlist .athing:first-child > td:first-child > span',
        news_item_last_row: '#pagespace + tr tbody tr:nth-last-child(2)',
        news_item: '.athing',
        // Footer Section
        searchForm: 'form[method="get"]',
        searchField: 'input[name="q"]',
        moreLink: '.moreLink',
        moreLink_cssp: '#pagespace + tr tbody tr:last-child a',

    },
    commands: [{
        /* Assert on correct page */

        /* Clicks Login Link on the header bar */
        clickLoginLink() {
            return this.click('@navLink_login');
        },
        /* Clicks the More Link at the bottom of the page */
        clickMoreLink() {
            return this.click('@moreLink');
        },

        // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
        sleep(millis) {
            var date = new Date();
            var curDate = null;
            do { curDate = new Date(); }
            while(curDate-date < millis);
        },

        printPageInfo() {
            // this.element('css', '.pagetop a[href="newest"]', function(result) {
            //     console.log("test amit");
            // });
            console.log(this.getText('@navLink_new'));

            return this;
        },

        // clickNavigationLink(value) {
        //      switch (value) {
        //         case "new":
        //             //
        //             break;
        //         case y:
        //             //
        //             break
        //         default:
        //             throw: `Invalid navigation link value passed into clickNavigationLink(${value})`;
        //     }
        // },

        search(searchValue) {

        }
    }]
}
