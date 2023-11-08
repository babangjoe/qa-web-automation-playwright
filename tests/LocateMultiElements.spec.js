import { test, expect, chromium } from "@playwright/test";

test("Locate Multiple Elements", async ({ browser }) => {
  const context = await browser.newContext();

  // Specify the path for the storage state options
  const storageStateOptions = { path: "state.json" };

  // Set the storage state options for the context
  await context.storageState(storageStateOptions);

  const page = await context.newPage();

  await page.goto("https://www.demoblaze.com/");

  //await page.screenshot({ path: "demoblaze.png" });

  //click button Log In - using property
  await page.click("id=login2");

  //fill in field username - using CSS
  await page.fill("#loginusername", "pavanol");

  //fill in field password - using XPath
  await page.fill("//input[@id='loginpassword']", "test@123");

  //click button Login - using XPath
  await page.click("//button[normalize-space()='Log in']");

  //verify button Log Out is visible - using CSS
  const btnLogOut = await page.locator("#logout2");

  await expect(btnLogOut).toBeVisible();

  await browser.close;
});
