import { test, expect } from "@playwright/test";

test("Handle DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(5000);

  const element = await page.$("#country");

  if (element) {
    //scroll the element into view
    await element.scrollIntoViewIfNeeded();
  } else {
    console.error("Element does not found");
  }

  await page.waitForTimeout(5000);

  //   await page.locator("#country").selectOption({ label: "Germany" }); //select by label text
  //   await page.waitForTimeout(5000);
  //   await page.locator("#country").selectOption("Canada"); //select by visible text
  //   await page.waitForTimeout(5000);
  //   await page.locator("#country").selectOption("usa"); //select by attribute value
  //   await page.waitForTimeout(5000);
  //   await page.locator("#country").selectOption({ index: 6 }); //select by index
  //   await page.waitForTimeout(5000);
  //   await page.selectOption("#country", "China"); //select by text
  //   await page.waitForTimeout(5000);

  // ** Assertions drop down ** //
  // ========================== //

  // Approach#1. Check number of options in dropdown
  //   const options = await page.locator("#country option");
  //   await expect(options).toHaveCount(10);

  // Approach#2. Check number of options in dropdown
  //   const options = await page.$$("#country option");
  //   console.log("Number of options is: " + options.length);
  //   await expect(options.length).toBe(10);

  // Approach#3. Check presence of value in the dropdown using includes text content
  //   const content = await page.locator("#country").textContent();
  //   console.log("Content: " + content);
  //   await expect(content.includes("Brazil")).toBeTruthy();

  // Approach#4. Check presence of value in the dropdown using for loop
  /*
  const options = await page.$$("#country option");
  let status = false;

  for (const option of options) {
    // console.log(await option.textContent());

    let value = await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }

  expect(status).toBeTruthy();
  */

  // ** Select value of the drop down ** //
  // =================================== //

  // Approach#1. Select value in the dropdown using for loop
  const options = await page.$$("#country option");

  for (const option of options) {
    // console.log(await option.textContent());

    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }

  await page.waitForTimeout(5000);
});
