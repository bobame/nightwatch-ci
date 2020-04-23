const baseConfig = require('./nightwatch.conf.js');

const config = {
	...baseConfig,
	webdriver: { // selenium deprecated
		'start_process': false, // because already started in browserstack
		'host': 'hub-cloud.browserstack.com',
		'port': 80
	},
};

// different format than what is provided at start guide because extending baseConfig
config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
console.log("INFO: Username: ", process.env.BROWSERSTACK_USER);
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
console.log("INFO: Access key: ", process.env.BROWSERSTACK_KEY);
// reset/clear chrome args 
config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

// capabilities generator, https://www.browserstack.com/automate/capabilities
config.test_settings.firefox = {
	desiredCapabilities: {
		os: 'Windows',
		os_version: 'XP',
		browserName: 'Firefox',
		browser_version: '47.0',
		['browserstack.local']: false
	}
};

// Code to copy selenium/port into test settings
for (var i in config.test_settings) {
	var test_setting = config.test_settings[i];
	test_setting['selenium_host'] = config.webdriver.host;
	test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;