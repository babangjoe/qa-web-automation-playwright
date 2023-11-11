import { test, expect } from "@playwright/test";

test("Interact with Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(3000);

  const year = "2023";
  const month = "July";
  const date = "10";

  const datePicker = await page.locator("#datepicker");

  if (datePicker) {
    //scroll the element into view
    await datePicker.scrollIntoViewIfNeeded();

    await page.waitForTimeout(5000);
  } else {
    console.error("Date Picker does not found");
  }

  await datePicker.click();
  //   await page.waitForTimeout(3000);

  while (true) {
    const currYear = await page.locator(".ui-datepicker-year").textContent();
    const currMonth = await page.locator(".ui-datepicker-month").textContent();

    if (currYear == year && currMonth == month) {
      break;
    }

    await page.click('//a[@title="Next"]'); //click next
    await page.waitForTimeout(3000);

    /*
    if (currYear == year && currMonth == month) {
      break;
    } else if (year > currYear) {
      await page.click('//a[@title="Next"]'); //click next
    } else if (year < currYear) {
      await page.click('//a[@title="Prev"]'); //click next
    } else {
      await page.click('//a[@title="Next"]'); //click next
    }
    */
  }

  //await page.waitForTimeout(3000);
});
