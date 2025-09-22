//USEUNIT DataRead




  function Account_Switch()
  {
  Delay(3000);
  Aliases.browser.page__Home.LogOutDan__tab.Click();
  
  Delay(3000);
  Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.my.salesforce-setup.com/lightning/setup/ManageUsers/page?address=%2F0057F000005wTh0QAE%3Fnoredirect%3D1%26isUserEntityOverride%3D1%26retURL%3D%252Fsetup%252Fhome");
  
  Delay(2000);
  Aliases.browser.page__Home.Login__button.ClickButton();
  
  Delay(4000);
  }



  function EditRFCquote1()

  {
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Click();
  Delay(1000);
  
   Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Keys("[Down][Enter]");
   Delay(1000);
 // Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerm6M__Tab.Click();
  
  Aliases.browser.page__Home.Save__button.Click();
  Delay(2000);
  
  Log.Message("COE user is NOT able to edit any fields on the Submitted for Approval Quote.")
  aqObject.CheckProperty(Aliases.browser.Page__Login.RFCErrorAlert__Text, "contentText", cmpEqual, "Review the errors on this page.\nSorry, you cannot change field 'Payment Terms' as this Quote is in Submitted For Approval status.\nReview the following fields\nApproval Status");

  }


  
  
  function OpenRFC_Quote1()
  {

  Aliases.browser.page__Home.GlobalAll__tab.Click();
  Delay(3000);
  
  Aliases.browser.page__Home.GlobalAll__tab.SetText("Quotes");
  Delay(2000);
  
  Aliases.browser.page__Home.GlobalAll__tab.Keys("[Down][Enter]");
  
  Log.Message("Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor")
  Aliases.browser.page__Home.GlobalSearch__field.SetText(Project.Variables.OpportunityName);
  Delay(2000);
  
   Aliases.browser.page__Home.GlobalSearch__field.Keys("[Enter]");
  
  Aliases.browser.page__Home.NewOpportunity__tab.Click();
  Delay(2000);
   
  }


  
  
  function LoginPowerUser()

  {
  
  Delay(3000);
  Aliases.browser.page__Home.LogOutDan__tab.Click();
  
  Delay(3000);
  Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.my.salesforce-setup.com/lightning/setup/ManageUsers/page?address=%2F0057F000004OGBuQAO%3Fnoredirect%3D1%26isUserEntityOverride%3D1%26retURL%3D%252Fsetup%252Fhome");
  
  Delay(2000);
  Aliases.browser.page__Home.Login__button.ClickButton();

  }


  function ApprovalQuote()
  {
  
  //Clicks the 'Related__Tab' link.
  Aliases.browser.page__Home.Related__tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(5000);
  
  KeyboardOperations("Down",8) 
  
  Sys.HighlightObject(Aliases.browser.page__Home.Related__tab.Approve__tab);
  
  Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  
  Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  
 Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  
    Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  
  Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  
  Aliases.browser.page__Home.Related__tab.Approve__tab.Click();
  Delay(2000);
  
  Aliases.browser.page__Home.CommentsApproval__field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.page__Home.Submit__button.ClickButton();
  Delay(4000);
  }


  function LegalDocValidation()

  {
            
           var HeaderText=Project.Variables.HeaderName
           var FooterText=Project.Variables.FooterName
           
   Aliases.browser.page__Account.Detail__tab.Click();
   
           

  Log.Message(" verified that Legal Information section is available on Quote Page")
  aqObject.CheckProperty(Aliases.browser.page__RFCQuote.LegalInformation__Panel.LegalInformation__button,"contentText", cmpEqual, "Legal Information");
  
  Log.Message(" Verify that Quote Doc Header and Quote Doc Footer fields are visible on the screen")
  aqObject.CheckProperty(Aliases.browser.page__Account.Detail__tab.QuoteDocHeader__tab, "contentText", cmpEqual, "Quote Doc Header");
  
  Log.Message("Verify that Quote Doc Header and Quote Doc Footer fields are visible on the screen")
  aqObject.CheckProperty(Aliases.browser.page__Account.Detail__tab.QuoteDocFooter__tab, "contentText", cmpEqual, "Quote Doc Footer");

   
   
   
   
   Aliases.browser.page__Account.Detail__tab.QuoteDocHeader__icon.Click();
   Delay(2000);
   Aliases.browser.page__Account.Detail__tab.QuoteDocHeader__textbox.Keys(HeaderText);
   Delay(2000);
   KeyboardOperations("Down",2) 
    KeyboardOperations("Enter",1) 
 
    
   // Aliases.browser.Page__PostAccountApproval.Detail__Tab.QuoteDocFooter__Icon.Click();
  // Delay(2000);
   Aliases.browser.page__Account.Detail__tab.QuoteDocFooter__textbox.Keys(FooterText);
   Delay(2000);
   KeyboardOperations("Down",2)
   KeyboardOperations("Enter",1) 
 
   
   Aliases.browser.page__Home.Save__button.Click();
   Delay(2000);
   Aliases.browser.page__RFCQuote.GenerateQuoteDoc__button.Click();
   Delay(6000);
    
  Aliases.browser.Page__EditLineItem.Pdf__frame.click();
   
   OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+HeaderText+"*");
   Delay(2000);
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.click();
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.Drag(785, 176, 10, 262);
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.Keys("^![ReleaseLast][ReleaseLast]");
   
   OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+FooterText+"*");
   Delay(2000);
   
   Aliases.browser.page__Home.ClearAllFilters__button.Click();

  }
 
  function ELI_Disabeld1()

{
  
    Aliases.browser.page__Home.EditLineItem__tab.Click();
    Delay(2000);
  
    Aliases.browser.Page__RFCQuote.Click__Panel.Opport__click.Click();
    Delay(2000);
    
    
    Log.Message("BDE should not be able to see the Add / Edit Lines buttons Like New / Existing")
    aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[@role='dialog']//section//c-add-edit-line-items//div//div[contains(@class, 'flex-item-one-autoscroll')]"), "Enabled", cmpEqual, true);

    
    Aliases.browser.page__EditLineItem.Close__button.Click();
    Delay(2000);
    
   

}
  
  
  
  
  
  
  
  
    











