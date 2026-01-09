import test, { expect } from '@playwright/test'
test ("pvrcinema",async({page})=>{
page.on("dialog",dialogbox=>{

console.log("TYPE of alert"+dialogbox.type())
if (dialogbox.type() === "sweet alert"){

    dialogbox.accept()
}
})

await page.goto("https://www.pvrcinemas.com/")
await page.locator("[class='cities-show']").click()
await page.getByPlaceholder("Search for city").fill("chennai")
await page.locator("//li[text()='Chennai']").click()
await page.locator("//span[text()='Cinema']").click()
await page.locator("//span[text()='Select Cinema']").click()
await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()
await page.locator("//li[@class='p-dropdown-item']").click()
await page.locator("(//span[text()='PRABHAS S THE RAJASAAB'])[2]").click()
await page.locator("(//li[@class='p-dropdown-item'])[2]").click()
await page.locator("//button[@aria-label='Submit']").click()
await page.locator("//button[text()='Accept']").click()
await page.locator("[id='CL.CLUB|I:7']").click()
/* const seatno=await expect(page.locator("[class='seat-info']")).toHaveText("Total Ticket Price  183.80")
console.log(seatno) */
/* const grandtotal=await expect(page.locator("//h6[text()='218.02']")).toHaveText("218.02")
console.log(grandtotal) */
const seat=await page.locator("[class='seat-info']").innerText()
console.log(seat)
const ticketprice=await page.locator("[class='grand-amount']").innerText()
console.log(ticketprice)
await expect(page.locator("[class='seat-info']")).toContainText("Seat InfoCLUBI7")
await page.locator("//button[text()='Proceed']").click()

})