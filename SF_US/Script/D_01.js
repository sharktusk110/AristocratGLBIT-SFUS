//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login



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


function Opportunity_Creation(Config) {
  
var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
var opportunity=Aliases.browser.Page_NewOpportunityCreation;

   
//Navigating for SF Home and selecting Aristocrat app for account related opportunity creation
 Browsers.Item(btEdge).Run("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/page/home");
 Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
 Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
 Delay(2000);
 app.AppLauncher_Button.Click();
 app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
 Delay(1000)
 Sys.Desktop.Keys("[down]")
 Delay(500)
 app.SearchAppsAndItems_SearchField.Keys("[Enter]");
 
 //Navigating to account section
 Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
 
 //Searching account for opportunity creation
 account.SearchThisList_SearchField.SetText(Config[0]);
 Log.Message("Account Name has enterd as " +Config[0])
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
  
//opportunity_name="WHEELING ISLAND RACETRACK AND GAMING CENTER - CHANGEME - 07/09/2025";  
var search_opportunity=Aliases.browser.Page_SearchOpportunity;
var RFC =Aliases.browser.page_RFCCreation.RFC;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning"+
         "/o/Opportunity/list?filterName=__Recent" ;

Browsers.Item(btEdge).Navigate(url) ;
search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);

//Opportunity creation Validation
//DynamicWait["dynamic_wait"](search_opportunity.Opportunity_Node.Exists, 10000);
//aqObject.CheckProperty(Aliases.browser.Page_SearchOpportunity.textnode, "title", cmpContains, opportunity_name);
Log.Message("Opportunity found and text matches: " + opportunity_name);

//Click on the created opportunity
search_opportunity.Opportunity_Node.Click();
Delay(5000);
Project.Variables.RFCurl=Sys.Browser().Page("*").URL;
//Click on RFC creation button
RFC.NewRFCQuote_Button.Click();
Delay(5000);
quotename= RFC.RFCQuoteName_Field.contentText;
Delay(2000);
RFC.RFCSave_Button.Click();
Delay(5000);
}

function Quote_navigation(){
  
var Quote_nav=Aliases.browser.Page_QuoteNavigation;
//var econ_config=Aliases.browser.Page_EconMainConfiguration;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
         "Quote/list?filterName=__Recent";

//quotename="WHEELING ISLAND RACETRACK AND GAMING CENTER -6262709026- 07/08/2025"; 
//Running browser in insecured way
//Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";

Browsers.Item(btEdge).Run(url);
//Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
//Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

Quote_nav.SearchThisList_SearchField.SetText(quotename);
Delay(2000);
Quote_nav.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);
Quote_nav.Searched_Node.Click();
Delay(3000);
}

function AddLineItem_Cabinet(Config){
  
//var additemurl = https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000bo97CAA/view


//quotename="RFC WHEELING ISLAND RACETRACK AND GAMING CENTER -6098433360- 07/08/2025"; 
//Running browser in insecured way
//Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                  "PS118692\\Desktop\\path\" --disable-site-isolation-trials";
//Browsers.Item(btEdge).Run(Project.Variables.RFCurl);
//Browsers.Item(btEdge).Run(url);
//Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
//Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

var Add_item = Aliases.browser.Page_AddEdit_Button;
var Configuration= Aliases.browser.Page_AddEdit_Button.AddEdit_Frame.Configuration_Panel;

 
 Add_item.AddEditLine_Button.Click();
 Delay(3000);
 Add_item.AddEdit_Frame.Add_button.Click()
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
// value = Config[3]
// var selectPromotion = Add_it01t7F000007FxIEQA0em.sectionConfigure.Promotion;
// selectPromotion.value.Click()
// Log.Message("Selected value: " + selectElement.label);
// Add_item.sectionConfigure.License.Click();
// var selectLicense = Add_item.sectionConfigure.License;
// selectPromotion.value = "";
// selectPromotion.value.Click();
 Configuration.License_Field.Keys(Config[4]);
 Log.Message("License Field "+Config[4]);
 Delay(2000);
// Configuration.License_Field.Keys("[Enter]");
// Delay(2000);
 Configuration.GameTheme_Field.Keys(Config[5]);
 Delay(2000);
 Configuration.GameTitle_Field.Keys(Config[6]);
// Delay(2000);
// Add_item.Scroll.Keys("[Down]");
 Delay(2000);
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
 Configuration.AftEft_Field.Keys(Config[18]);
 Log.Message("AftEft Field value as "+Config[18]);
 Delay(2000);
 Configuration.Var_Field.Keys(Config[19]);
 Log.Message("Var Field value as "+Config[19]);
 Delay(2000);
// Add_item.Configuration_Panel.Var.SetText("09");
// Delay(2000);
// Configuration.Var_Field.Keys(Config[20]);
// Log.Message("Var Field value as "+Config[19]);
 Delay(2000);
 Configuration.CandleColor_Field.Keys(Config[20]);
 Log.Message("CandleColor Field value as "+Config[20]);
 Delay(2000);
 Configuration.TicketValidation_Field.Keys(Config[21]);
 Log.Message("TicketValidation Field value as "+Config[21]);
 Delay(2000);
 CabinetTotalPrice= Add_item.AddEdit_Frame.Cabinet_Price.contentText;
 Log.Message("Cabinet Grand Total Price is "+CabinetTotalPrice);
 Delay(2000);
 Add_item.AddEdit_Frame.Save_Button.Click();
 Delay(2000);
}

