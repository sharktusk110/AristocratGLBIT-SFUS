//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait


var opportunity_name;
var quotename;
var urc;
var quote_number;
var ControllerTotalPrice;
var MonthlyPaymentAmount
var totalPrice;
var rebate;
var CabinetTotalPrice;
var Tax;
var HeaderContent = "Header Template has been added";
var FooterContent = "Footer Template has been added";
var SocName;
var Econname;


function Opportunity_Creation(Config) {
  
var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
var opportunity=Aliases.browser.Page_NewOpportunityCreation;

   
//Navigating for SF Home and selecting Aristocrat app for account related opportunity creation
 Browsers.Item(btChrome).Run("https://test.salesforce.com/");
 Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
 Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
 Delay(3000);
 app.AppLauncher_Button.Click();
 Delay(2000);
 app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
 Delay(1000);
 Sys.Desktop.Keys("[Down]")
 Delay(500);
 app.SearchAppsAndItems_SearchField.Keys("[Enter]");
 Delay(1000);
 //Navigating to account section
 Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
 
 //Searching account for opportunity creation
 account.SearchThisList_SearchField.SetText(Config[0]);
 Log.Message("Account Name has enterd as " +Config[0]);
 account.SearchThisList_SearchField.Keys("[Enter]");
 
 
 account.Account_Node.Click();
 Delay(2000);
 Project.Variables.accounturl=Sys.Browser().Page("*").URL;
 account.NewOpportunity_Button.Click();
 Delay(5000);
 
 //Filling opportunity creation mandatory field including opportunity name
 opportunity_name=opportunity.OpportunityName_Field.Text;
 opportunity_name=opportunity_name.split("-")[0]+"-"+(Math.floor(Math.random() * 10000000000) + 1)+"-"+opportunity_name.split("-")[2];
 opportunity.OpportunityName_Field.SetText(opportunity_name);
 Log.Message(opportunity_name);
 
 
 //Filling opportunity creation mandatory field including gaming classification
 opportunity.GamingClassification_Field.Click();
 Delay(2000);
 opportunity.GamingClassification_Field.Keys(Config[1]);
 Delay(2000);
 Log.Message("Gaming field has enterd as " + Config[1]);
 opportunity.GamingClassification_Field.Keys("[Enter]");
 Delay(2000);
 
 
 // Filling opportunity creation mandatory field including type
 opportunity.Type_Field.Click();
 Delay(2000);
 opportunity.Type_Field.Keys(Config[2]);
 Delay(2000);
 Log.Message("Opportunity field has enterd as " + Config[2]);
 opportunity.Type_Field.Keys("[Enter]");
 
 
// Filling opportunity creation mandatory field including market segment.
 opportunity.MarketSegment_Field.Click();
 Delay(2000);
 opportunity.MarketSegment_Field.Keys(Config[3]);
 Log.Message("MarketSegment Field has enterd as " +Config[3])
 Delay(2000);
 opportunity.MarketSegment_Field.Keys("[Enter]");

 // Filling opportunity creation mandatory field including lead source.
 opportunity.LeadSource_Field.Click();
 Delay(2000);
 opportunity.LeadSource_Field.Keys(Config[4]);
 Log.Message("LeadSource Field has enterd as " +Config[4])
 Delay(2000);
 opportunity.LeadSource_Field.Keys("[Enter]");
 Delay(2000);
 // Submitting the opprotunity for creation
 opportunity.Save_Button.Click();
}

//RFC Creation
function RFC_Creation(){
  
//opportunity_name="BELLAGIO LAS VEGAS -3043631152- 07/29/2025";  
var search_opportunity=Aliases.browser.Page_SearchOpportunity;
var RFC =Aliases.browser.page_RFCCreation.RFC;
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning"+
//         "/o/Opportunity/list?filterName=__Recent";

Browsers.Item(btChrome).Navigate(Project.Variables.recentoppurl);
Delay(2000);
search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(3000);

//Opportunity creation Validation
DynamicWait["dynamic_wait"](search_opportunity.Opportunity_Node.Exists, 10000);
Log.Message("Opportunity found and text matches: " + opportunity_name);
aqObject.CheckProperty(Aliases.browser.Page_SearchOpportunity.Opportunity_Node, "ContentText", cmpContains, opportunity_name);
Log.Message("Opportunity found and text matches: " + opportunity_name);
//Click on the created opportunity
search_opportunity.Opportunity_Node.Click();
Delay(5000);
Project.Variables.RFCurl=Sys.Browser().Page("*").URL;
//Click on RFC creation button
RFC.NewRFCQuote_Button.Click();
Delay(5000);
quotename= RFC.RFCQuoteName_Field.Text;
Log.Message("RFC quote name is as "+quotename);
Delay(1000);
RFC.RFCSave_Button.Click();
Delay(2000);
}

