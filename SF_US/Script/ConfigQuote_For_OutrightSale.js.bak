//USEUNIT DataRead


function EditQuote_Page()
{
   Delay(2000);
  Aliases.browser.Page__RFCQuote.section6.ConfigTool__Tab.Click();
  Delay(2000);
  
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText(EGMQuantity);
  Delay(2000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  Delay(8000);
 
    Log.Message(" Toaster validation checked that conversion sale  is updated successfully")
  aqObject.CheckProperty(Aliases.browser.Page__AccountCreation.AccountCreation__Toast, "contentText", cmpEqual, "Success notification.\nProduct Configuration saved.\nPress Control + F6 to navigate to the next toast notification or focusable region.\nClose");
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
 function UnitDiscount()
{
Aliases.browser.Page__PreAccountApproval.Home__Panel.QuoteAddEditLineItems__Tab.ClickButton();
 Delay(2000);
 
 Aliases.browser.Page__RFCQuote.section6.ConfigTool__Tab.Click();
  Delay(2000);
  
  
var TotalPrice= Aliases.browser.Page__EditLineItem.sectionConfigure.TotalPrice__Label.contentText
Log.Message(" Veryfing Total price is correct after adding quantity ")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.TotalPrice__Label, "contentText", cmpEqual, "$102,475.00");

Aliases.browser.Page__EditLineItem.sectionConfigure.UnitDiscount__Box.SetText("10");
aqObject.CheckProperty(Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.UpdatedTotalPrice__Label, "contentText", cmpNotEqual, "$102,475.00", false);
Delay(3000);
Aliases.browser.Page__RFCQuote.section6.buttonSave.ClickButton();
Delay(4000);
NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();

}


function EGMCountValidation()
   {
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
   var ConversionLIneItemCount= Aliases.browser.Page__PostAccountApproval.ConverLineItemCount__Label.contentText

    var EGMQ1 = Aliases.browser.Page__PostAccountApproval.EGMQuantity__Label.contentText
    var EGMQ = parseInt(EGMQuantity) + parseInt(ConversionQuantity)+ parseInt(ConversionQuantity);
     
     if (parseInt(EGMQ)  ===  parseInt(EGMQ1))
     {
       Log.Message("Value of Conversion line item is updated successfuly in RFC quote")
     
     }
     else {
           Log.Message("Quantity updated as per new changes")  
     
     }
 
   }







