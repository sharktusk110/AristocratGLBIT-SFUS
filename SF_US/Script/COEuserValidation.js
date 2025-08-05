//USEUNIT DataRead




  function Account_Switch()
  {
  Delay(3000);
  Aliases.browser.Page__Login.Account__Switch.LogOutDan__Tab.Click();
  
  Delay(3000);
  Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.my.salesforce-setup.com/lightning/setup/ManageUsers/page?address=%2F0057F000007rGJ9QAM%3Fnoredirect%3D1%26isUserEntityOverride%3D1%26retURL%3D%252Fsetup%252Fhome");
  
  Delay(2000);
  Aliases.browser.Page__Login.Account__Switch.button__Login.ClickButton();
  
  Delay(4000);
  }



  function EditRFCquote1()

  {
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Click();
  Delay(1000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerm6M__Tab.Click();
  
  Aliases.browser.Page__AccountCreation.Save__button.Click();
  Delay(2000);
  
  Log.Message("COE user is NOT able to edit any fields on the Submitted for Approval Quote.")
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[@role='dialog']"), "contentText", cmpEqual, "Close error dialog\nWe hit a snag.\nReview the errors on this page.\nThis record is locked. If you need to edit it, contact your admin.");
 
  }


  
  
  function OpenRFC_Quote1()
  {

  
  Log.Message("Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor")
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(Project.Variables.OpportunityName);
  Delay(2000);
  
   Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.SelectAccount__Tab.Click();
   Delay(2000);
  }


  
  
  function LoginPowerUser()

  {
  
  Delay(3000);
  Aliases.browser.Page__Login.Account__Switch.LogOutDan__Tab.Click();
  
  Delay(3000);
  Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.my.salesforce-setup.com/lightning/setup/ManageUsers/page?address=%2F0057F000004OGBuQAO%3Fnoredirect%3D1%26isUserEntityOverride%3D1%26retURL%3D%252Fsetup%252Fhome");
  
  Delay(2000);
  Aliases.browser.Page__Login.Account__Switch.button__Login.ClickButton();

  }


  function ApprovalQuote()
  {
  
  //Clicks the 'Related__Tab' link.
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(5000);
  
  KeyboardOperations("Down",8) 
  
  Sys.HighlightObject(Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.Click();
  Delay(2000);
  
  Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.AccountApproval__Button.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.Click();
  Delay(2000);
  
  Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.AccountApproval__Button.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.Click();
  Delay(2000);
  
  Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.AccountApproval__Button.ClickButton();
  Delay(2000);
  
    Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.Click();
  Delay(2000);
  
  Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.AccountApproval__Button.ClickButton();
  Delay(2000);
  
    Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.Click();
  Delay(2000);
  
  Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approved");
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Tab__Approve.AccountApproval__Button.ClickButton();
  Delay(2000);
  }


  function LegalDocValidation()

  {
  
           var HeaderText=Project.Variables.HeaderName
           var FooterText=Project.Variables.FooterName

  Log.Message(" verified that Legal Information section is available on Quote Page")
  aqObject.CheckProperty(Aliases.browser.Page__PreAccountApproval.LegalInformation__Panel.LegalInformation__Button,"contentText", cmpEqual, "Legal Information");
  
  Log.Message(" Verify that Quote Doc Header and Quote Doc Footer fields are visible on the screen")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.D365CompanyCode__Field.QuoteDocHeader__Tab, "contentText", cmpEqual, "Quote Doc Header");
  
  Log.Message("Verify that Quote Doc Header and Quote Doc Footer fields are visible on the screen")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.D365CompanyCode__Field.QuoteDocFooter__Tab, "contentText", cmpEqual, "Quote Doc Footer");

   
   
   
   
   Aliases.browser.Page__PostAccountApproval.Detail__Tab.QuoteDocHeader__Icon.Click();
   Delay(2000);
   Aliases.browser.Page__PostAccountApproval.Detail__Tab.QuoteDocHeader__Textbox.Keys(HeaderText);
   Delay(2000);
   KeyboardOperations("Down",2) 
    KeyboardOperations("Enter",1) 
 
    
    
   Aliases.browser.Page__PostAccountApproval.Detail__Tab.QuoteDocFooter__Textbox.Keys(FooterText);
   Delay(2000);
   KeyboardOperations("Down",2)
   KeyboardOperations("Enter",1) 
 
   
   Aliases.browser.Page__AccountCreation.Save__button.Click();
   Delay(2000);
   Aliases.browser.Page__PostAccountApproval.GenerateQuoteDoc__button.Click();
   Delay(6000);
    
  Aliases.browser.Page__EditLineItem.Pdf__frame.click();
   
   OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+HeaderText+"*");
   Delay(2000);
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.click();
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.Drag(785, 176, 10, 262);
   
   Aliases.browser.Page__EditLineItem.Pdf__frame.Keys("^![ReleaseLast][ReleaseLast]");
   
   OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+FooterText+"*");
   Delay(2000);
   
  Aliases.browser.Page__Login.sectionHelp.buttonClose.Click();

  }
 
  
  
  
  
  
  
  
  
    











