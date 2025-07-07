//USEUNIT DataRead

function Openconfigopportunity()

{


 //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
//Clicks the 'Opportunity_Tab' control.
 // Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalOpportunities__Tab.Click();
  
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
  Aliases.browser.Page__RFCQuote.RFC__Panel.RFCQuote__Button.Click();
  
  // Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//div[.='Sync Now']") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[.='Sync Now']"), "Enabled", cmpEqual, true);
  Delay(2000);
  Log.Message("validation: Line items are in sync");
  
  //Clicks the 'Save__Button' button.
  Aliases.browser.Page__RFCQuote.RFCSave_Button.ClickButton();
  
  // Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]") object equals True.
 // Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]")
  aqObject.CheckProperty(Aliases.browser.Page__Login.ToastSuccess__Label, "Enabled", cmpEqual, true);
  Log.Message("validation: RFC quote created successfully");
  
  Delay(6000);

  //Clicks the 'RFCQuote_Button' control.
  //Aliases.browser.Page__PreAccountApproval.Home__Panel.Quote_Panel.linkRfcBellagioLasVegasTest34.RFCQuote_Button.Click();

 //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.Page__RFCQuote.Quote__Button.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Click();
  //Clicks the 'SelectAccount__Tab' control.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.SelectAccount__Tab.Click();
  
}

function RFC_Quote_Update()
{
  
  Delay(6000);
  //Clicks the 'PaymentTerms__Button' button.
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Button.Click();
  Delay(2000);
   let textNode = Aliases.browser.Page__RFCQuote.PaymentTerms__Panel;
   Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Click();
   
  //Clicks the 'Monthly12Payments__Tab' control.
  //span[@title='12 Equal Monthly Payments']
  var LoginDataMap=dataReader("SF_opportunity"); //Sheetname
  var EqualMonthlyPayments=LoginDataMap["B03"]["PaymentTerms"];
  var LeaseTerm=LoginDataMap["B03"]["LeaseTerm"];
  
  Delay(2000);
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.FindElement("//span[@title='"+EqualMonthlyPayments+"']").Click();
  // Monthly12Payments__Tab.Click();
  Delay(2000);
  //Clicks the 'LeaseTerm__Tab' button.
  Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.LeaseTerm__Tab.Click();
  Delay(2000);
 // textNode.LeaseTerm__Panel.buttonLeaseTerm2.Click();
Delay(2000);
   Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.LeaseTerm__Tab.FindElement("//span[@title='"+LeaseTerm+"']").Click();
  
  //Clicks the 'Months12__Tab' control.
  //Aliases.browser.Page__PreAccountApproval.AccountDeatilsHome_Panel.LeaseTerm__Panel.Months12__Tab.Click();
  
  //Clicks the 'TermReason__Tab' control.
  Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.TermReason__Tab.Click();
  Delay(2000);
  //Enters Project.Variables.OpportunityName in the 'TermReason__Tab' object.
  Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.TermReason__Tab.Keys(Project.Variables.OpportunityName);
  Delay(2000);
  //Clicks the 'Save__button' button.
  Aliases.browser.Page__AccountCreation.Save__button.ClickButton();
 
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//lightning-formatted-text[.='USD 1,250.00']") object equals True.
  
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//lightning-formatted-text[.='USD 1,250.00']"), "contentText", cmpEqual, "USD 1,250.00");
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.Detail__Tab.FinanceCharge__Label, "Enabled", cmpEqual, true);
  Log.Message("Check point verified that Finance Charge per EGM is eqaul to $1250 ")
}


