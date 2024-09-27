import { test, expect } from '@playwright/test';
import { LeadsPage } from '../pages/lead_page';
import { credentials } from './credentials';  // Assume credentials are in a separate file for security

test.describe('Zoho CRM Leads Module', () => {
  let leadsPage: LeadsPage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    leadsPage = new LeadsPage(page);



    // Login to Zoho CRM
    await page.goto('https://www.zoho.com/crm/');
    //Click on Sign in Button
    const element = page.locator('//a[@class="zgh-login" and text()="Sign In"]');
    await element.click();
    //Enter credentials 
    await page.fill('#login_id', credentials.loginId);
    await page.click('#nextbtn');
    await page.fill('#password', credentials.password);
    await page.click('#nextbtn');
    await page.waitForNavigation();
  });

  test('should create a new lead', async ({ page }) => {
    await leadsPage.navigateToLeadsModule();
    await leadsPage.createLead(credentials.name, credentials.lname, credentials.company, credentials.email, credentials.phone);

    // Verify lead creation
    const leadExists = await page.isVisible('text=John Doe');
    expect(leadExists).toBe(true);
  });

  test('should edit a lead', async ({ page }) => {
    await leadsPage.editLead(credentials.newEmail);

    // Verify email updated
    const updatedEmailExists = await page.isVisible('text=john.new@example.com');
    expect(updatedEmailExists).toBe(true);
  });

  test('should filter leads by company', async ({ page }) => {
    await leadsPage.filterLeads('Zoho Corp', 'Company');

    // Verify filter works
    const leadFiltered = await page.isVisible('text=Zoho Corp');
    expect(leadFiltered).toBe(true);
  });

  test('should delete a lead', async ({ page }) => {
    await leadsPage.deleteLead('John Doe');

    // Verify lead deletion
    const leadDeleted = await page.isVisible('text=John Doe');
    expect(leadDeleted).toBe(false);
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });
});
