import test from '@playwright/test'
test("framelocator",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
await page.waitForTimeout(2000)



})