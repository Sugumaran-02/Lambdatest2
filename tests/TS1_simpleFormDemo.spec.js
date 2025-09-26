import { test, expect } from '@playwright/test';
import { SimpleFormPage } from '../Pages/SimpleFormPage';

test('Simple Form Demo Test', async ({ page }) => {
  const formPage = new SimpleFormPage(page);
  await formPage.navigate();

  expect(page.url()).toContain('simple-form-demo');

  const message = 'Welcome to LambdaTest';
  await page.waitForTimeout(3000)
  await formPage.enterMessage(message);
  await formPage.showmessage_btn()

  const displayed = await formPage.getDisplayedMessage();
  expect(displayed).toBe(message);
});
