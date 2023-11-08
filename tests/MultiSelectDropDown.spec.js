import { test, expect } from "@playwright/test";

test("Multi Select DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(5000);

  const element = await page.$("#colors");

  if (element) {
    //scroll the element into view
    await element.scrollIntoViewIfNeeded();
  } else {
    console.error("Element does not found");
  }

  // Select multiple options from dropdown
  await page.selectOption("#colors", ["Red", "Green", "Yellow"]);

  await page.waitForTimeout(5000);
});
