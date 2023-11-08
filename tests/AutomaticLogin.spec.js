const { test, expect, chromium } = require("@playwright/test");
const fs = require("fs");

test("Automatic Login", async () => {
  /*
  // Launch browser and create a context
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Capture storage state after successful login
  const page = await context.newPage();
  await page.goto("https://www.demoblaze.com/");

  // Perform login (fill in credentials, click login button, etc.)
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
  fs.writeFileSync("storageState.json", JSON.stringify(storageState));

  // Close the page and context
  await page.close();
  await context.close();
*/

  // Launch a new browser context and automatically restore the storage state
  // Launch browser and create a context
  const browser = await chromium.launch();
  const newContext2 = await browser.newContext();

  // Restore the storage state from file
  const storageStatePath = "storageState2.json";
  const storageStateData = fs.readFileSync(storageStatePath, "utf-8");
  const newStorageState = JSON.parse(storageStateData);

  //const newContext2 = await browser.newContext(newStorageState);

  // Restore cookies
  await newContext2.addCookies(newStorageState.cookies);

  // Restore local storage data
  const localStorage = newStorageState.localStorage;
  for (const key in localStorage) {
    await newContext2.localStorage.setItem(key, localStorage[key]);
    //await newContext2.localStorage.setItem(item.name, item.value);
  }

  // Restore session storage data
  const sessionStorage = newStorageState.sessionStorage;
  for (const key in sessionStorage) {
    await newContext2.sessionStorage.setItem(key, sessionStorage[key]);
  }

  // Use the new context for automated actions after login
  const loggedInPage = await newContext2.newPage();

  await loggedInPage.goto("https://www.demoblaze.com/");

  // Perform actions on the logged-in page

  //verify button Log Out is visible - using CSS
  //const btnLogOut = await loggedInPage.locator("#logout2");

  //await expect(btnLogOut).toBeVisible();

  // Close the browser
  //await browser.close();
});
