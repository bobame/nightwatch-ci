module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests_output/screenshots'
      },
      desiredCapabilities : {
        browserName : 'chrome',
          chromeOptions: {
            // args: ['--headless']
          }
      }
    }
  }
};
