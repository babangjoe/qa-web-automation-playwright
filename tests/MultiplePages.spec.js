import { test, expect, chromium } from "@playwright/test";

test("Handle Pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = await context.pages();
  //   console.log("Number of pages: ", allPages.length);

  // goto web orangehrm demo
  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //   console.log("Title of page1: ", await page1.title());
  await expect(page1).toHaveTitle("OrangeHRM");

  // goto web orangehrm live
  await page2.goto("https://www.orangehrm.com/");
  //   console.log("Title of page2: ", await page2.title());
  await expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM");
});

test.only("Handle Multiple Pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  // goto web orangehrm demo
  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  console.log("Title of page1: ", await page1.title());
  await expect(page1).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent("page");

  await page1.locator('a[href="http://www.orangehrm.com"]').click();
  const newPage = await pagePromise;

  console.log("Title of New Page Promise: ", await newPage.title());

  await newPage.fill(
    "//input[@id='Form_submitForm_EmailHomePage']",
    "test@email.com"
  );

  //   await newPage.waitForTimeout(5000);
});
