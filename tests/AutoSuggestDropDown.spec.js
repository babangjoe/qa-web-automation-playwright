import { test, expect } from "@playwright/test";

test("Auto Suggest DropDown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Delhi");
  await page.waitForTimeout(3000);

  const autoSuggestSelector = "//li[contains(@class,'sc-iwsKbI')]/div/text[1]";
  const fromCityOptions = await page.$$(autoSuggestSelector);

  for (let option of fromCityOptions) {
    const value = await option.textContent();
    // console.log(value);
    if (value.includes("Badarpur")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(3000);
});
