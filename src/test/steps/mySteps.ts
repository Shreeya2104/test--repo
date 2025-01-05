// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from "@playwright/test";
//  import { fixture } from "../../hooks/pageFixture";
//  import newPage from "../../pages/newPage";

// const page = new newPage();

// Given('I navigate to the application', async function () {
//     await page.navigateToApplication();
// });

// When('I enter username {string}', async function (username: string) {
//     await page.enterUsername(username);
// });

// When('I enter password {string}', async function (password: string) {
//     await page.enterPassword(password);
// });

// When('I click the login button', async function () {
//     await page.clickLoginButton();
// });

// Then('I should see the dashboard', async function () {
//     await page.verifyDashboard();
// });

// Then('I should see a login failure message', async function () {
//     await page.verifyLoginFailure();
// });

// Given('I navigate to the forgot password page', async function () {
//     await page.navigateToForgotPasswordPage();
// });

// When('I enter username for password reset {string}', async function (username: string) {
//     await page.enterUsernameForPasswordReset(username);
// });

// Then('I should see the reset password link sent message', async function () {
//     await page.verifyResetPasswordLinkSent();
// });

// Given('I navigate to the home page', async function () {
//     await page.navigateToHomePage();
// });

// When('I navigate to section {string}', async function (sectionName: string) {
//     await page.navigateToSection(sectionName);
// });

// Then('I should see the section {string}', async function (sectionName: string) {
//     await page.verifySection(sectionName);
// });

// Given('I navigate to the leave section', async function () {
//     await page.navigateToLeaveSection();
// });

// When('I click apply', async function () {
//     await page.clickApply();
// });

// Then('I should see the apply leave form', async function () {
//     await page.verifyApplyLeaveForm();
// });

// Given('I navigate to the apply leave form', async function () {
//     await page.navigateToApplyLeaveForm();
// });

// When('I select leave type and dates', async function () {
//     await page.selectLeaveTypeAndDates();
// });

// When('I fill reason for leave', async function () {
//     await page.fillReasonForLeave();
// });

// When('I submit the leave application', async function () {
//     await page.submitLeaveApplication();
// });

// Given('I navigate to the leave list page', async function () {
//     await page.navigateToLeaveListPage();
// });

// When('I select leave dates and type', async function () {
//     await page.selectLeaveDatesAndType();
// });

// When('I search leave requests', async function () {
//     await page.searchLeaveRequests();
// });

// Then('I should see the leave requests', async function () {
//     await page.verifyLeaveRequests();
// });

// When('I search specific leave dates', async function () {
//     await page.searchSpecificLeaveDates();
// });

// When('I perform search for leave requests', async function () {
//     await page.performSearchForLeaveRequests();
// });

// Then('I should see the leave requests for specified dates', async function () {
//     await page.verifyLeaveRequestsForSpecifiedDates();
// });

// Given('I navigate to my leave list page', async function () {
//     await page.navigateToMyLeaveListPage();
// });

// When('I interact with leave list container', async function () {
//     await page.interactWithLeaveListContainer();
// });

// Then('I should see the leave list container', async function () {
//     await page.verifyLeaveListContainer();
// });