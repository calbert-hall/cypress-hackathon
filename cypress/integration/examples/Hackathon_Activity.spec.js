/// <reference types="@applitools/eyes-cypress" />

describe("AppTest", () => { 

    const APPLIFASHIONV1 = "https://demo.applitools.com/gridHackathonV1.html"
    const APPLIFASHIONVDEV = "https://demo.applitools.com/tlcHackathonDev.html"
    const APPLIFASHIONV2 = "https://demo.applitools.com/gridHackathonV2.html"
   
    //TODO set to true to enable dynamic content
    const DYNAMIC_CONTENT = false 
    // TODO change the ENV_URL to change which environment is used
    const ENV_URL = APPLIFASHIONV1

    const blackColorFilter = "SPAN__checkmark__107" //id
    const filterBtn = "filterBtn" //id
    const blackShoesImage= "/html/body/div[1]/main/div/div/div/div[4]/div[1]/div/figure/a/img" // xpath

    it(`ultraFastTest`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit(ENV_URL)

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Hackathon',
            testName: '[Team Name Here] : Applifashion Filter Workflow Test'
        })

        if (DYNAMIC_CONTENT) {
            cy.document().then((doc) => {
                doc.querySelectorAll('h3').forEach(function(noFade) { noFade.innerHTML = Math.random().toString(36);})
            });
        }

        //TODO your code here!









        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose(false)
    });

});
