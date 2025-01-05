// import { expect } from "@playwright/test";
// import { fixture } from "../hooks/pageFixture";
// import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

// export default class newPage {
//     // navigateToHomePage() {
//     //     //         throw new Error("Method not implemented.");
//     //     //     }
//   async navigateToApplication() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await fixture.page.getByPlaceholder('Username').fill('Admin');
//     await fixture.page.getByPlaceholder('Password').click();
//     await fixture.page.getByPlaceholder('Password').fill('admin123');
//     await fixture.page.getByRole('button', { name: 'Login' }).click();
//     await fixture.page.getByRole('heading', { name: 'Dashboard' }).isVisible();
// }

//  async enterUsername(username: string) {
//     await fixture.page.locator(`//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input`).type(username);
//     await fixture.page.waitForTimeout(5000);
// }

//  async enterPassword(password: string) {
//     await fixture.page.locator(`//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input`).type(password);
//     await fixture.page.waitForTimeout(5000);
// }

//  async clickLoginButton() {
//     await fixture.page.getByRole('button', { name: 'Login' }).click();
// }

// async verifyLoginSuccess() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await fixture.page.getByText('Reset your password?').click();
//     if (await fixture.page.getByRole('heading', { name: 'Reset your Password' }).isVisible()) {
//         console.log("Forgot Password page is visible");
//     } else {
//         console.log("Reset Password page is not visible");
//     }
//     await fixture.page.getByPlaceholder('Username').click();
//     await fixture.page.getByPlaceholder('Username').fill('admin');
//     await fixture.page.getByRole('button', { name: 'Reset Password' }).click();
//     if (await fixture.page.getByRole('heading', { name: 'Reset Password link sent' }).isVisible()) {
//         console.log("Reset Password link sent page is visible");
//     } else {
//         await fixture.page.getByRole('button', { name: 'Forgot your  Password' }).click();
//         await expect(fixture.page.getByRole('heading', { name: 'Forgot your Password link sent' })).toBeVisible();
//         console.log("Reset Password link sent page is not visible");
//     }
// }

//  async verifyLoginFailure() {
//     const failureMessage = fixture.page.locator("//*[@id=`app`]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]");
//     await expect(failureMessage).toBeVisible();
// }

//  async navigateToForgotPasswordPage() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
//     await fixture.page.getByRole('heading', { name: 'Reset Password' }).isVisible();
// }

//  async enterUsernameForPasswordReset(username: string) {
//     await fixture.page.getByPlaceholder('Username').fill(username);
//     await fixture.page.getByRole('button', { name: 'Reset Password' }).click();
// }

//  async verifyResetPasswordLinkSent() {
//     await expect(fixture.page.getByRole('heading', { name: 'Reset Password link sent' })).toBeVisible();
// }

//  async verifyDashboard() {
//     await expect(fixture.page.locator('h1')).toHaveText('Dashboard');
//     await expect(fixture.page.locator('.user-info')).toBeVisible();
//     await expect(fixture.page.locator('.user-stats')).toBeVisible();
//     await expect(fixture.page.locator('.recent-activities')).toBeVisible();
// }

//  async clickShehanUserSpan() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     await fixture.page.locator('span').filter({ hasText: 'Shehan user' }).click();
// }

// async clickAboutSupportChange() {
//     await fixture.page.getByText('About').click();
//     await fixture.page.getByText('Support').click();
//     await fixture.page.getByText('Change').click();
// }

//  async verifyAboutSupportChangeSection() {
//     await expect(fixture.page.getByText('About')).toBeVisible();
//     await expect(fixture.page.getByText('Support')).toBeVisible();
//     await expect(fixture.page.getByText('Change')).toBeVisible();
// }

//  async navigateToHomePage() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
// }

//  async navigateToSection(sectionName: string) {
//     await fixture.page.getByLabel('Sidepanel').locator('div').filter({ hasText: sectionName }).click();
// }

//  async verifySection(sectionName: string) {
//     const section = await fixture.page.getByLabel('Sidepanel').locator('div').filter({ hasText: sectionName });
//     expect(await section.isVisible()).toBe(true);
// }

//  async navigateToLeaveSection() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//     await fixture.page.getByRole('link', { name: 'Leave' }).click();
// }

