import test from '@playwright/test'
test("alertframe",async({page})=>{
 /* page.on("dialog",dialogbox=>{
 console.log(dialogbox.type())
 if(dialogbox.type() ==='confirm'){
  dialogbox.accept()
 } */
/* 
})  */
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

//await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()

//await page.frame({name:"iframeResult"})?.locator("//button[text()='Try it']").click()

})