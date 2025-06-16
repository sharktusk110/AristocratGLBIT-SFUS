//USEUNIT AccountCreation_Name
//USEUNIT DataRead

function Create_opportunity()
{
  
  
var LoginDataMap=dataReader("SF_opportunity"); //Sheetname
var Type=LoginDataMap["B02"]["Type"];
var GamingClassification=LoginDataMap["B02"]["GamingClassification"];
var LeadSource=LoginDataMap["B02"]["LeadSource"];
var MarketSegment=LoginDataMap["B02"]["MarketSegment"];
var AccountName=LoginDataMap["B02"]["AccountName"];



Delay(2000);
Aliases.browser.PreAccountApproval_Tabs.Home_Panel.NewOpportunity_button.Click()


Delay(2000);
 var randomNumber = Math.floor(Math.random() * 1000) + 1;
 var AccountName1  = AccountName + "-" + "Test" + randomNumber  ;
 Project.Variables.OpportunityName = AccountName1 ;

Aliases.browser.Opportunity_Panel.OpportunityName_Panel.OpportunityName_Field.SetText(AccountName1);
Aliases.browser.Opportunity_Panel.OpportunityName_Panel.GamingClassification_List.Click();
ListSelection (GamingClassification); //"Class III"
//Aliases.browser.Opportunity_Panel.OpportunityName_Panel.GamingClassification_List.keys("Class III");
//KeyboardOperations("ENTER",1);
Aliases.browser.Opportunity_Panel.OpportunityName_Panel.Type_List.Click();
ListSelection (Type)//"Regular"
Aliases.browser.Opportunity_Panel.OpportunityName_Panel.MarketSegment_List.Click();
ListSelection (MarketSegment) //"Class III"
Aliases.browser.Opportunity_Panel.OpportunityName_Panel.LeadSource_List.Click();
ListSelection (LeadSource) //"Customer"
NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.Click();

}


function Opportunity_Success_Validation()
{
  
  aqObject.CheckProperty(Aliases.browser.Page_Login.FindElement("//div[contains(@class, 'slds-theme--success')]"), "Enabled", cmpEqual, true);
}


 

function OpenAccount_Page()
{
  //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page_Login.GlobalSearch_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Account_Tab' control.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.UserLogedIn_Panel.SearchAccount_Tab.Account_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text Project.Variables.ParentAccount1 in the 'GlobalSearch_Field' text editor.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.UserLogedIn_Panel.GlobalSearch_Field.SetText(Project.Variables.ParentAccount1);
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'SelectAccount_Tab' control.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.UserLogedIn_Panel.SelectAccount_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
}