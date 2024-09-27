import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,  // Set to 'true' if you want headless mode
  
    baseURL: 'https://www.zoho.com/crm/',
    // Other Playwright configuration options
  },
});
