// Requirement : To be done later.
// Creator : Pooja Shivhare
// Date: 6th of Aug'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait


function SellingModel_GamingOpsMSPCoinInJackpotFunded(){

var Add_item = Aliases.browser.Page_AddEdit_Button;
var Configuration= Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.Configuration_Panel;
Project.Variables.url=Sys.Browser().Page("*").URL;
 
 Add_item.AddEditLine_Button.Click();
 Delay(2000);
 Add_item.AddEdit_Frame.Add_button.Click();
 Delay(2000);
 Add_item.AddEdit_Frame.AllFamilies_button.Click();
 Delay(2000);
 Add_item.FindElement("//span[@title='"+Config[0]+"']").Click();
 Log.Message("Cabinet panel value has enterd as " +Config[0])
 Delay(2000);
 Add_item.AddEdit_Frame.CabinetSearch_Field.setText(Config[1]);
 Delay(2000);
 Add_item.AddEdit_Frame.CabinetSearch_Field.Keys("[Enter]");
 Delay(2000);
 Add_item.FindElement("//td[.='"+Config[1]+"']").Click();
 Delay(2000);
 Add_item.FindElement("//td[.='"+Config[2]+"']").Click();
 Delay(3000);
 Add_item.AddEdit_Frame.Continue_Button.Click();
 Delay(2000);

 Configuration.Promotion_Field.ClickItem(2);
 Delay(3000);
 Log.Message("Promotion value "+Config[3]);
 
 Configuration.License_Field.Keys(Config[4]);
 Log.Message("License Field "+Config[4]);
 Delay(2000);
// Configuration.License_Field.Keys("[Enter]");
// Delay(2000);
 Configuration.GameTheme_Field.Keys(Config[5]);
 Delay(3000);
 Configuration.GameTitle_Field.Keys(Config[6]);
// Delay(2000);
// Add_item.Scroll.Keys("[Down]");
 Delay(3000);
 Configuration.Topper_Field.Keys(Config[7]);
 Log.Message("TopperField value as "+Config[7]);
 Delay(2000);
 Configuration.ButtonPanel_Field.Keys(Config[8]);
 Log.Message("Button Panel Field value as "+Config[8]);
 Delay(2000);
 Configuration.PlayerTracker_Field.Keys(Config[9]);
 Log.Message("Player TrackerField value as "+Config[9]);
 Delay(2000);
 Configuration.PlayerTrackerInstall_Field.Keys(Config[10]);
 Log.Message("Player Tracker install Field value as "+Config[10]);
 Delay(2000);
 Configuration.Printer_Field.Keys(Config[11]);
 Log.Message("Printer Field value as "+Config[11]);
 Delay(2000);
 Configuration.BillAcceptor_field.Keys(Config[12]);
 Log.Message("Bill Acceptor_field value as "+Config[12]);
 Delay(2000);
 Configuration.Finish_Field.Keys(Config[13]);
 Log.Message("Finish Field value as "+Config[13]);
 Delay(2000);
 Configuration.Trim_Field.Keys(Config[14]);
 Log.Message("Trim Field value as "+Config[14]);
 Delay(2000);
 Configuration.HardMeter_Field.Keys(Config[15]);
 Log.Message("HardMeter Field value as "+Config[15]);
 Delay(2000);
 Configuration.EZPay_Field.Keys(Config[16]);
 Log.Message("EZPay Field value as "+Config[16]);
 Delay(2000);
 Configuration.Freight_Field.Keys(Config[17]);
 Log.Message("Freight Field value as "+Config[17]);
 Delay(2000);
// Configuration.Denom_Field.ClickItem(5);
// Delay(2000);
 Configuration.Denom_Field.Keys(Config[18]);
 Delay(2000);
 Configuration.AftEft_Field.Keys(Config[19]);
 Log.Message("AftEft Field value as "+Config[19]);
 Delay(2000);
 Configuration.Var_Field.Keys(Config[20]);
 Log.Message("Var Field value as "+Config[20]);
 Delay(2000);
 Configuration.CandleColor_Field.Keys(Config[21]);
 Log.Message("CandleColor Field value as "+Config[21]);
 Delay(2000);
 Configuration.TicketValidation_Field.Keys(Config[22]);
 Log.Message("TicketValidation Field value as "+Config[22]);
 Delay(2000);
 Configuration.AuditSwitch_Field.Keys(Config[23]);
 Delay(3000);
 Add_item.AddEdit_Frame.Save_Button.Click();
 Delay(3000);
 CabinetTotalPrice= Add_item.AddEdit_Frame.Cabinet_Price.contentText;
 Log.Message("Cabinet Grand Total Price is "+CabinetTotalPrice);
 Delay(2000);

}

function AddLineItemController(Config){
  
 var Add_item = Aliases.browser.Page_AddEdit_Button;

 Add_item.AddEdit_Frame.Add_button.Click();
 Delay(2000);
 Add_item.AddEdit_Frame.AllFamilies_button.Click();
 Delay(2000);
 Add_item.FindElement("//span[@title='"+Config[0]+"']").Click();
 Log.Message("Cabinet panel value has enterd as " +Config[0])
 Delay(2000);
 Add_item.AddEdit_Frame.CabinetSearch_Field.setText(Config[1]);
 Delay(2000);
 Add_item.AddEdit_Frame.CabinetSearch_Field.Keys("[Enter]");
 Delay(2000);
 Add_item.FindElement("//td[.='"+Config[1]+"']").Click();
 Delay(2000);
 Add_item.FindElement("//td[.='"+Config[2]+"']").Click();
 Delay(3000);
 Add_item.AddEdit_Frame.Continue_Button.Click();
 Delay(2000);
 
 ControllerTotalPrice= Add_item.AddEdit_Frame.ControllerTotal_Price.contentText;
 Log.Message("Controller Total Price is "+ControllerTotalPrice);
 Add_item.AddEdit_Frame.Save_Button.Click();
 Delay(2000);
}