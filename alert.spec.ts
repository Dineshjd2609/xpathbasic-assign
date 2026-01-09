import test from '@playwright/test'
test("alert",async({page})=>{
page.on("dialog",dialogBox=>{

    console.log("Type o the alert"+dialogBox.type())
    console.log("Message of the alert"+dialogBox.message())
    if(dialogBox.type() ==='confirm'){
        dialogBox.accept()
    }
    else if(dialogBox.type() ==='prompt'){

        dialogBox.accept("DINESH KUMAR J")
    }

})
page.once("dialog",dialogBox=>{

    console.log("Type o the alert"+dialogBox.type())
    console.log("Message of the alert"+dialogBox.message())
    if(dialogBox.type() ==='confirm'){
        dialogBox.accept()
    }
    else if(dialogBox.type() ==='prompt'){

        dialogBox.accept("DINESH KUMAR J")
    }

})

await page.goto("https://www.leafground.com/alert.xhtml")
await page.click("(//span[text()='Show'])[2]")
await page.click("(//span[text()='Show'])[5]")

})   