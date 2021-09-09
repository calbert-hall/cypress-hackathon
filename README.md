# Hackathon Exercise!

* In this exercise, you'll be a Test Engineer looking to run tests on an e-commerce site, "Applifashion". 
  You'll be using Applitools to find and report bugs and handle dynamic content using Applitools' visual AI.
  You'll be working in the `Hackathon_Activity.spec.js` file. An example solution is available in the `Hackathon_Solution.spec.js`. Don't look unless you're stuck! If you want to see view the expected results, you can run  `npx cypress run --browser chrome --spec 'cypress/integration/examples/Hackathon_Solution.spec.js'`.

1. Open up the `Hackathon_Activity` js file. Put your name (or team name) as the Batch name, and be sure to set your API key as you did in the first example. You can run this using `npx cypress run --browser chrome --spec 'cypress/integration/examples/Hackathon_Activity.spec.js'`. You can also run `npx cypress open` and naviate and run the spec file from there. 


2. We'll start with a test on [Applifashion V1](https://demo.applitools.com/gridHackathonV1.html). Create an Applitools test that navigates to the main page and takes a full page screenshot. See the first example on how to do this.

   
3. Next, we'll use the Cypress webdriver to click the "black" filter button, and then click the filter button. The needed CSS selectors are provided for your use. After filtering, take another screenshot with Applitools. 
   Both of these eyes.check calls should be within the same test.
   

4. Now, you'll use Cypress to click the "Appli Air x Night" shoes and take another full page Applitools check. You should have a test with 3 checks. 
 

5. Set the `dynamicContent` boolean to `true`. Re-run your test, and notice that your initial test will fail due to dynamic content. 
Draw a layout region over the area, or set the match level to "Layout" from within the SDK. Once you see that your test now passes, you can delete the region and turn off `dynamicContent`. 
   
 
6. Next, run the same test on the [Applifashion dev site](https://demo.applitools.com/tlcHackathonDev.html). To do this, change the `ENV_URL` to `APPLIFASHION_DEV`. Note that the main page doesn't have a shoe in the main area. 
   See that the black shoes filtering has a functional bug! Also notice how the "Appli Air x night" has a visual bug. 
   Place a bug region on each of the areas and accept the differences. Snooze failures on the bug regions for 2 weeks.
   

7. Development has made the changes to the bug region, which are on [Applifashion V2](https://demo.applitools.com/gridHackathonV2.html). 
Run your test suite on Applifashion V2 (Set `ENV_URL` to `APPLIFASHIONV2)
and accept the now-fixed change and delete the bug region. 
You'll see several unresolved tests; accept them and add or remove regions as needed!
  
 
8. You now want to test your site on multiple browsers and viewport sizes, including mobile viewports. Set the browser configurations in the eyes.configure "do" block. 
Add `iPhone_X` in portrait mode, and FireFox 1200 x 800 as browsers for the Ultrafast test cloud. Run the test to see your test 
   on these configurations!

### Additional Challenges
* Add another check that clicks the "Applifashion" home link in the upper left. What happens on v1 vs the dev environment? 


* Find a selector and apply a [coded region](https://help.applitools.com/hc/en-us/articles/360007188211-Coded-Ignore-Regions) to it. 

* Use the Applitools [PDF tester](https://applitools.com/tutorials/pdf-forms.html#analyze-your-test-results) to test some of your own PDF files. 

* Try testing a different site of your choice. Look for ways to handle dynamic content and get stable tests.  

* If you need more challenges, ask your hackathon administrator!

## Resources
- [Applitools SDK Documentation](https://github.com/applitools/eyes.sdk.ruby)
- [Applitools Best Practices](https://applitools.com/docs/topics/general-concepts/visual-test-best-practices.html)