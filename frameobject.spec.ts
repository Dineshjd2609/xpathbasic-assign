import test from '@playwright/test'
test("framelocator",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
await page.frame({name:"frame2"})?.locator("#Click").click()
await page.waitForTimeout(2000)

})