import { test, expect } from '@playwright/test'

test('Handle Mouse Hover', async({ page }) => {
    await page.goto('https://demo.opencart.com/')

    await page.waitForTimeout(10000)

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const mac = await page.locator("//a[normalize-space()='Mac (1)']")

    await desktop.hover()
    await page.waitForTimeout(3000)

    await mac.hover
    await page.waitForTimeout(3000)

    await mac.click()
    await page.waitForTimeout(3000)
})