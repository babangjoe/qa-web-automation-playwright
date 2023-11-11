import { test, expect } from "@playwright/test";

test("Interact with Web Table", async ({ page }, testInfo) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(3000);

  const table = await page.locator("#productTable");

  if (table) {
    //scroll the element into view
    await table.scrollIntoViewIfNeeded({ timeout: 5000 });

    await page.waitForTimeout(5000);
  } else {
    console.error("Web table does not found");
  }

  // 1). Count total number of columns
  const columns = await table.locator("thead tr th");
  console.log("Number of columns: ", await columns.count());

  // Count total number of rows
  const rows = await table.locator("tbody tr");
  console.log("Number of rows: ", await rows.count());

  // Assertion total number of columns and rows
  //   expect(await columns.count()).toBe(4);
  //   expect(await rows.count()).toBe(5);

  // 2). Select checkbox in Product 3
  //   const matchedrow = rows.filter({
  //     has: page.locator("td"),
  //     hasText: "Product 3",
  //   });
  //   await matchedrow.locator("input").check();

  // 3). Select multiple product using reusable function
  //   await selectByProduct(rows, page, "Product 2");
  //   await selectByProduct(rows, page, "Product 3");
  //   await selectByProduct(rows, page, "Product 4");

  // 4). Print all product detail using for loop
  //   for (let iRow = 0; iRow < (await rows.count()); iRow++) {
  //     const row = rows.nth(iRow);
  //     const tds = row.locator("td");

  //     for (let iTds = 0; iTds < (await tds.count()) - 1; iTds++) {
  //       console.log(await tds.nth(iTds).textContent());
  //     }
  //   }

  //   await testInfo.attach("Web Table", {
  //     body: await page.screenshot(),
  //     contentType: "image/png",
  //   });

  // 5). Read data from all pages in the table
  const pages = page.locator(".pagination li a");
  console.log("Number of pages: ", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();

      await page.waitForTimeout(3000);

      for (let iRow = 0; iRow < (await rows.count()); iRow++) {
        const row = rows.nth(iRow);
        const tds = row.locator("td");

        for (let iTds = 0; iTds < (await tds.count()) - 1; iTds++) {
          console.log(await tds.nth(iTds).textContent());
        }
      }

      await testInfo.attach("Pagination Table", {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    }
  }

  //   await page.waitForTimeout(5000);
});

// reusable function
async function selectByProduct(rows, page, prodName) {
  const matchedrow = rows.filter({
    has: page.locator("td"),
    hasText: prodName,
  });
  await matchedrow.locator("input").check();
}
