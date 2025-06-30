function Openconfigopportunity()

{


 //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
//Clicks the 'Opportunity_Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalOpportunities__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
//Delays the test execution for the specified time period.
   Delay(2000);
   
  //Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(Project.Variables.OpportunityName);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Enters '[Enter]' in the 'GlobalSearch_Bar' object.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  
  //Clicks the 'NewOpportunity_Tab' link.
  Aliases.browser.Page__PostAccountApproval.NewOpportunity__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'TypeEdit_Button' button.
 
  //Delays the test execution for the specified time period.
 // Delay(2000);
 
 }
 

 

function Create_RFC_Quote()
{
  //Clicks the 'buttonOpportunityCreateQuote' button.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.NewOpportunity__button.ClickButton();
  
  // Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//div[.='Sync Now']") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[.='Sync Now']"), "Enabled", cmpEqual, true);
  Delay(2000);
  Log.Message("validation: Line items are in sync");
  
  //Clicks the 'Save__Button' button.
  Aliases.browser.Page__Opportunity.RFCSave_Button.ClickButton();
  
  // Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]"), "Enabled", cmpEqual, true);
  Log.Message("validation: RFC quote created successfully");

  //Clicks the 'RFCQuote_Button' control.
  //Aliases.browser.Page__PreAccountApproval.Home__Panel.Quote_Panel.linkRfcBellagioLasVegasTest34.RFCQuote_Button.Click();

 //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page__Login.GlobalSearch_Tab.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.Quote__Button.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Click();
  //Clicks the 'SelectAccount__Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.SelectAccount__Tab.Click();
  
}

function RFC_Quote_Update()
{
  //Clicks the 'PaymentTerms__Button' button.
  Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel.PaymentTerms__Panel.PaymentTerms__Button.ClickButton();
  
   let textNode = Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel;
  textNode.PaymentTerms__Panel.buttonPaymentTerms2.ClickButton();
  //Clicks the 'Monthly12Payments__Tab' control.
  Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel.PaymentTerms__Panel.Monthly12Payments__Tab.Click();
  //Clicks the 'LeaseTerm__Tab' button.
  Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel.LeaseTerm__Panel.LeaseTerm__Tab.ClickButton();
  textNode.LeaseTerm__Panel.buttonLeaseTerm2.ClickButton();
  //Clicks the 'Months12__Tab' control.
  Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel.LeaseTerm__Panel.Months12__Tab.Click();
  //Clicks the 'TermReason__Tab' control.
  //Aliases.browser.Page__PostAccountApproval.D365CompanyCode__Field.TermReason__Tab.Click();
  //Enters Project.Variables.OpportunityName in the 'TermReason__Tab' object.
  Aliases.browser.Page__PostAccountApproval.D365CompanyCode__Field.TermReason__Tab.Keys(Project.Variables.OpportunityName);
  //Clicks the 'Save__button' button.
  Aliases.browser.Page__AccountCreation.Save__button.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//lightning-formatted-text[.='USD 1,250.00']") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//lightning-formatted-text[.='USD 1,250.00']"), "Enabled", cmpEqual, true);
}

