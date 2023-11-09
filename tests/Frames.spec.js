import { test, expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  await page.waitForTimeout(5000);

  const allframes = await page.frames();
  //   console.log(allframes.length);

  /*Interact with frame */
  //Approach 1: using URL of frame
  //   const frame1 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //   });
  //   await frame1.fill('[name="mytext1"]', "Bang Joe");

  //Approach 2: using frameLocator
  const frame1InputBox = await page
    .frameLocator('frame[src="frame_1.html"]')
    .locator('[name="mytext1"]');
  frame1InputBox.fill("Babang Joe");

  await page.waitForTimeout(5000);
});
