//USEUNIT B_28
//USEUNIT B_27
//module.exports.getObject


function ExcelUtility() {
  
Sheet="SF_TestData28";

var excelFile = Excel.Open(Project.Path+"\\Data_Sheets\\Data_Sheet.xlsx"); //Path of the Datasheet
var excelSheet = excelFile.SheetByTitle(Sheet);
var rows = excelSheet.RowCount;
var cols = excelSheet.ColumnCount;

var Config = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
Config=ReadExcel["D_SeriesTestDataFromExcel28"]();

for(let i=2;i<=2;i++){
  
ConfigFilter1 = [Config[i][0],Config[i][1],Config[i][2],Config[i][3],Config[i][4]];
ConfigFilter2 = [Config[i][5],Config[i][6],Config[i][7],Config[i][8],Config[i][9],Config[i][10]];
ConfigFilter3 = [Config[i][8],Config[i][9],Config[i][10],Config[i][11]];
ConfigFilter4 = [Config[i][13]];

B_27["Opportunity_Creation"](ConfigFilter1);
B_27["RFC_Creation"]();
B_27["Quote_navigation"]();
B_28["AddLineItem_Cabinet"](ConfigFilter2);
B_28["EditLineItem_Cabinet"](ConfigFilter3);
B_27["Payment_Update"]();
B_28["Tax_Calculation"]();
B_28["Approval_Submission"](ConfigFilter4);
B_28["AddLineItem_Fee"]();
B_28["PostEdit_Validation"](ConfigFilter4);

Log.Message(ConfigFilter3);

}

}