// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
   timeout: 30000, 
   expect :
   {
       timeout: 10000, 
   },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium', // chrome browser will be launched for execution
    headless : false, // browser will launch during execution if set to false
    // screenshot : 'on', // turned on taking screenshot
     trace : 'on', // turning trace on will maintain logs of each & everystep

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  },
});

