//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait

var AddEdit = Aliases.browser.Page_AddEdit_Button;
var Configuration= Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.Configuration_Panel;

function AddLineItem_Cabinet(Config){

 Project.Variables.url=Sys.Browser().Page("*").URL;
 
 AddEdit.AddEditLine_Button.Click();
 DynamicWait["dynamic_wait_visibility"](AddEdit.AddEdit_Frame.Add_button, 10000);
 AddEdit.AddEdit_Frame.Add_button.Click();
 DynamicWait["dynamic_wait_visibility"](AddEdit.AddEdit_Frame.AllFamilies_button, 10000);
 AddEdit.AddEdit_Frame.AllFamilies_button.Click();
 Delay(2000);
 AddEdit.FindElement("//span[@title='"+Config[0]+"']").Click();
 Delay(1000);
 AddEdit.AddEdit_Frame.CabinetSearch_Field.setText(Config[1]);
 Delay(2000);
 AddEdit.AddEdit_Frame.CabinetSearch_Field.Keys("[Enter]");
 Delay(2000);
 AddEdit.FindElement("//td[.='"+Config[1]+"']").Click();
 Delay(2000);
 AddEdit.FindElement("//td[.='"+Config[2]+"']").Click();
 Delay(3000);
 AddEdit.AddEdit_Frame.Continue_Button.Click();
 Delay(2000);

 Configuration.Promotion_Field.ClickItem(2);
 Delay(3000);
 Log.Message("Promotion value "+Config[3]);
 
 Configuration.License_Field.Keys(Config[4]);
 Log.Message("License Field "+Config[4]);
 Delay(2000);

 Configuration.Freight_Field.Keys(Config[5]);
 Log.Message("Freight Field value as "+Config[17]);
 Delay(2000);

 AddEdit.AddEdit_Frame.Save_Button.Click();
 Delay(3000);
 
 AddEdit.AddEdit_Frame.Close2_Button.Click();
 
}

function EditLineItem_Cabinet(Config){

 DynamicWait["dynamic_wait_visibility"](AddEdit.AddEditLine_Button, 10000);
 AddEdit.AddEditLine_Button.Click();
 Delay(2000);
 AddEdit.AddEdit_Frame.Edit_button.Click();
 Delay(2000);
 
 AddEdit.textnodeGameSalesOutrightOutrigh.buttonGameSalesOutrightOutright.Keys(Config[3]);
 AddEdit.textnodeGameSalesOutrightOutrigh.buttonGameSalesOutrightOutright.Keys("[Enter]");
 
 Delay(2000);

 Configuration.Promotion_Field.ClickItem(2);
 Delay(3000);
 Log.Message("Promotion value "+Config[0]);
 
 Configuration.License_Field.Keys(Config[1]);
 Log.Message("License Field "+Config[1]);
 Delay(2000);

 Configuration.Freight_Field.Keys(Config[2]);
 Log.Message("Freight Field value as "+Config[2]);
 Delay(2000);

 AddEdit.AddEdit_Frame.Save_Button3.Click();
 Delay(3000);
 
 AddEdit.AddEdit_Frame.Close2_Button.Click();
 
 }
 
function PostEdit_Validation(Config) {
  
 var str1;
 
 Browsers.Item(btChrome).Navigate(Project.Variables.url);
 
 DynamicWait["dynamic_wait"]
 (AddEdit.sectionHealthCheckResults.panelSalesTaxMustBeCalculated2, 10000);
 
 str1=AddEdit.sectionHealthCheckResults.panelSalesTaxMustBeCalculated2.textContent;
 
 if(aqString.Contains(str1,Config[0])>=0){
 Log.Error("Notification is not appearing as per expectations.")
 }else{
   Log.Checkpoint("Notification is appearing as per expectations.");
 }

 Delay(1000);
 AddEdit.ShowMoreActions_Button.Click();
 Delay(1000);
 AddEdit.FindElement("//a[.='Tax Calculator']").Click();
 Delay(1000);
 AddEdit.SaveEdit_Button.Click();
 Delay(1000);
 
 if(AddEdit.ApprovalSubmit_Button.Exists){
 AddEdit.ApprovalSubmit_Button.Click();
 Delay(2000);
 }else{
 AddEdit.ShowMoreActions_Button.Click();
 Delay(2000);
 AddEdit.SubmitForApproval_Button2.Click();
 }
 AddEdit.Comments_Field.Keys("Please Approve for Testing Purpose");
 Delay(2000);
 AddEdit.ApprovalSubmit2_Button.Click();
 if(AddEdit.panel2.Exists){
 if(aqString.Contains(AddEdit.panel2.textContent,"The Quote can't be 'Submitted for Approval' because it has some errors:")>=0){
   Log.Error("Submit for approval functionality not working as expected");
 }
 }else{
   Log.Checkpoint("Submit for approval functionality is working as expected");
 }

}


function AddLineItem_Fee(){

 AddEdit.AddEditLine_Button.Click();
 Delay(2000);
 AddEdit.AddEdit_Frame.Add_button.Click();
 Delay(2000);

 AddEdit.AddEdit_Frame.CabinetSearch_Field.setText("WA-FEE001|01");
 Delay(2000);
 AddEdit.AddEdit_Frame.CabinetSearch_Field.Keys("[Enter]");
 Delay(2000);
 AddEdit.FindElement("//td[.='"+"WA-FEE001|01"+"']").Click();
 Delay(2000);
 AddEdit.FindElement("//div[contains(text(), 'Non GOps Connection Fixed Fee WA')]").Click();

 AddEdit.AddEdit_Frame.Continue_Button.Click();
 Delay(2000);

 Configuration.Promotion_Field.ClickItem(2);
 Delay(3000);

 AddEdit.AddEdit_Frame.Save2_Button.Click();
 Delay(3000);
 
 AddEdit.AddEdit_Frame.Close2_Button.Click();
 
}

function Tax_Calculation(){
 
 AddEdit.ShowMoreActions_Button.Click();
 Delay(1000);
 AddEdit.FindElement("//a[.='Tax Calculator']").Click();
 AddEdit.SaveEdit_Button.Click();
 Delay(2000);
 }
 
function Approval_Submission(Config){
  
 var str1;
  
 if(AddEdit.ApprovalSubmit_Button.Exists){
 AddEdit.ApprovalSubmit_Button.Click();
 Delay(2000);
 }else{
 AddEdit.ShowMoreActions_Button.Click();
 Delay(2000);
 AddEdit.SubmitForApproval_Button2.Click();
 }
 AddEdit.Comments_Field.Keys("Please Approve for Testing Purpose");
 Delay(2000);
 AddEdit.ApprovalSubmit2_Button.Click();
 if(AddEdit.panel2.Exists & aqString.Contains(AddEdit.panel2.textContent,"The Quote can't be 'Submitted for Approval' because it has some errors:")>=0){
   Log.Checkpoint("Submit for approval functionality is working as expected");
   AddEdit.Close_Button.Click();
 }else{
   Log.Error("Submit for approval functionality not working as expected");
 }
 
 DynamicWait["dynamic_wait"]
 (AddEdit.sectionHealthCheckResults.panelSalesTaxMustBeCalculated2, 10000);
 
 str1=AddEdit.sectionHealthCheckResults.panelSalesTaxMustBeCalculated2.textContent;
 
  if(aqString.Contains(str1,Config[0])>=0){
 Log.Checkpoint("Notification is appearing as per expectations.")
 }else{
   Log.Error("Notification is not appearing as per expectations.");
 }
 

}




