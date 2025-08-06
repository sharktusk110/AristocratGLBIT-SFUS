//USEUNIT OutrightSale_D_01
//module.exports.getObject

function AddLineItemCabinate() {
  
Sheet="SF_TestData";

var excelFile = Excel.Open(Project.Path+"\\Data_Sheets\\Data_Sheet.xlsx"); //Path of the Datasheet
var excelSheet = excelFile.SheetByTitle(Sheet);
var rows = excelSheet.RowCount;
var cols = excelSheet.ColumnCount;

var Config = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
Config=ReadExcel["D_SeriesTestDataFromExcel"]();

for(let i=2;i<=rows;i++){
ConfigFilter2 = [Config[i][5],Config[i][6],Config[i][7],Config[i][8],Config[i][9],Config[i][10],Config[i][11],Config[i][12],Config[i][13],Config[i][14],Config[i][15],Config[i][16],Config[i][17],Config[i][18],Config[i][19],Config[i][20],Config[i][21],Config[i][22],Config[i][23],Config[i][24],Config[i][25],Config[i][26],Config[i][27],Config[i][28]];
OutrightSale_D_01["AddLineItem_Cabinet"](ConfigFilter2);

}}