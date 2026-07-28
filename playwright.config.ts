import { defineConfig, devices } from '@playwright/test';

const isCI = !!(globalThis as any).process?.env?.CI;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  //grep:/@sanity/,   //specifying tag by rahul
  //grepInvert:/@regression/,  //specifying tag by rahul
  //grep:/(?=.*@sanity)(?=.*@regression)/,


  // timeout :60000,
  // expect:{timeout:10000},

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,
  /* Retry on CI only */
  //retries: isCI ? 2 : 0,
  retries:3, //done by Rahul
  /* Opt out of parallel tests on CI. */
  //workers: isCI ? 1 : undefined,
  workers:3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
   // reporter : [['html',{open:'always', 'outputFolder':'html-report'}]] ,
    reporter :[['html',{open:'always', 'outputFolder':'html-report'}],
                /*['list'], 
                ['line'],
                ['dot'],
                ['json',{outputFile:'results.json'}],
                ['junit',{outputFile:'results.xml'}],
                ['allure-playwright'],*/
                ['./my-customreporter.ts']
              ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //capture screeshots
    screenshot:'only-on-failure', // 'off','on','on-first-failure','only-on-failure'
    video:'retain-on-failure',//'off','on','on-first-retry','retain-on-failure','retry-with-vedio'
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://restful-booker.herokuapp.com',
    // viewport:{width:1280, height:720},
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    //testIdAttribute: 'data-pw'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true
    },
 /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
       
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
