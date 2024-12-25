import { Page } from 'playwright';

export class AmazonPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openSignUpPage() {
    await this.page.goto('https://www.amazon.com/ap/register');
  }

  async fillSignUpForm(email: string, password: string) {
    await this.page.fill('#ap_email', email);
    await this.page.fill('#ap_password', password);
    await this.page.fill('#ap_password_check', password);
  }

  async submitForm() {
    await this.page.click('#continue');
  }

  async getConfirmationMessage() {
    // Adjust the selector based on the actual confirmation message
    return await this.page.isVisible('text=Welcome');
  }
}