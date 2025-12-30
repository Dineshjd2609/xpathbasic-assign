import test from '@playwright/test'
test("facebookbasic",async({page})=>{
await page.goto("https://en-gb.facebook.com/")
await page.locator("//a[text()='Create new account']").click()
await page.locator("//input[@name='firstname']").fill("DINESH")
await page.locator("//input[@name='lastname']").fill("KUMAR")
await page.selectOption("[id='day']",{value:"26"})
await page.selectOption("[id='month']",{index:8})
await page.selectOption("[id='year']",{label:"1996"})
await page.locator("//input[@value='2']").click()
await page.locator("//input[@name='reg_email__']").fill("dineshjd7@gmail.com")
await page.locator("//input[@name='reg_passwd__']").fill("D1I2N34")
await page.waitForTimeout(2000)
await page.locator("//button[@name='websubmit']").click()















})