import { test, expect } from "@playwright/test";

test("Handle Inner Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  await page.waitForTimeout(5000);

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3.fill('input[name="mytext3"]', "bangjoecode");

  // Interact with Inner Frame
  const childFrames = await frame3.childFrames();
  await childFrames[0].locator('//*[@id="i8"]/div[3]/div').check();

  await page.waitForTimeout(5000);
});
