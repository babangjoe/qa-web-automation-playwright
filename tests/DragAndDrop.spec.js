import { test, expect } from '@playwright/test'

test('Drag And Drop', async({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    await page.waitForTimeout(3000)

    const stockholm = await page.locator('#box2') // source
    const norway = await page.locator('#box101') // destination

    const seoul = await page.locator('#box5') // source
    const southkorea = await page.locator('#box105') // destination

    // Approach 1
    /*
    await stockholm.hover()
    await page.mouse.down()

    await norway.hover()
    await page.mouse.up()
    */

    // Approach 2
    await stockholm.dragTo(norway)
    
    await seoul.dragTo(southkorea)

    await page.waitForTimeout(5000)
})