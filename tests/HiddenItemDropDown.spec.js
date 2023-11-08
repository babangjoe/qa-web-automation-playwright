import { test, expect } from "@playwright/test";

test("Hidden Items DropDown", async ({ page }) => {
  await page.goto("https://www.redbus.com/");

  await page.locator("#src").type("Paris");
  await page.waitForTimeout(5000);

  const itemsSelector = "//li[@class='liBpList']/i";

  const options = await page.$$(itemsSelector);
  console.log(options.length);

  for (let option of options) {
    const itemValue = await option.textContent();
    console.log(itemValue);
  }
});