//  async clickApply() {
//     await fixture.page.locator('li').filter({ hasText: 'Apply' }).click();
// }

//  async verifyApplyLeaveForm() {
//     await expect(fixture.page.getByRole('heading', { name: 'Apply Leave' })).toBeVisible();
// }

//  async navigateToApplyLeaveForm() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave');
//     await expect(fixture.page.getByRole('heading', { name: 'Apply Leave' })).toBeVisible();
// }

//  async selectLeaveTypeAndDates() {
//     await fixture.page.locator('form i').first().click();
//     await fixture.page.getByRole('option', { name: 'CAN - FMLA' }).click();
//     await fixture.page.locator('form i').nth(2).click();
//     await fixture.page.getByText('6', { exact: true }).click();
//     await fixture.page.locator('form i').nth(3).click();
//     await fixture.page.getByText('7', { exact: true }).click();
// }

// async fillReasonForLeave() {
//     await fixture.page.locator('textarea').click();
//     await fixture.page.locator('textarea').fill('sickness');
// }

//  async submitLeaveApplication() {
//     await fixture.page.getByRole('button', { name: 'Apply' }).click();
// }

//  async navigateToLeaveListPage() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
//     await expect(fixture.page.getByRole('heading', { name: 'Leave List' })).toBeVisible();
// }

//  async selectLeaveDatesAndType() {
//     await fixture.page.locator('.oxd-date-input > .oxd-icon').first().click();
//     await fixture.page.getByText('9', { exact: true }).click();
//     await fixture.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
//     await fixture.page.getByText('9', { exact: true }).click();
//     await fixture.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
//     await fixture.page.getByRole('option', { name: 'CAN - FMLA' }).click();
// }

//  async searchLeaveRequests() {
//     await fixture.page.getByRole('button', { name: 'Search' }).click();
//     await fixture.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
//     await fixture.page.getByText('Pending Approval', { exact: true }).click();
//     await fixture.page.getByRole('button', { name: 'Search' }).click();
// }

//  async verifyLeaveRequests() {
//     await expect(fixture.page.locator('.oxd-table')).toBeVisible();
// }

//  async searchSpecificLeaveDates() {
    
//     const leaveDates = [
//         { startDate: '2023-12-28', endDate: '2023-12-29' },
//         { startDate: '2023-12-15', endDate: '2023-12-20' }
//     ];

//     for (const date of leaveDates) {
//         await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
//         await fixture.page.locator('.oxd-date-input > .oxd-icon').first().click();
//         await fixture.page.getByText(date.startDate.split('-')[2], { exact: true }).click();
//         await fixture.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
//         await fixture.page.getByText(date.endDate.split('-')[2], { exact: true }).click();
//         await fixture.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
//         await fixture.page.getByRole('option', { name: 'CAN - FMLA' }).click();
//         await fixture.page.getByRole('button', { name: 'Search' }).click();
//         await fixture.page.waitForSelector('.oxd-table');
//         const leaveRequests = await fixture.page.locator('.oxd-table').innerText();
//         console.log(`Leave requests from ${date.startDate} to ${date.endDate}:`, leaveRequests);
//     }
// }

//  async performSearchForLeaveRequests() {
//     await fixture.page.getByRole('button', { name: 'Search' }).click();
//     await fixture.page.waitForSelector('.oxd-table');
// }

//  async verifyLeaveRequestsForSpecifiedDates() {
//     const leaveRequests = await fixture.page.locator('.oxd-table').innerText();
//     console.log('Leave requests:', leaveRequests);
//     await expect(fixture.page.locator('.oxd-table')).toBeVisible();
// }

//  async navigateToMyLeaveListPage() {
//     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveList');
//     await expect(fixture.page.getByRole('heading', { name: 'My Leave List' })).toBeVisible();
//     await fixture.page.waitForTimeout(2000);
// }

//  async interactWithLeaveListContainer() {
//     await fixture.page.locator('.orangehrm-container').click();
// }

//  async verifyLeaveListContainer() {
//     await expect(fixture.page.locator('.orangehrm-container')).toBeVisible();
//     await fixture.page.waitForTimeout(2000);
// }} 