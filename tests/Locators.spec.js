import { test, expect, chromium } from "@playwright/test";
import fs from "fs";

test("Locators", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.demoblaze.com/index.html");

  //click button Log In - using property
  await page.click("id=login2");

  //fill in field username - using CSS
  await page.fill("#loginusername", "pavanol");

  //fill in field password - using XPath
  await page.fill("//input[@id='loginpassword']", "test@123");

  //click button Login - using XPath
  await page.click("//button[normalize-space()='Log in']");

  // Capture the storage state
  const storageState = await context.storageState();

  // Save the storage state to a file
  fs.writeFileSync("storageState2.json", JSON.stringify(storageState));

  //verify button Log Out is visible - using CSS
  const btnLogOut = await page.locator("#logout2");

  await expect(btnLogOut).toBeVisible();

  //await page.close;
});