function AddLineItemController(Config){
  
//Browsers.Item(btEdge).Run(Project.Variables.quoteurl);
////Browsers.Item(btEdge).Run(url);
//Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
  
 var Add_item = Aliases.browser.Page_AddEdit_Button;
 
// Add_item.AddEditLine_Button.Click();
// Delay(3000);
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
// Add_item.Cabinet_Panel.SelectFamily_Field.Click();
// Delay(2000);
// Add_item.FindElement("//span[@title='"+Config[0]+"']").Click();
// Log.Message("Cabinet panel value has enterd as " +Config[0])
// Delay(2000);
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
 Add_item.AddEdit_Frame.Configuration_Panel.Rebate_Field.SetText(2000)
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
 var CCPrice=CabinetTotalPrice+ControllerTotalPrice;
 totalPrice = Add_item.Total_Price.contentText;
 var expectedPrice = "$" + (+CCPrice.replace(/[\$,]/g, "") - 2000).toLocaleString();
 if(totalPrice === expectedPrice){
   Log.Message("Total Price is "+ totalPrice +" and have been validate after rebatre");}
 else {
   Log.Warning("Price mismatch! Expected: " +  expectedPrice + ", but got: " + totalPrice);
   
}}
 
function Legal_Instructions(Config){
 //var newTemplate= Aliases.browser.page_AdditionalLegalInstruction.QuoteDocHeader_Field.NewTemplateData;
 var AdditionalLegalTab = Aliases.browser.page_AdditionalLegalInstruction
 var AddEdit =  Aliases.browser.Page_AddEdit_Button;
 var HeadertemplateName = "Test_Header_"+Math.floor(Math.random() * 10000);
 var FootertemplateName = "Test_Footer_"+Math.floor(Math.random() * 10000);
 var Instuction = "D Series Test";
 
 Sys.Desktop.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
 Delay(2000);
 AddEdit.AdditionalLegal_Button.Click();
 Delay(2000);
 AddEdit.SetTextAdditionalLegal_Field.Keys(Instuction);
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
 AdditionalLegalTab.TemplateFrame.Save_Button.Click();
 Delay(2000);
 //Footer update
 AddEdit.QuoteDocFooter_Field.Keys("New Template Data");
 Delay(2000);
 //AdditionalLegalTab.QuoteDocFooter_Field.FindElement("//span[@title='New Template Data']").Click();
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
 AdditionalLegalTab.TemplateFrame.Save_Button.Click();
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();

}
 
