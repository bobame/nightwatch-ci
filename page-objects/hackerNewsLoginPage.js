module.exports = {
    url: 'https://news.ycombinator.com/login',
    elements: {
        loginBtn: 'input[value="login"]',
        createAccountBtn: 'input[value="create account"]',
        forgotPasswordLink: 'a[href="forgot"]',
        
    },
    commands: [{
        /* Assert on correct page */

        /* Login using test username and password */
        enterLoginCredentialsFromFile() {
            const username = process.env.HACKERNEWS_USERNAME;
            const password = process.env.HACKERNEWS_PASSWORD;
            this.enterLoginCredentials(username, password);
        },
        /* Login using passed in username and password */
        enterLoginCredentials(){
            const page = this;
            // 
            // page
            //     .setValue()
            //     .setValue()
            //     .click()
            //     ;
            
            return page;
        }
        

    }]
}