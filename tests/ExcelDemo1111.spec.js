const Exceljs = require('exceljs')  // imported exceljs  dependencies 
const {test,expect} = require('@playwright/test')
async function WriteexcelTest(searchFruit,replaceText,change,excelPath) // paramererised function sending fruit
{
const workbook = new Exceljs.Workbook() // created object of exceljs class & calling method .workbook()
await workbook.xlsx.readFile(excelPath) // giving path of excel
const worksheet = workbook.getWorksheet('Sheet1')// giving information to JS of Sheet 1
const output =await  realExcel(worksheet,searchFruit)// calling the method read excel & passing parameter worksheet,seachFruit
// updating value as iphone in place of apple
const cell = worksheet.getCell(output.row,output.column + change.colChange)//getCell is used to go inside any cell provide row,column number(row3,column2)
cell.value = replaceText// using .value to assign new value inside cell (row3,column2)
await workbook.xlsx.writeFile("C:/Users/Nitesh Naik/Downloads/Excel Download Test.xlsx")//Updating value of excel using .writeFile metod
console.log("iphone updated in excel")
}

async function realExcel (worksheet,seachFruit)// created seperate method of reading the excel & giving you the coordinates 
{
let output = {row:-1, column: -1}// created object as output as  object  
worksheet.eachRow((row, rowNumber) =>
{
row.eachCell(  (cell,colNumber)=>
{
if (cell.value === seachFruit)
{
output.row = rowNumber // Banana rownumber is sitting inside output object
output.column = colNumber// Banana colnumber is sitting inside output object
}
})
})
return output
}
//WriteexcelTest("Mango",350,{rowChange:0,colChange:2},"C:/Users/Nitesh Naik/Downloads/Excel Download Test.xlsx")
test ('Upload download excel validation',async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")// navigating to excel website
const myDownload =  page.waitForEvent('download')//adding wait here event is happening
//await page.getByRole('button',{name:'Download'}).click()//located Download button  
await page.locator("#downloadButton").click()
const download = await myDownload// waiting till excel file is downloaded completely, event is getting complete
WriteexcelTest("Mango",350,{rowChange:0,colChange:2},"C:/Users/Nitesh Naik/Downloads/download.xlsx")
await page.locator("#fileinput").click()//located upload button & clicking on it
await page.locator("#fileinput").setInputFiles("C:/Users/Nitesh Naik/Downloads/download.xlsx")//uploading excel file in upload button

})