# zoho-crm-automation
Lead Module 4 test case automation 


1.	Setting Up the Environment
Installed Playwright and TypeScript in the project directory using below command in Git Bash.

npm init -y
npm install playwright
npm install typescript ts-node @types/node

2.	Installed VS Code as an editor.

3.	Created a tsconfig.json File

4.	Test Automation Code (Page Object Model)
Created a folder structure with the following files:
•	tests/lead_tests.ts (main test runner)
-	The LeadTests class handles the setup (browser launch and login), execution of the tests, and teardown (closing the browser).
-	The runTests() method runs the four required test cases sequentially:
	Creating a new lead.
	Editing the lead.
	Filtering the leads by company.
	Deleting the lead.
•	pages/lead_page.ts (page object model for the Leads module)
-	This file contains the methods that handle each operation on the Leads module (create, edit, filter, and delete). This helps in keeping the tests modular and reusable.
•	credentials.ts (to keep dynamic values in single file)
5.	Running the Tests
To run the tests used below-mentioned command in gitBash:
npx ts-node tests/lead_tests.ts

6.	Run the Tests with Jest
You can now run the tests using Jest:
npx jest
or with specific test files:
npx jest tests/lead_tests.ts
7.	Reporting
Adding Jest to your Playwright test cases is a good idea to enhance test assertions, reporting, and overall test management.
•	Install Jest and Required Dependencies
First, you need to install Jest and related dependencies.
Run the following command in your project directory:
npm install jest ts-jest @types/jest --save-dev

•	Configure Jest for TypeScript
Create a jest.config.js file in the root of your project to configure Jest for TypeScript and the Playwright environment.

8.	Additional Considerations
-	Error Handling: If there are steps that might fail (e.g., login), you can handle them by adding proper error handling and assertions.
-	Test Reports: Jest can be configured to generate reports or integrate with CI/CD tools like Jenkins, Travis, or CircleCI for continuous testing.

9.	Completion Checklist
-	Automated Tests
-	Successfully Running Tests
-	Github Repo with Readme
-	Test Run Results
-	Submit to Greenhouse - Link to the github

Test Specification for Zoho CRM Lead Module
Project Name: Zoho CRM Lead Module Testing
Module: Lead Management
________________________________________
1. Test Overview
This test specification outlines the approach and results for testing the Lead Management Module in Zoho CRM, specifically covering the functionalities of Create Lead, Modify Lead, Filter Lead, and Delete Lead. The purpose is to ensure that the lead management functionalities work as expected and to identify any defects or issues that may impact the user experience.
________________________________________
2. Test Scope
•	In Scope:
o	Lead creation via the CRM interface.
o	Modifying lead details after creation.
o	Filtering leads based on various attributes.
o	Deleting leads from the system.
•	Out of Scope:
o	Integration with external tools.
o	Lead conversion to contacts or opportunities.
o	Lead import/export functionalities.
________________________________________
3. Test Environment
Environment	Details
Zoho CRM Version	[Version Number]
Operating System	Windows 10 / macOS [Version]
Web Browser	Google Chrome v[Version], Firefox v[Version]
Database Used	[If Applicable]
Test Data	Predefined lead data for testing
________________________________________
4. Test Case Summary
Test Case ID	Test Case Title	Functionality	Status
TC001	Create New Lead	Create Lead	Pass
TC002	Modify Existing Lead	Modify Lead	Pass
TC003	Filter Leads by Criteria	Filter Lead	Pass
TC004	Delete Lead	Delete Lead	Pass
________________________________________
5. Test Cases and Results
Test Case 1: Create New Lead
•	Test Case ID: TC001
•	Objective: Verify that a new lead can be created successfully with valid data.
•	Preconditions:
o	User must be logged into Zoho CRM with sufficient permissions to create a lead.
o	The required fields for lead creation (e.g., name, email) are known.
Step No.	Action	Expected Result	Actual Result	Status
1	Navigate to "Leads" module in Zoho CRM	Leads module is displayed	As Expected	Pass
2	Click on "Create Lead" button	Lead creation form is displayed	As Expected	Pass
3	Enter valid data in required fields	Fields accept valid data	As Expected	Pass
4	Click on "Save"	Lead is saved, and a success message appears	As Expected	Pass
5	Verify lead appears in lead list	Lead is listed in the module	As Expected	Pass
•	Test Result: Pass
________________________________________
Test Case 2: Modify Existing Lead
•	Test Case ID: TC002
•	Objective: Ensure that an existing lead can be modified successfully.
•	Preconditions:
o	A valid lead exists in the CRM system.
Step No.	Action	Expected Result	Actual Result	Status
1	Search for an existing lead in the lead list	Lead is displayed in the search results	As Expected	Pass
2	Click on the lead's name to open its details	Lead details page is displayed	As Expected	Pass
3	Click on "Edit" and modify the lead's details	Changes are accepted and the "Save" button is enabled	As Expected	Pass
4	Click "Save"	Changes are saved, and a confirmation message appears	As Expected	Pass
5	Verify changes in the lead list	The modified data is displayed in the lead list	As Expected	Pass
•	Test Result: Pass
________________________________________
Test Case 3: Filter Leads by Criteria
•	Test Case ID: TC003
•	Objective: Test the ability to filter leads based on specific criteria (e.g., location, status, lead source).
•	Preconditions:
o	Multiple leads are present in the system with varying data attributes (e.g., status, source).
Step No.	Action	Expected Result	Actual Result	Status
1	Navigate to the "Leads" module	Leads module is displayed	As Expected	Pass
2	Click on the "Filter" option	Filter panel is displayed	As Expected	Pass
3	Apply filters (e.g., "Status = New")	Only leads that meet the filter criteria are displayed	As Expected	Pass
4	Modify filter criteria (e.g., "Source = Web")	Filtered results update according to the new criteria	As Expected	Pass
5	Clear filters	Full list of leads is displayed again	As Expected	Pass
•	Test Result: Pass
________________________________________
Test Case 4: Delete Lead
•	Test Case ID: TC004
•	Objective: Verify that a lead can be deleted successfully and is removed from the lead list.
•	Preconditions:
o	A valid lead exists in the system that can be deleted.
Step No.	Action	Expected Result	Actual Result	Status
1	Search for the lead to be deleted	Lead is displayed in the search results	As Expected	Pass
2	Select the lead and click on "Delete"	A confirmation prompt is displayed	As Expected	Pass
3	Confirm the deletion	Lead is deleted, and a success message appears	As Expected	Pass
4	Verify the lead no longer appears in the list	The deleted lead is no longer visible in the lead list	As Expected	Pass
•	Test Result: Pass
________________________________________
6. Defects Identified
Defect ID	Test Case ID	Description	Severity	Status
N/A	N/A	No defects found	N/A	N/A
________________________________________
7. Summary of Test Results
•	Total Test Cases Executed: 4
•	Total Passed: 4
•	Total Failed: 0
•	Blocked Test Cases: 0
•	Defects Logged: 0
________________________________________
8. Conclusion
All functionalities tested within the Zoho CRM Lead Module (Create Lead, Modify Lead, Filter Lead, and Delete Lead) performed as expected. The module is functioning correctly, and no critical defects were identified during this testing phase. Further testing of integrations and edge cases may be required based on additional use cases.
________________________________________
9. Recommendations
•	Conduct further testing on lead integrations with third-party platforms (e.g., lead capture from web forms).
•	Perform stress testing by creating, modifying, and filtering a large volume of leads.
•	Ensure comprehensive user role testing to validate permissions and access control for lead data.


