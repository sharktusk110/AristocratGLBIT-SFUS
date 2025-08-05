//USEUNIT AccountCreation_Name
//USEUNIT DataRead


function Create_opportunity(TestCaseID)
{
  //TestCaseID="B04" 
  var LoginDataMap=dataReader("SF_opportunity"); //Sheetname
  var Type=LoginDataMap[TestCaseID]["Type"];
  var GamingClassification=LoginDataMap[TestCaseID]["GamingClassification"];
  var LeadSource=LoginDataMap[TestCaseID]["LeadSource"];
  var MarketSegment=LoginDataMap[TestCaseID]["MarketSegment"];
  var AccountName=LoginDataMap[TestCaseID]["AccountName"];

  Delay(2000);
  Aliases.browser.Page__PreAccountApproval.Home__Panel.NewOpportunity__button.Click();

  Delay(2000);
  var randomNumber = Math.floor(Math.random() * 1000) + 1;
  var AccountName1  = AccountName + "-" + "Test" + randomNumber  ;
  Project.Variables.OpportunityName = AccountName1 ;
  
  Log.Message("AccountName");
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.OpportunityName__Field.SetText(AccountName1);
  
  Log.Message("GamingClassification");
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.GamingClassification__List.Click();
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.GamingClassification__List.FindElement("//li[.='"+GamingClassification+"']").Click();
  //ListSelection (GamingClassification); //"Class III"
  
  Delay(1000);
  Log.Message("Type");
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.Type__List.Click();
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.Type__List.FindElement("//li[.='"+Type+"']").Click();
 // ListSelection (Type)//"Regular"
  
 Delay(1000);
  Log.Message("MarketSegment");
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.MarketSegment__List.Click();
  LLPlayer.MouseMove(100, 100,100);
   //Aliases.browser.Page__Opportunity.OpportunityName__Panel.MarketSegment__List.FindElement("//li[.='"+MarketSegment+"']").Click();
  ListSelection (MarketSegment) //"Class III"
  
  Delay(1000);
  Log.Message("LeadSource");
  Aliases.browser.Page__Opportunity.OpportunityName__Panel.LeadSource__List.Click();
   Aliases.browser.Page__Opportunity.OpportunityName__Panel.LeadSource__List.FindElement("//li[.='"+LeadSource+"']").Click();
  //ListSelection (LeadSource) //"Customer"
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Save__Button.Click();
  Delay(8000);
}


function Opportunity_Success_Validation()
{
  Log.Message("Validation needs to be done inorder to check whether opportunity getting created successfully .")
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]"), "Enabled", cmpEqual, true);
}


 

function OpenAccount_Page()
{
  Delay(2000);
  //Clicks the 'GlobalSearch_Tab' control.
 // Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Clicks the 'Account_Tab' control.
  //Aliases.browser.Page__AccountCreation.NewAccount__Panel.Account__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text Project.Variables.ParentAccount1 in the 'GlobalSearch_Field' text editor.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys(Project.Variables.ParentAccount);
  //Delays the test execution for the specified time period.

  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
 
  Delay(2000);
  
   Aliases.browser.Page__PostAccountApproval.NewOpportunity__Tab.Click();
   Delay(2000);
 
  //Clicks the 'SelectAccount_Tab' control.
  //Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.SelectAccount__Tab.Click();
  
  //Delays the test execution for the specified time period.
  //Delay(2000);
}