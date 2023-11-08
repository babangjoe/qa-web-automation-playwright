import { test, expect } from "@playwright/test";

test("Bootstrap DropDown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
  await page.waitForTimeout(3000);

  const dropdownSelector = ".multiselect";

  await page.locator(dropdownSelector).click(); // click the drop down
  await page.waitForTimeout(3000);

  /* Assertion */
  /* ========= */

  // Approach#1. Check number of options in dropdown
  //   const options = await page.locator("ul>li label>input");
  //   await expect(options).toHaveCount(11);

  // Approach#2. Check number of options in dropdown using length
  //   const options = await page.$$("ul>li label>input");
  //   await expect(options.length).toBe(11);

  // select multiple options from dropdown
  const options = await page.$$("ul>li label");

  for (let option of options) {
    const value = await option.textContent();
    if (value.includes("Angular") || value.includes("jQuery")) {
      await option.click();
    }
  }

  // deselect multiple options from dropdown
  const optionToDeselect = "ul>li.active label"; // selector of selected options
  const selectedOptions = await page.$$(optionToDeselect); // array of selected options
  const optionToDeselectCount = selectedOptions.length; // length or number of selected options

  console.log("Count of selected options: ", optionToDeselectCount);

  // Find and click the currently selected option to unselect it
  for (let i = 1; i <= optionToDeselectCount; i++) {
    await page.waitForTimeout(3000);
    await page.click(`${optionToDeselect}`);
  }

  await page.waitForTimeout(5000);
});
