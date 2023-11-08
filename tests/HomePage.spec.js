import { test, expect } from "@playwright/test";

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.screenshot({ path: "ss_homepage.png", fullPage: true });
  await page.waitForTimeout(3000);

  const pageTitle = await page.title();
  console.log("Page title is: ", pageTitle);

  await expect(page).toHaveTitle("STORE");

  //await page.title.screenshot({ path: "ss_pagetitle" });

  const pageURL = await page.url();
  console.log("Page url is: ", pageURL);

  await page.waitForTimeout(3000);
});
