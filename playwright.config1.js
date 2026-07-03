// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries : 1 ,
  workers : 3,
   timeout: 30000, 
   expect :
   {
       timeout: 10000, 
   },

  reporter: 'html',
  projects : 
  [
  {
      name : 'Firefox execution',
      use: {
    browserName: 'firefox', // chrome browser will be launched for execution
    headless : false, // browser will launch during execution if set to false
    // screenshot : 'on', // turned on taking screenshot
     trace : 'on', // turning trace on will maintain logs of each & everystep

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  } 
    }
    ,
    {
       name : 'Chrome execution',
      use: {
    browserName: 'chromium', // chrome browser will be launched for execution
    headless : false, // browser will launch during execution if set to false
    //screenshot : 'on', // turned on taking screenshot
    trace : 'on', // turning trace on will maintain logs of each & everystep
    ignoreHTTPSErrors : true,// used to accept the SSL certificate
    permissions : ['geolocation'], // used to allow geolocation popup as yes
    //video : 'retain-on-failure',//Record video for each test, but remove all videos from successful test runs. So that memory is not utlilised
//...devices['Galaxy S24']// used to run the application in android device
    //viewport : {width: 720,height:720}
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    },
/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    },
       {
       name : 'Safari execution',
      use: {
    browserName: 'webkit', // chrome browser will be launched for execution
    headless : false, // browser will launch during execution if set to false
    // screenshot : 'on', // turned on taking screenshot
    trace : 'on', // turning trace on will maintain logs of each & everystep
    ...devices['iPhone 11']
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    },
/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    },
    
  ]
}
);