function Payment_Update(){
 var totalPrice = Aliases.browser.Page_AddEdit_Button.Total_Price.contentText;
 var AddEdit =  Aliases.browser.Page_AddEdit_Button;
 var ApprovalButton = Aliases.browser.Page_AddEdit_Button.ApprovalSubmit_Button;
 
if (ApprovalButton.Exists) {
  if (ApprovalButton.VisibleOnScreen) {
    Log.Error("Approval button should not be visible without updating payment information");
  } else {
    Log.Message("Approval button is not visible as expected");
  }
} else {
  Log.Warning("Approval button does not exist in the current context.");
}
 
 AddEdit.EditPaymentTerms_Button.Click();
 Delay(2000);
 AddEdit.PaymentTerms_Button.Keys("12 Equal Monthly Payments");
 Delay(2000);
 AddEdit.PaymentTerms_Button.FindElement("//span[@title='12 Equal Monthly Payments']").Click();
 Delay(2000);
 //AddEdit.PaymentTerms_Button.Keys("[Enter]");
 //Delay(2000);
 AddEdit.LeaseTerm_button.Keys("12 Months");
 Delay(2000);
 AddEdit.LeaseTerm_button.Keys("[Enter]");
 Delay(2000);
 AddEdit.PaymentTermsChangeReason_Field.Keys("Please Update!");
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();
 Delay(3000);
 MonthlyPaymentAmount = AddEdit.MonthlyPayment_Field.contentText;
 Log.Message("Monthly Payment Amount as "+MonthlyPaymentAmount);
// Delay(2000);
 var EqualMonth= totalPrice/12;
 Log.Message("Equal Month Payments as"+EqualMonth);
 if(parseFloat(EqualMonth)===parseFloat(MonthlyPaymentAmount)){
 Log.Message("Monthly payment is valid");
 
// if(EqualMonth==="12 Months"){
// Monthlyequal = totalPrice/12;
// Log.Message("Monthly equal as "+Monthlyequal);
  }
// else if(EqualMonth==="24 Months"){
// Monthlyequal = totalPrice/24;
//  }
// else if(EqualMonth==="36 Months"){
// Monthlyequal = totalPrice/36;
//  }
// else if(EqualMonth==="48 Months"){
// Monthlyequal = totalPrice/48;
//  }
 else {
    Log.Message("Unknown payment term: " + EqualMonth);
    
  }
 Delay(2000);
 TotalFinaceCost= AddEdit.TotalFinaceCost_Field.contentText;
 Log.Message("Total Finace Cost as "+TotalFinaceCost);
 Delay(2000);
 
 if (ApprovalButton.VisibleOnScreen) {
  Log.Message("Approval button is visible");
  ApprovalButton.Click();
  Delay(2000);
  AddEdit.Comments_Field.Keys("Please Approve");
  AddEdit.ApprovalSubmit2_Button.Click(); 
}
 else{
   Log.Warning("Approval button is not visible");
}
 
if(AddEdit.TaxMustBeCalculated_frame.VisibleOnScreen){
   Log.Message("Tax must be Calculate");
   AddEdit.Close_Button.Click();
   }
 else{
   Tax = AddEdit.CalculatedTax_Price.contentText;
   Log.Message("Tax calculated as "+Tax);
 }
}

function Tax_Calculation(){
  var AddEdit = Aliases.browser.Page_AddEdit_Button
  
 Delay(2000);
 AddEdit.ShowMoreActions_Button.Click();
 Delay(1000);
 AddEdit.FindElement("//a[.='Tax Calculator']").Click();
 Tax = AddEdit.CalculatedTax_Price.contentText;
 Log.Message("Tax calculated as "+Tax);
 Delay(2000);
 AddEdit.SaveEdit_Button.Click();
 Delay(1000);
}



function Missing_fee(){
  
 var Add_item = Aliases.browser.Page_AddEdit_Button;
 var ApprovalButton = Aliases.browser.Page_AddEdit_Button.ApprovalSubmit_Button;
 
  if (ApprovalButton.VisibleOnScreen) {
  Log.Message("Approval button is not visible as expected");
  ApprovalButton.Click();
  Delay(2000);
  AddEdit.Comments_Field.Keys("Please Approve");
  AddEdit.ApprovalSubmit2_Button.Click(); 
  Delay(2000);
 }
 else{
   Log.Warning("Approval button is not visible");
   
   }
 
  
}
  

   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  