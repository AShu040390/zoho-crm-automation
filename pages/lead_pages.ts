import { Page } from '@playwright/test';

export class LeadsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLeadsModule() {
    await this.page.click('id=Visible_Leads');
    await this.page.waitForSelector('role=table');
  }

  //function to create lead and its locators
  async createLead(name: string, company: string, lname: string, email: string, phone: string) {
    //Click on Lead Button
    await this.page.click('text=Create Lead');
    // Enter First Name
    await this.page.fill('id=Crm_Leads_FIRSTNAME_LInput', name);
    //Enter Company Name
    const element1 = this.page.locator('//input[@tabindex="6"]');
    await element1.fill(company);
    //Enetr Last Name
    await this.page.fill('id=Crm_Leads_LASTNAME_LInput', lname);
    //Enter Email ID
    await this.page.fill('id=Crm_Leads_EMAIL_LInput', email);
    //Enter Phone number
    await this.page.fill('id=Crm_Leads_PHONE_LInput', phone);
    // Click on Save Button
    await this.page.click('text=Save');
    // Verify that the lead is created
    await this.page.waitForSelector(`text=${name}`);
  }

  //function to edit lead and its locators
  async editLead(newEmail: string) {
    //Click on created email
    await this.page.click(`text=John Doe`); // Replace with dynamic data if needed
    //Click on Edit button
    await this.page.click('text=Edit');
    //Enter the new email address
    await this.page.fill('id=Crm_Leads_EMAIL_LInput', newEmail);
    //Click on Save button
    await this.page.click('text=Save');
    //Verify that the email is modified
    await this.page.waitForSelector(`text=${newEmail}`);
  }

  //function to filter lead by company name
  async filterLeads(company: string, search: string) {
    //Click on lead tab
    await this.page.click('id=Visible_Leads');
    //Click on search button
    const element3 = this.page.locator('//input[@id="inputId"]');
    //await this.page.click('text=Search');
    
    //Enter the value in search textbox
    await element3.fill(search);
    //Click on company checkbox
    const element6 = this.page.locator('//lyte-checkbox[@title="Company"]');
    await element6.click();
    //await this.page.click('id=lyte-checkbox-label-133');

    //Click on company filter textbox
    const element2 = this.page.locator('//input[@class="cxBorderBottom "]');
    //Enetr value as Company name
    await element2.fill(company);
    //Click on apply filter button
    await this.page.click('text=Apply Filter');
    //Verify that the desired company name is filtered
    await this.page.waitForSelector(`text=${company}`);
  }

  //function to delete desired lead
  async deleteLead(name: string) {
   // await this.page.click('id=Visible_Leads');
    //await this.page.click(`text=${name}`);
    //const element3 = this.page.locator('//input[@id="inputId"]');
    //await this.page.click('text=Search');
    //await element3.fill(search);
    //const element6 = this.page.locator('//lyte-checkbox[@title="Company"]');
    //await element6.click();
    //await this.page.click('id=lyte-checkbox-label-133');
    //const element2 = this.page.locator('//input[@class="cxBorderBottom "]');
    //await element2.fill(company);
    //await this.page.click('text=Apply Filter');
    // Handeling dynamic ID element locator
    await this.page.locator('//input[contains(@id, "77021")]').check();
    //const xpath = "//input[contains(@id, '77021')]";
    //const element7 = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    await this.page.click('id=moreAct');
    const element4 = this.page.locator('//li[@data-value="mass_delete"]');
    await element4.click();
    const element5 = this.page.locator('//button[@class="lyte-button lyteFailure"]');
    await element5.click();
    //await this.page.click('text=Deleted');
    await this.page.waitForSelector(`text=${name}`, { state: 'detached' });
  }
}