function Quote_navigation(){
  
var Quote_nav=Aliases.browser.Page_QuoteNavigation;
//var econ_config=Aliases.browser.Page_EconMainConfiguration;
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
//         "Quote/list?filterName=__Recent";

//quotename="RFC CALIFORNIA HOTEL CASINO -1863394975- 07/17/2025"; 
Browsers.Item(btChrome).Navigate(Project.Variables.recentquoteurl);
Delay(3000);
Quote_nav.SearchThisList_SearchField.SetText(quotename);
Delay(2000);
Quote_nav.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);

aqObject.CheckProperty(Aliases.browser.Page_QuoteNavigation.Searched_Node, "contentText", cmpContains, quotename);
Log.Message("RFC found and text matches: " +quotename);
Delay(2000);
Quote_nav.Searched_Node.Click();
Delay(3000);
}

function AddLineItem_Cabinet(Config){

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

function AddLineItem_Rebate(Config){
  
 var Add_item = Aliases.browser.Page_AddEdit_Button;
 
 Add_item.AddEdit_Frame.Add_button.Click();
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
 Add_item.AddEdit_Frame.Configuration_Panel.Rebate_Field.SetText(2000);
 Delay(2000);
 Add_item.AddEdit_Frame.Configuration_Panel.Rebate_Field.Keys("[Enter]");
 Delay(2000);
 Add_item.AddEdit_Frame.Save_Button.Click();
 Delay(2000);
 Add_item.AddEdit_Frame.Close2_Button.Click();
 Delay(2000);
}
 
function cost_calculation(){
   
 var Add_item = Aliases.browser.Page_AddEdit_Button;
 var cabinet = parseFloat(CabinetTotalPrice.replace(/[\$,]/g, ""));
 var controller = parseFloat(ControllerTotalPrice.replace(/[\$,]/g, ""));
 var finalPrice = cabinet + controller - 2000;
 var formattedPrice = finalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 var expectedPrice = "USD " + formattedPrice;

 totalPrice = Add_item.Total_Price.contentText;
 if (totalPrice === expectedPrice) {
    Log.Message("Total Price is " + totalPrice + " and has been validated after rebate.");
  } else {
    Log.Warning("Price mismatch! Expected: " + expectedPrice + ", but got: " + totalPrice);
  }
}
 
function Legal_Instructions(Config){
 
 var AdditionalLegalTab = Aliases.browser.page_AdditionalLegalInstruction
 var AddEdit =  Aliases.browser.Page_AddEdit_Button;
 var HeadertemplateName = "Test_Header_"+Math.floor(Math.random() * 1000000);
 var FootertemplateName = "Test_Footer_"+Math.floor(Math.random() * 1000000);

 
 Delay(2000);
 AddEdit.AdditionalLegal_Button.Click();
 Delay(2000);
 AddEdit.SetTextAdditionalLegal_Field.Keys("D Series Test");
 Delay(2000);
 //Header update
 AddEdit.QuoteDocHeader_Field.Keys("New Template Data");
 Delay(2000);
 AddEdit.QuoteDocHeader_Field.FindElement("//span[text()='New Template Data']").Click();
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateDataName_Textbox.SetText(HeadertemplateName);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Click();
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys(Config[0]);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys("[Down][Down]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys("[Enter]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Type_Field.Keys("Header");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Type_Field.Keys("[Enter]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateContent_Field.Click();
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateContent_Field.Keys(HeaderContent);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Save_Button.Click();
 Delay(2000);
 //Footer update
 AddEdit.QuoteDocFooter_Field.Keys("New Template Data");
 Delay(2000);
 
 AddEdit.QuoteDocFooter_Field.Keys("[Down][Down]");
 Delay(2000);
 AddEdit.QuoteDocFooter_Field.Keys("[Enter]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateDataName_Textbox.SetText(FootertemplateName);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Click();
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys(Config[0]);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys("[Down][Down]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.AccountName_Field.Keys("[Enter]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Type_Field.Keys("Footer");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Type_Field.Keys("[Enter]");
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateContent_Field.Click();
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.TemplateContent_Field.Keys(FooterContent);
 Delay(2000);
 AdditionalLegalTab.TemplateFrame.Save_Button.Click();
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();
 Delay(2000);
 aqObject.CheckProperty(AddEdit.Header_Name, "contentText", cmpEqual, HeadertemplateName);
 Delay(2000);
 aqObject.CheckProperty(AddEdit.Footer_Name, "contentText", cmpEqual, FootertemplateName);
 Delay(2000);
}
 
function Payment_Update(){
 //var totalPrice = Aliases.browser.Page_AddEdit_Button.Total_Price.contentText;
 var AddEdit =  Aliases.browser.Page_AddEdit_Button;
 var ApprovalButton = Aliases.browser.Page_AddEdit_Button.ApprovalSubmit_Button;

 if (ApprovalButton.Exists) {
 Log.Error("Approval Submit button should not be visible before Payment Terms");}
 else {
   Log.Message("Approval Submit button does not exist on the page as expected");}
 
 Delay(2000);
 AddEdit.EditPaymentTerms_Button.Click();
 Delay(2000);
 AddEdit.PaymentTerms_Button.Keys("12 Equal Monthly Payments");
 Delay(2000);
 AddEdit.PaymentTerms_Button.FindElement("//span[@title='12 Equal Monthly Payments']").Click();
 Delay(2000);
 AddEdit.LeaseTerm_button.Keys("12 Months");
 Delay(2000);
 AddEdit.LeaseTerm_button.Keys("[Enter]");
 Delay(2000);
 AddEdit.PaymentTermsChangeReason_Field.Keys("Price Updated!");
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();
 Delay(4000);
 
 var totalafterFinance = Aliases.browser.Page_AddEdit_Button.Total_Price.contentText;
 Log.Message("Total Price after finace charges "+totalafterFinance);
 var priceafterFinance = parseFloat(totalafterFinance.replace(/[^0-9.-]+/g, ""));
 Log.Message("Total Price after finace charges "+priceafterFinance);
 var monthly = priceafterFinance / 12;
 var expMonthPrice = "USD " + monthly.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 Log.Message("Total expected price "+expMonthPrice);

 aqObject.CheckProperty(Aliases.browser.Page_AddEdit_Button.MonthlyPayment_Field, "contentText", cmpEqual, expMonthPrice);
 Log.Message("Monthly payment is valid");

 Delay(2000);
 TotalFinaceCost= AddEdit.TotalFinaceCost_Field.contentText;
 aqObject.CheckProperty(AddEdit.TotalFinaceCost_Field, "ContentText", cmpNotEqual, null);
 Log.Message("Total Finace Cost as "+TotalFinaceCost);
 Delay(2000);
 
 aqObject.CheckProperty(Aliases.browser.Page_AddEdit_Button.ApprovalSubmit_Button, "VisibleOnScreen", cmpEqual, true);
 Log.Message("Approval button is visible");
 ApprovalButton.Click();
 Delay(2000);
 AddEdit.Comments_Field.Keys("Please Approve for Testing Purpose");
 AddEdit.ApprovalSubmit2_Button.Click();
 
 aqObject.CheckProperty(AddEdit.TaxMustBeCalculated_frame, "VisibleOnScreen", cmpEqual, true);
 Log.Message("Tax must be Calculate before RFC submission and working as expected.");
 Delay(2000);
 AddEdit.Close_Button.Click();
 Delay(2000);
}


function Tax_Calculation(){
  var AddEdit = Aliases.browser.Page_AddEdit_Button
  
 Delay(2000);
 AddEdit.ShowMoreActions_Button.Click();
 Delay(1000);
 AddEdit.FindElement("//a[.='Tax Calculator']").Click();
// Aliases.browser.Page_AddEdit_Button.buttonShowMoreActions2.TaxCalculator_Button2
 Tax = AddEdit.CalculatedTax_Price.contentText;
 Log.Message("Tax calculated as "+Tax);
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();
 Delay(2000);
 Aliases.browser.Page_AddEdit_Button.ApprovalSubmit_Button.Click();
 Delay(2000);
 Aliases.browser.Page_AddEdit_Button.Comments_Field.Keys("Please Approve for Testing Purpose");
 Delay(2000);
 Aliases.browser.Page_AddEdit_Button.ApprovalSubmit2_Button.Click(); 
 Delay(2000);
 var RfcStatus = Aliases.browser.Page_AddEdit_Button.RfcStatus_Field;
 Log.Message(RfcStatus);
 aqObject.CheckProperty(RfcStatus, "contentText", cmpEqual, "Submitted for Approval");
}

function RFC_Recall(){
  addEdit = Aliases.browser.Page_AddEdit_Button
  addEdit.Related_tab.Click();
  Delay(2000);
  Sys.Desktop.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
  Delay(2000);
  addEdit.frame.ApprovalMoreAction_Button.Click();
  Delay(2000);
  addEdit.FindElement("//li[.='Recall']").Click();
  Delay(2000);
  addEdit.Comments_Field.Keys("Recalling submitted approval");
  Delay(2000);
  addEdit.ApprovalSubmit2_Button.Click();
  Delay(2000);
  addEdit.Details_Tab.Click();
  Delay(2000);
  Browsers.Item(btEdge).Navigate(Project.Variables.url);
  Delay(3000);
  var RfcStatus=Aliases.browser.Page_AddEdit_Button.RfcStatus_Field;
  aqObject.CheckProperty(RfcStatus, "contentText", cmpEqual, "Draft");
  Delay(2000);
  addEdit.ApprovalSubmit_Button.Click();
  Delay(2000);
  addEdit.Comments_Field.Keys("Approved");
  addEdit.ApprovalSubmit2_Button.Click(); 
  Delay(2000);
  var RfcStatus = Aliases.browser.Page_AddEdit_Button.RfcStatus_Field;
  aqObject.CheckProperty(RfcStatus, "contentText", cmpEqual, "Submitted for Approval");
  }
  
function RFC_Approval(){
  addEdit = Aliases.browser.Page_AddEdit_Button
  addEdit.Related_tab.Click();
  Delay(2000);
  Sys.Desktop.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
  Delay(1000);
  let count = 0;
  
  while (count < 5) {
  Log.Message("Starting approval iteration : "+ (count + 1));
  addEdit.Approve_Button.Click();
  Delay(2000);
  addEdit.Comments_Field.Keys("approved");
  Delay(2000);
  addEdit.ApprovalSubmit2_Button.Click();
  Delay(2000);
  Log.Message("Completed approval iteration : " + (count + 1));
  Delay(3000); 
   count++;
  }
  addEdit.Details_Tab.Click();
  Delay(2000);
  var ApprovalStatus = Aliases.browser.Page_AddEdit_Button.RfcApprovalStatus_Field;
  aqObject.CheckProperty(ApprovalStatus, "contentText", cmpEqual, "Approved");
  Delay(2000);
}

function RFC_Document_Validation(){
  
  Login["User_login"]();
  Delay(3000);
  Browsers.Item(btEdge).Navigate(Project.Variables.url);
  Delay(3000);
  Aliases.browser.Page_AddEdit_Button.QuoteDoc_Button.Click();
  Delay(2000);
  Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame.Click();
  Delay(2000);
  OCR.Recognize(Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame).CheckText("*"+HeaderContent+"*");
  Delay(2000);
  Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame.Click();
  Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame.Drag(726, 42, 13, 139);
  Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame.Keys("^![ReleaseLast][ReleaseLast]");
  Delay(2000);
  OCR.Recognize(Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.PDF_frame).CheckText("*"+FooterContent+"*");
  Delay(2000);
  Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.AttachToQuote_Button.Click();
  Delay(2000);
  Browsers.Item(btEdge).Navigate(Project.Variables.url);
  Delay(3000);
  Regions.panelHealthCheckResults.Check(Aliases.browser.Page_AddEdit_Button.FindElement("//div[@id='brandBand_2']//slot/div"), false, false, 70, 70);
  Delay(2000);
  Aliases.browser.Page_AddEdit_Button.LogOut_Link.Click();
  Delay(2000);
}

function SOC_Creation(){
  
  Browsers.Item(btEdge).Navigate(Project.Variables.url);
  Delay(2000);
  Aliases.browser.Page_AddEdit_Button.NewSocQuote_button.Click();
  Delay(10000);
  Aliases.browser.Page_AddEdit_Button.SocPath.Complete_Button.Click();
  Delay(3000);
  Aliases.browser.Page_AddEdit_Button.SocPath.MarkStatusAsComplete_button.Click();
  Delay(4000);
  Aliases.browser.Page_AddEdit_Button.SocPath.RelatateOpportunity_Field.Click();
  Delay(3000);
  aqObject.CheckProperty(Aliases.browser.page_RFCCreation.FindElement("//a[.='Config']"), "contentText", cmpEqual, "Config");
  Delay(2000);
  SocName = Aliases.browser.Page_AddEdit_Button.SocPath.SocName_Field.textContent;
  
}

function New_eCon_Quote(){
  
//opportunity_name="GREEN VALLEY RANCH RESORT SPA CASINO -1626075358- 07/10/2025";  
 var Quote_nav=Aliases.browser.Page_QuoteNavigation;
//var econ_config=Aliases.browser.Page_EconMainConfiguration;
 //var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
  //       "Quote/list?filterName=__Recent";
  //SocName= "SOC BELLAGIO LAS VEGAS -8518493723- 07/28/2025";
  Browsers.Item(btEdge).Navigate(Project.Variables.recentquoteurl);
  Quote_nav.SearchThisList_SearchField.SetText(SocName);
  Delay(2000);
  Quote_nav.SearchThisList_SearchField.Keys("[Enter]");
  Delay(2000);
  Quote_nav.Searched_Node.Click();
  Delay(3000);

//Opportunity creation Validation
//DynamicWait["dynamic_wait"](search_opportunity.Opportunity_Node, 10000);
 Delay(5000);
 Aliases.browser.Page_AddEdit_Button.QuoteDoc_Button.Click();
 Delay(5000);
//Storing econ quote name
 Econname=Aliases.browser.page_NewEconQuote.econ.QuoteName_TextField.Text;

//Filling quote record type
Aliases.browser.page_NewEconQuote.econ.QuoteRecordType_Selectlist.Keys("Outright - Sale New");
//Log.Message("Quote Record Type Field has enterd as " +Config[0])

Delay(5000);
Aliases.browser.page_NewEconQuote.econ.Next_Button.Click();
Delay(3000);
//Aliases.browser.page_NewEconQuote.econ.Next_Button.Click();
//Delay(2000);
//econ.QuoteRecordType_Selectlist.Click();
//Delay(2000);
//
////Filling the Quote record type
//econ.QuoteRecordType_Selectlist.Keys("Class III - Delivery Address - "+Config[1]+", USA");
//Log.Message("Quote Record Type Field has enterd as " +Config[1])
//Delay(2000);
//econ.QuoteRecordType_Selectlist.Keys("[Enter]");
//Delay(2000);
//econ.Next_Button.Click();;
//Delay(2000);
//econ.Next_Button.Click();;
//Delay(2000);
////Close the browser
Sys.Browser("edge").Close();
Log.Message("Browser has closed");

}

function econ_configuration_navigation(){
  
var econ_nav=Aliases.browser.Page_QuoteNavigation;
var econ_config=Aliases.browser.Page_EconMainConfiguration;
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
//         "Quote/list?filterName=__Recent";
         
Econname ="ECON BELLAGIO LAS VEGAS -7683337953- 08/05/2025";         
//Running browser in insecured way
Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";           
         
Browsers.Item(btEdge).Run(Project.Variables.SFUrl);

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
//dynamic wait added for search field

DynamicWait["dynamic_wait"](Aliases.browser.Page_SFAppSearch_AccountSearch.AppLauncher_Button, 20000);
Aliases.browser.Page_SFAppSearch_AccountSearch.AppLauncher_Button.Click();

Delay(3000);
//var myPage =  myBrowser.Page("*").URL;
var recentUrl = "https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Quote/list?filterName=__Recent"
Aliases.browser.ToUrl(recentUrl);


Delay(3000);
econ_nav.SearchThisList_SearchField.SetText(Econname);

Delay(2000);

econ_nav.SearchThisList_SearchField.Keys("[Enter]");

//eCon quote creation Validation
Delay(2000);
//eCon creation Validation
//DynamicWait["dynamic_wait"](econ_nav.SearchedEcon_Node, 10000);
//aqObject.CheckProperty(Aliases.browser.Page_QuoteNavigation.Searched_Node, "ContentText", cmpContains, Econname);
Log.Message("eCon found and text matches: " + quotename);

//Searching eCone quote
econ_nav.Searched_Node.Click();

Delay(2000);
Project.Variables.quoteurl=Sys.Browser().Page("*").URL;
//Project.Variables.quoteurl=urc;

Delay(2000);
////////////////Aliases.browser.Page_AddEdit_Button.articlePath.Validated_Link.Click();
////////////////Delay(2000);
////////////////Aliases.browser.Page_AddEdit_Button.articlePath.MarkStatusAsComplete_Button.Click();
Delay(3000);
//Clicking on Configuration quote link
econ_config.ConfigureQuote_Link.Click();

DynamicWait["dynamic_wait"](econ_config.Configuration_Link, 50000);
//Delay(50000);
//Navigate on Configuration link 
//econ_config.Configuration_Link.Click();
//Log.Message("Clicked on Configuration Link");
}

function getSOC_Lines(Config){
  var eConConfig = Aliases.browser.Page_EconMainConfiguration;
  eConConfig.GetSocLines_Button.Click();
  DynamicWait["dynamic_wait"](eConConfig.Configuration_Link, 50000);
  //Delay(50000);
  eConConfig.Configuration_Link.Click()
  Delay(3000);
  Aliases.browser.Page_EconAdvancedConfiguration_II.ImportSFLine_Checkbox.Click();
  DynamicWait["dynamic_wait"](eConConfig.LicenseType_Field, 50000);
  //Delay(50000);
 
  aqObject.CheckProperty(eConConfig.LicenseType_Field, "Text", cmpEqual, Config[4]);
  Delay(1000);
//  aqObject.CheckProperty(eConConfig.GameTheme_Field, "Text", cmpEqual, Config[5]);
//  Delay(1000);
//  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.Game_Title, "Text", cmpEqual, Config[6]);
//  Delay(1000);
  //aqObject.CheckProperty(eConConfig.ProgressiveType_Field, "Text", cmpEqual, Config[9]);
  Delay(1000);
}
//Creation of main configuration
function econ_mainconfiguration(Config){
var econ_config=Aliases.browser.Page_EconMainConfiguration;  
var MainConfiguration=Aliases.browser.Page_EconMainConfiguration;
// Filling Selling Model Field Name

Aliases.browser.ToUrl(Project.Variables.quoteurl);
Delay(2000);
econ_config.ConfigureQuote_Link.Click();
DynamicWait["dynamic_wait"](econ_config.Configuration_Link, 50000);
Delay(2000);
econ_config.Configuration_Link.Click();
Log.Message("Clicked on Configuration Link");
MainConfiguration.SellingModel_Field.SetText(Config[0]);
Log.Message("Selling Model Field has enterd as " +Config[0]);
Delay(2000);
MainConfiguration.SellingModel_Field.Keys("[Enter]");
Delay(2000);
// Filling Selling Model Type Field Name
MainConfiguration.Type_Field.Keys(Config[1]);
Log.Message("Type Field Name as "+Config[1]);
Delay(2000);
MainConfiguration.Type_Field.Keys("[Enter]");

Delay(5000);
//Filling Quantity
MainConfiguration.Quantity_Field.SetText(Config[2]);
Delay(2000);
MainConfiguration.Quantity_Field.Keys("[Enter]");
Log.Message("Quantity Field has enterd as "+Config[2]);
Delay(2000);
// Filling License Type Field Name
MainConfiguration.LicenseType_Field.SetText(Config[3]);
Log.Message("License Type Field has enterd as "+Config[3]);
Delay(2000);
MainConfiguration.LicenseType_Field.Keys("[Enter]");

// Filling Progressive Type Field Name
MainConfiguration.ProgressiveType_Field.SetText(Config[4]);
Log.Message("Progressive Type Field has enterd as "+Config[4]);
Delay(2000);
MainConfiguration.ProgressiveType_Field.Keys("[Enter]");
Delay(2000);

// Filling Game Theme Field Name
MainConfiguration.GameTheme_Field.Click();
Delay(1000);
MainConfiguration.GameTheme_Field.SetText(Config[5]);
Log.Message("Game Theme Field has enterd as "+Config[5]);
Delay(4000);
MainConfiguration.GameTheme_Field.Keys("[Enter]");
Delay(5000);

// Filling Model(PGD) Field Name
MainConfiguration.Model_PGD.SetText(Config[6]);
Log.Message("Model(PGD) Field has enterd as " +Config[6]);
Delay(2000);
MainConfiguration.Model_PGD.Keys("[Enter]");
//Delay(20000);
DynamicWait["dynamic_wait"](MainConfiguration.GameTitle_Field, 20000);

// Filling Game Title Field Name
MainConfiguration.GameTitle_Field.SetText(Config[7]);
Log.Message("Game Title Field has enterd as " +Config[6]);
Delay(2000);
MainConfiguration.GameTitle_Field.Keys("[Enter]");
Delay(10000);
//DynamicWait["dynamic_wait"](MainConfiguration.Denom_Field, 10000);

// Filling Denom Field Name
MainConfiguration.Denom_Field.SetText("."+Config[8].split(".")[1]);
Delay(2000);
 MainConfiguration.Denom_Field.Keys("[Enter]");
Delay(5000);

// Filling Topper Field Name
MainConfiguration.Topper_Field.SetText(Config[9]);
Log.Message("Game Topper Field has enterd as " +Config[9]);
Delay(5000);
MainConfiguration.Topper_Field.Keys("[Enter]");
Delay(2000);

// Filling Button Panel Field Name
MainConfiguration.ButtonPanel_Field.SetText(Config[10]);
Log.Message("Button Panel Field has enterd as " +Config[10]);
Delay(2000);
MainConfiguration.ButtonPanel_Field.Keys("[Enter]");
Delay(2000);

// Filling Bill Accepted Field Name
MainConfiguration.BillAcceptor_Field.SetText(Config[11]);
Delay(2000);
MainConfiguration.BillAcceptor_Field.Keys("[Enter]");
Delay(2000);
MainConfiguration.BillsAccepted_Field.SetText(Config[11]);
Log.Message("Bills Accepted Field has enterd as " +Config[11]);
Delay(2000);
MainConfiguration.BillsAccepted_Field.Keys("[Enter]");
Delay(3000);
}

//Function for Advanced configurations for eCon
function econ_advancedconfiguration(Config){

var AdvancedConfiguration=Aliases.browser.Page_EconAdvancedConfiguration_I;
var AdvancedConfigurationPluz=Aliases.browser.Page_EconAdvancedConfiguration_II;
var AdvancedConfigurationPluz2=Aliases.browser.Page_EconMainConfiguration;

AdvancedConfiguration.linkAdvanced.Click();
Delay(2000);

AdvancedConfiguration.Model_Field.SetText(Config[0]);
Log.Message("Model Field has enterd as " +Config[0]);
Delay(2000);
AdvancedConfiguration.Model_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Cabinet_Field.SetText(Config[1]);
Log.Message("Cabinet Field has enterd as " +Config[1]);
Delay(2000);
AdvancedConfiguration.Cabinet_Field.Keys("[Enter]");
Delay(2000);

if(Config[2]=="No" || Config[2]=="NO"||Config[2]=="no"){
AdvancedConfiguration.TBXLineItem_Checkbox.Click();
}

Delay(2000);

AdvancedConfiguration.TopBox_Field.SetText(Config[3]);
Log.Message("TopBox Field has enterd as " +Config[3]);
Delay(2000);
AdvancedConfiguration.TopBox_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.SPC_Field.SetText(Config[4]);
Log.Message("SPC Field has enterd as " +Config[4]);
Delay(2000);
AdvancedConfiguration.SPC_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Mainboard_Field.SetText(Config[5]);
Log.Message("Advanced Configuration Field has enterd as " +Config[5]);
Delay(2000);
AdvancedConfiguration.Mainboard_Field.Keys("[Enter]");
Delay(2000);

//if(Config[6]!="No" || Config[6]!="NO"||Config[6]!="no"){
//AdvancedConfiguration.TPPLineItem_Checkbox.Click();
//}

Delay(2000);

AdvancedConfiguration.Topper_Field.SetText(Config[7]);
Log.Message("Topper Field has enterd as " +Config[7]);
Delay(2000);
AdvancedConfiguration.Topper_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.TopBoxDisplay_Field.SetText(Config[8]);
Log.Message("TopBox Display Field has enterd as " +Config[8]);
Delay(2000);
AdvancedConfiguration.TopBoxDisplay_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Candle_Field.SetText(Config[9]);
Log.Message("Candle Field has enterd as " +Config[9]);
Delay(2000);
AdvancedConfiguration.Candle_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Conditional_Field.SetText(Config[10]);
Log.Message("Conditional Field has enterd as " +Config[10]);
Delay(2000);
AdvancedConfiguration.Conditional_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.MainMonitorDisplay_Field.SetText(Config[11]);
Log.Message("Main Monitor Display Field has enterd as " +Config[11]);
Delay(2000);
AdvancedConfiguration.MainMonitorDisplay_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfigurationPluz.Printer_Field.SetText(Config[12]);
Log.Message("Printer Field has enterd as " +Config[12]);
Delay(2000);
AdvancedConfigurationPluz.Printer_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.TicketValidation_Field.SetText(Config[13]);
Log.Message("Ticket Validation Field has enterd as " +Config[13]);
Delay(2000);
AdvancedConfigurationPluz.TicketValidation_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.BillAcceptor_Field.SetText(Config[14]);
Log.Message("Bill Acceptor Field has enterd as " +Config[14]);
Delay(2000);
AdvancedConfigurationPluz.BillAcceptor_Field.Keys("[Enter]");
Delay(2000);

if(Config[15]=="Yes" || Config[15]=="YES"||Config[15]=="yes"){
  AdvancedConfigurationPluz.RunCP_Checkbox.Click();
}

AdvancedConfigurationPluz.Base_Field.SetText(Config[16]);
Log.Message("Base Field has enterd as " +Config[16]);
Delay(2000);
AdvancedConfigurationPluz.Base_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.OS_Field.SetText(Config[17]);
Log.Message("OS Field has enterd as " +Config[17]);
Delay(2000);
AdvancedConfigurationPluz.OS_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.Bootloader_Field.SetText(Config[18]);
Log.Message("Bootloader Field has enterd as " +Config[18]);
Delay(2000);
AdvancedConfigurationPluz.Bootloader_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.Setchip_Field.SetText(Config[19]);
Log.Message("Setchip Field has enterd as " +Config[19]);
Delay(2000);
AdvancedConfigurationPluz.Setchip_Field.Keys("[Enter]");
Delay(2000);
//AdvancedConfigurationPluz.ProgressiveTrigger_Field.SetText(Config[20]);
//Delay(2000);
//AdvancedConfigurationPluz.ProgressiveTrigger_Field.Keys("[Enter]");
//Delay(2000);
AdvancedConfigurationPluz.Platform_Field.SetText(Config[20]);
Log.Message("Platform Field has enterd as " +Config[20]);
Delay(2000);
AdvancedConfigurationPluz.Platform_Field.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconAdvancedConfiguration_I.CompleteEdit_Button.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.Quote3_textnode.Click();
Delay(2000);

Aliases.browser.Page_EconMainConfiguration.RunRules_Button.Click();
Delay(2000);
//DynamicWait["dynamic_wait"](Aliases.browser.Page_EconMainConfiguration.RulesExecuted_Checkbox,30000);
Aliases.browser.Page_EconMainConfiguration.RulesExecuted_Checkbox.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.ComplianceCheck_Button.Click();
Delay(10000);
//================================
 var bool=0;
 while(bool<=30){
   if(equal(Aliases.browser.Page_EconMainConfiguration.ComplianceCheck_Button.VisibleOnScreen,false)){
     break;
   } else{
     Delay(1000);
     bool=bool+1;
   }
   Log.Message(Aliases.browser.Page_EconMainConfiguration.ComplianceCheck_Button.VisibleOnScreen);
  }
  Delay(2000);
//=================================  
if(aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]"), "contentText", cmpContains, "Pass")){
AdvancedConfigurationPluz2.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz2.SaveAndExit_Button.Click();
Delay(2000);
}else{
  AdvancedConfigurationPluz2.Keys("[Enter]");
  Log.Error("Shared econ configuration is not compliance adhered.")
}
//Close the browser
Sys.Browser("edge").Close();
Log.Message("Browser has closed")
}

//eCon Approval
function econ_approval(){
  
var econConfig = Aliases.browser.Page_EconMainConfiguration;
         
Browsers.Item(btEdge).Run(Project.Variables.SFUrl);
Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
Delay(5000);
Aliases.browser.ToUrl(Project.Variables.quoteurl);
quote_number= Aliases.browser.Page_EconAdvancedConfiguration_II.QuoteNumber_Field.textContent;
Log.Message("quote_number as "+quote_number);

econConfig.buttonSubmit.Click();
Delay(2000);
econConfig.ApprovalText_Field.Keys("Please approve");
Delay(2000);
econConfig.buttonSubmit2.Click();
Delay(2000);
Browsers.Item(btEdge).Navigate(Sys.Browser().Page("*").URL);
Delay(2000);
econConfig.Relatedlist_link.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.Relatedlist_link.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
Delay(10000);
econConfig.Approve2_Button.Click();
Delay(2000);
econConfig.ApprovalText_Field.Keys("approved");
Delay(2000);
econConfig.buttonSubmit2.Click();
Delay(2000);
econConfig.CaseNumber.Click();
Delay(5000);
Project.Variables.caseurl=Sys.Browser().Page("*").URL;
Sys.Browser("edge").Close();
}

//function for QC check
function caseQC(){
var caseSF = Aliases.browser.page_CaseSalesforce;
Aliases.browser.ToUrl(Project.Variables.caseurl);
//Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
//Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
caseSF.Edit_Button.Click();
Delay(2000);
caseSF.Status_Field.Click();
Delay(2000);
caseSF.Status_Field.Keys("QC - Complete");
Delay(2000);
caseSF.Status_Field.Keys("[Enter]");
Delay(2000);
caseSF.Saveedit_Button.Click();
Delay(5000);
//Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.linkWindow.textnode2.Click();
//Delay(2000);
Sys.Browser("edge").Close();

}

//function for D65 migration
function econ_D65migration(){
var econ_migrate=Aliases.browser.Page_EconMainConfiguration;

Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";
                                              
Browsers.Item(btEdge).Run(Project.Variables.quoteurl);

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
//Delay(2000);
DynamicWait["dynamic_wait"](econ_migrate.ConfigureQuote_Link,30000);
econ_migrate.ConfigureQuote_Link.Click();
Delay(50000);
//DynamicWait["dynamic_wait"](econ_migrate.SendToD365_Button,60000);

if(econ_migrate.OK_Button.Exists){
econ_migrate.OK_Button.Click();
Delay(2000);
econ_migrate.RunRules_Button.Click();
Delay(10000);
}
econ_migrate.SendToD365_Button.Click();
Delay(15000);
Sys.Browser(btEdge).Close();
}


function Navigate_to_RFC(){
  
var Quote_nav=Aliases.browser.Page_QuoteNavigation;
var addButton =Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.Add_button;

//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
//         "Quote/list?filterName=__Recent";
//quotename = "RFC BELLAGIO LAS VEGAS -1040525363- 07/29/2025";
Browsers.Item(btEdge).Run(Project.Variables.recentquoteurl);
Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

Quote_nav.SearchThisList_SearchField.SetText(quotename);
Delay(2000);
Quote_nav.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);
Quote_nav.Searched_Node.Click();
Delay(3000);
Aliases.browser.Page_AddEdit_Button.AddEditLine_Button.Click();
Delay(2000);
if(addButton.Exists){
  Log.Error("Quote has not been yet send to D365");}
else{
  Log.Message("Add button is not visible as expected")
}

}


  

  
 
  

  

   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  