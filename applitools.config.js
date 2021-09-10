module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        // {width: 700, height: 500, name: 'firefox'},
        // {width: 1600, height: 1200, name: 'ie11'},
        // {width: 1024, height: 768, name: 'edgechromium'},
        // {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        //{deviceName: 'iPhone X', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Hackathon - Cypress',
    //showLogs: true,
    failCypressOnDiff: false
}
