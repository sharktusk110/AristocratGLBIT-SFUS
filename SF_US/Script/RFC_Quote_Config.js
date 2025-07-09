//USEUNIT DataRead


function Verify_Existing_LineItem(Flag)
{ 
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.QuoteAddEditLineItems__Tab.Click();
  Delay(2000);
  
  Log.Message(" validetion checked that opened opprotunity is alredy configured")
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.GrantTotalAmount__Label, "Enabled", cmpEqual, true);
  var GrantTotalAmount  = Aliases.browser.Page__EditLineItem.GrantTotalAmount__Label.contentText
  
  if (Flag === "After") { Project.Variables.afterGrandTotalEGM = GrantTotalAmount; } 
  else if (Flag === "Before") { Project.Variables.afterGrandTotalEGM = GrantTotalAmount; }
 }
 
         // CompareValue("abcxyz","abc")



 
 
 
 
 function Verify_upright_Required_Field()
 {
  Delay(2000);
  
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    //var Quantity=CasesWS["B03"]["Quantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
  //Clicks the 'ConfigTool__Tab' control.
  Aliases.browser.Page__RFCQuote.section6.ConfigTool__Tab.Click();
  Delay(2000);
  
   // Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText(Quantity);
    
    //var quantity= Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.contentText;
    //Project.Variables.EGMCOUNT_Before=quantity
    
    
    Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText(ConversionQuantity);
    Delay(2000);
  
    
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  Delay(6000);
 
 //Log.Message("checking required field is enabled for Freight")
 // aqObject.CheckProperty(Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.panelRequired, "Enabled", cmpEqual, true);
 // Delay(2000);
  
  Log.Message("checking required field is enabled for Promotions")
  aqObject.CheckProperty(Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.panelRequired2, "Enabled", cmpEqual, true);
  Delay(2000);
  
  Log.Message("checking required field is enabled for License")
  aqObject.CheckProperty(Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.panel2, "Enabled", cmpEqual, true);
  Delay(2000);
  
 
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(2);
  Delay(2000);

  Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(2);
  Delay(3000);
  
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);
  Delay(2000);
 
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  Delay(12000);
  
  Log.Message("Account has been created seccessfull massege")
  aqObject.CheckProperty(Aliases.browser.Page__AccountCreation.AccountCreation__Toast, "Enabled", cmpEqual, true);
}




function Conver_Config()
{
  Delay(2000);
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.ConverTool__Tab.Click();
  Delay(2000);
  
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText(EGMQuantity);
  Delay(2000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  Delay(2000);
 
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(3);
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);
  Delay(2000);

  //Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.Click();
  //Delay(2000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  Delay(8000);
  
  Log.Message(" Toaster validation checked that conversion sale  is updated successfully")
  aqObject.CheckProperty(Aliases.browser.Page__AccountCreation.AccountCreation__Toast, "contentText", cmpEqual, "Success notification.\nProduct Configuration saved.\nPress Control + F6 to navigate to the next toast notification or focusable region.\nClose");
  Delay(2000);
 
  Log.Message(" validetion checked that updated quantity is reflecting in quantity Box")
  aqObject.CheckProperty(NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Qnty__Box, "Enabled", cmpEqual, true);
  Delay(2000);
  
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonClose.ClickButton();
  Delay(2000);
  
  Log.Message("Total EGM count is verified on Quote Page")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.textnodeEgmCount, "Enabled", cmpEqual, true);
  Delay(2000);
   
  Log.Message("Total Conversion line item count is verified on Quote Page")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.ConverLineItemCount__Label, "Enabled", cmpEqual, true);
  Delay(2000);
  var ConversionLIneItemCount= Aliases.browser.Page__PostAccountApproval.ConverLineItemCount__Label.contentText

    var EGMQ1 = Aliases.browser.Page__PostAccountApproval.EGMQuantity__Label.contentText
    var EGMQ = parseInt(EGMQuantity) + parseInt(ConversionQuantity);
 
    EGMCountValidation()
  
  // CompareValue(parseInt(ConversionLIneItemCount),parseInt(ConversionQuantity))
  
  }
  
  
   function EGMCountValidation()
   {
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
   var ConversionLIneItemCount= Aliases.browser.Page__PostAccountApproval.ConverLineItemCount__Label.contentText

    var EGMQ1 = Aliases.browser.Page__PostAccountApproval.EGMQuantity__Label.contentText
    var EGMQ = parseInt(EGMQuantity) + parseInt(ConversionQuantity);
     
     if (parseInt(EGMQ)  ===  parseInt(EGMQ1))
     {
       Log.Message("Value of Conversion line item is updated successfuly in RFC quote")
     
     }
     else {
           Log.error("Not executed")  
     
     }
 
   }
  
  
  
  
  
  function validate_oppor()
  {
  
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(Project.Variables.OpportunityName);
  Delay(2000);
   
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
  Delay(2000);
  
  Aliases.browser.Page__PostAccountApproval.NewOpportunity__Tab.Click();
  Delay(2000);
 
  Log.Message("Total EGM count is verified on Opportunity Page")
  aqObject.CheckProperty(NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.panelEgmCount, "Enabled", cmpEqual, true);
  Delay(2000);
 
   Log.Message("Total Conversion line item count is verified on Opportunity Page")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.textnodeConversionLineItemCount, "Enabled", cmpEqual, true);
  Delay(2000);
  
  Log.Message("Payment Term is verified on Opportunity Page")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.Detail__Tab.textnode12EqualMonthlyPayments, "contentText", cmpEqual, "12 Equal Monthly Payments");
  Delay(2000);

  Aliases.browser.Page__PreAccountApproval.Home__Panel.EditLineItem__Tab.ClickButton();
  Delay(2000);
  
  
   Aliases.browser.Page__RFCQuote.Click__Panel.Opport__Click.Click();
  Delay(2000);
  
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
}




function OpenRFC_Quote()
{
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  Delay(2000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.RFCQuotes__Tab.Click();
  Delay(2000);
  
  Log.Message("Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor")
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(Project.Variables.OpportunityName);
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.SelectRFCQuote__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.SelectAccount__Tab.Click();
  Delay(2000);
}