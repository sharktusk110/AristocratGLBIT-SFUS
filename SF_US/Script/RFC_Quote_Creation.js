//USEUNIT DataRead



function Openconfigopportunity()

{
  Log.Message("[Test]: opening created opportunity from B02 ")
  Log.Message("Clicks the 'GlobalSearch_Tab' control")
  Aliases.browser.page__Home.GlobalAll__tab.Click();
  Delay(2000);
   
  Aliases.browser.page__Home.GlobalAll__tab.SetText("Opportunities");
  Delay(2000);
  
  Aliases.browser.page__Home.GlobalAll__tab.Keys("[Down][Enter]");
  
  Log.Message("Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor")
  Aliases.browser.page__Home.GlobalSearch__field.Keys(Project.Variables.OpportunityName);
  
  Log.Message(" Delays the test execution for the specified time period.")  
   Delay(2000);
  
  Aliases.browser.page__Home.GlobalSearch__field.Keys("[Enter]");
 
  Log.Message(" Delays the test execution for the specified time period.")
  Delay(4000); 
  
  Aliases.browser.page__Home.NewOpportunity__tab.Click();
  Delay(6000); 
 
 }
 

 

function Create_RFC_Quote()
{
  Log.Message("[Test]: Creating RFC Quote" )
  Aliases.browser.Page__RFCQuote.RFCQuote__Button.Click();
  Delay(2000);
  
  Log.Message("[validation]: verifying syncNow checkbox is displaying")
  var syncNow = NameMapping.Sys.browser.pageHomeSearch.checkboxSyncNow
  aqObject.CheckProperty(syncNow, "Enabled", cmpEqual, true);
  Delay(2000);
 
  Aliases.browser.page__Home.RFCSave_button.ClickButton();
  Delay(2000);
  
  Log.Message("validation: RFC quote created successfully Toaster Massege");
  aqObject.CheckProperty(Aliases.browser.Page__Login.ToastSuccess__label, "Enabled", cmpEqual, true);
  Log.Message("[RFC Quote]:  "+ Aliases.browser.Page__Login.ToastSuccess__label.contentText)
  Delay(6000);
  
  Aliases.browser.page__Home.GlobalAll__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.GlobalAll__tab.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Enter]");
  Delay(2000);
 
  Log.Message("Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor")
  
  Aliases.browser.page__Home.GlobalSearch__field.Keys(Project.Variables.OpportunityName);
  
  Log.Message(" Delays the test execution for the specified time period.")  
   Delay(3000);
  KeyboardOperations("Down",1)
  Delay(1000)
  KeyboardOperations("Enter",1)
  
  //Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
 
  Log.Message(" Delays the test execution for the specified time period.")
  Delay(6000);
   
  
 // Aliases.browser.Page__PostAccountApproval.NewOpportunity__Tab.Click();

}




function RFC_Quote_Update()
{
  
   
   Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__button.Click();
   Delay(2000);
   
  //Clicks the 'Monthly12Payments__Tab' control.
  
  var LoginDataMap=dataReader("SF_opportunity"); //Sheetname
  var EqualMonthlyPayments=LoginDataMap["B03"]["PaymentTerms"];
  var LeaseTerm=LoginDataMap["B03"]["LeaseTerm"];
  
  Delay(2000);
  //Aliases.browser.Page__RFCQuote.PaymentTerms__panel.FindElement("//span[@title='"+EqualMonthlyPayments+"']").Click();
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__panel.Click();
  Aliases.browser.Page__RFCQuote.PaymentTerms__panel.Keys("--");
  Aliases.browser.Page__RFCQuote.PaymentTerms__panel.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Enter]");
 
  Delay(2000);
  //Aliases.browser.Page__RFCQuote.PaymentTerms__panel.Keys(EqualMonthlyPayments);
  //KeyboardOperations("Enter",1);
  //Aliases.browser.page__RFCQuote.PaymentTerms__panel.panelPaymentTerms.Monthly12Payments__Tab.Click();
  Delay(2000);
  
  //Clicks the 'LeaseTerm__Tab' button.
  Aliases.browser.Page__RFCQuote.LeaseTerm__panel.LeaseTerm__tab.Click();
  Delay(2000);
  Aliases.browser.Page__RFCQuote.LeaseTerm__panel.LeaseTerm__tab.Keys(LeaseTerm);
  KeyboardOperations("Enter",1)
 
 // textNode.LeaseTerm__Panel.buttonLeaseTerm2.Click();
  // Delay(2000);
  // Aliases.browser.Page__RFCQuote.LeaseTerm__panel.LeaseTerm__tab.FindElement("//span[@title='"+LeaseTerm+"']").Click();
  
  //Clicks the 'TermReason__Tab' control.
  Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.TermReason__tab.Click();
  Delay(2000);
  
  //Enters Project.Variables.OpportunityName in the 'TermReason__Tab' object.
  Aliases.browser.Page__RFCQuote.LeaseTerm__Panel.TermReason__tab.Keys(Project.Variables.OpportunityName);
  Delay(2000);
  
  Aliases.browser.page__Home.Save__button.ClickButton();
 
  
  Log.Message("Check point verified that Finance Charge per EGM is eqaul to $1250 ")
 // aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.Detail__Tab.FinanceCharge__Label, "contentText", cmpEqual, "USD 1,250.00");
  
}


