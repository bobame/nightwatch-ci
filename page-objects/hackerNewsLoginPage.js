module.exports = {
    url: 'https://news.ycombinator.com/login',
    elements: {
        loginBtn: 'input[value="login"]',
        createAccountBtn: 'input[value="create account"]',
        forgotPasswordLink: 'a[href="forgot"]',
        loginUsernameField: 'form:first-of-type input[type="text"]',
        loginPasswordField: 'form:first-of-type input[type="password"]',
        newUsernameField: 'form:first-of-type input[type="text"]',
        newPasswordField: 'form:last-of-type input[type="password"]',

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
        enterLoginCredentials(username, password){
            return this
                .setValue('@loginUsernameField', username)
                .setValue('@loginPasswordField', password)
                .click('@loginBtn');
        }

        // getLoggedInUsername() {
        //     const page = this;
        //     if
        // }
    }]
}
