module.exports = {
    '@tags': ['google'],
    '@disabled': true,
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();
        
        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_ko')
            .selectFilter('@lastUpdateDropdown', 'm')
            //.perform(() => { debugger; })
            .search()

        browser    
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_ko', 'Params: Language is Korean')
            .assert.urlContains('as_qdr=m', 'Params: Time period is last month')
            

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Korean pages"]';
        const resultsPageLastUpdateSelector = '[aria-label="Past month"]';

            
        browser.assert.visible(resultsPageQuerySelector, 'UI: Elong Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Korean pages', 'UI: Language is set to Korean');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month')

        browser.saveScreenshot('tests_output/google.png')
    }
}
