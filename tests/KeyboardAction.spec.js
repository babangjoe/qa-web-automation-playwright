import { test, expect } from '@playwright/test'

test('Keyboard Action', async({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')

    await page.waitForTimeout(3000)

    await page.fill('[name="text1"]', 'Hello World!')

    // Ctrl + A
    await page.keyboard.press('Control+A')

    // Ctrl + C
    await page.keyboard.press('Control+C')

    // Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    
    await page.waitForTimeout(3000)

    // Ctrl + V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)
})