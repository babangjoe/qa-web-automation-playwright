import { test, expect } from "@playwright/test";

test.skip("Alert Handle", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(3000);

  // Enabling alert window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");

    await dialog.accept(); // close the dialog box by clicking button OK
  });

  await page.click("//button[normalize-space()='Alert']");

  await page.waitForTimeout(5000);
});

test.skip("Confirmation Handle", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(3000);

  // Enabling confirmation window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");

    await dialog.accept(); // close the dialog box by clicking button OK
    // await dialog.dismiss(); // close the dialog box by clicking button Cancel
  });

  await page.click("//button[normalize-space()='Confirm Box']");

  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
  // await page.click("//button[normalize-space()='Prompt']");

  await page.waitForTimeout(5000);
});

test("Prompt Handle", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(3000);

  const textInputDialog = "Bang Joe";
  // Enabling alert window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");

    await dialog.accept(textInputDialog); // close the dialog box by clicking button OK
    // await dialog.dismiss(); // close the dialog box by clicking button Cancel
  });

  await page.click("//button[normalize-space()='Prompt']");

  await expect(page.locator("//p[@id='demo']")).toHaveText(
    `Hello ${textInputDialog}! How are you today?`
  );

  await page.waitForTimeout(5000);
});
