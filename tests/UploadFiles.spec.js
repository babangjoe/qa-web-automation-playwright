import { test, expect } from "@playwright/test";

test("Upload Single File", async ({ page }) => {
  await page.goto("https://www.foundit.id/");

  await page.waitForTimeout(5000);

  await page.waitForSelector(".mqfihd-upload");
  await page.locator(".mqfihd-upload").click();

  await page
    .locator("#file-upload")
    .setInputFiles("upload_files/file_pdf1.pdf");

  await page.waitForTimeout(5000);
});

test.only("Upload Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.waitForTimeout(5000);

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "upload_files/file_pdf1.pdf",
      "upload_files/file_pdf2.pdf",
    ]);

  await page.waitForTimeout(5000);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "file_pdf1.pdf"
  );
  expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
    "file_pdf2.pdf"
  );

  await page.waitForTimeout(5000);

  // Removing files
  await page.locator("#filesToUpload").setInputFiles([]);

  await page.waitForTimeout(5000);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "No Files Selected"
  );
});
