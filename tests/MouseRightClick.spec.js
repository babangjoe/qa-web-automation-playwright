import { test, expect } from '@playwright/test'

test('Mouse Right Click', async({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    await page.waitForTimeout(3000)

    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //right click button
    await button.click({ button: 'right' })

    await page.waitForTimeout(5000)
})