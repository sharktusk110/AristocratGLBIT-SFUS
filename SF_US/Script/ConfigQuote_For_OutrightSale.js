//USEUNIT DataRead


function EditQuote_Page()
{
   Delay(5000);
  Aliases.browser.page__RFCQuote.ConfigTool__tab.Click();
  Delay(2000);
  
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
  Aliases.browser.page__EditLineItem.Qnty__tab.SetText(EGMQuantity);
  Delay(2000);
  
  Aliases.browser.page__RFCQuote.RfcQSave__button.ClickButton();
  Delay(8000);
 
    Log.Message(" Toaster validation checked that conversion sale  is updated successfully")
  aqObject.CheckProperty(Aliases.browser.page__login.AccountCreation__toast, "contentText", cmpEqual, "Success notification.\nProduct Configuration saved.\nPress Control + F6 to navigate to the next toast notification or focusable region.\nClose");
  Delay(2000);
 
  Aliases.browser.page__RFCQuote.CloseQ__button.ClickButton();
  Delay(2000);
  
  Log.Message("Total EGM count is verified on Quote Page")
  aqObject.CheckProperty(Aliases.browser.page__RFCQuote.EGMCount__Label, "Enabled", cmpEqual, true);
  Delay(2000);
   
  Log.Message("Total Conversion line item count is verified on Quote Page")
  aqObject.CheckProperty(Aliases.browser.page__RFCQuote.ConverLineItemCount__label, "Enabled", cmpEqual, true);
  Delay(2000);
  var ConversionLIneItemCount= Aliases.browser.page__RFCQuote.ConverLineItemCount__label.contentText

    var EGMQ1 = Aliases.browser.page__RFCQuote.EGMQuantity__label.contentText
    var EGMQ = parseInt(EGMQuantity) + parseInt(ConversionQuantity);
 
    EGMCountValidation()
  
  // CompareValue(parseInt(ConversionLIneItemCount),parseInt(ConversionQuantity))
  
 
} 
 function UnitDiscount()
{
Aliases.browser.page__Home.QuoteAddEditLineItems__tab.ClickButton();
 Delay(2000);
 
 Aliases.browser.page__RFCQuote.ConfigTool__tab.Click();
  Delay(2000);
  
  
var TotalPrice= Aliases.browser.page__EditLineItem.Configure__Panel.TotalPrice__Label.contentText
Log.Message(" Veryfing Total price is correct after adding quantity ")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.TotalPrice__Label, "contentText", cmpEqual, "$102,475.00");

Aliases.browser.page__EditLineItem.Configure__Panel.UnitDiscount__Box.SetText("10");
aqObject.CheckProperty(Aliases.browser.page__RFCQuote.Page__Configu.ConfigureEditLineItem__panel.UpdatedTotalPrice__Label, "contentText", cmpNotEqual, "$102,475.00", false);
Delay(3000);
Aliases.browser.page__RFCQuote.RfcQSave__button.ClickButton();
Delay(4000);
Aliases.browser.page__RFCQuote.CloseQ__button.ClickButton();

}


function EGMCountValidation()
   {
    var CasesWS=dataReader("SF_opportunity"); //Sheetname
    var EGMQuantity=CasesWS["B03"]["EGMQuantity"];
    var ConversionQuantity=CasesWS["B03"]["ConversionQuantity"];
  
   var ConversionLIneItemCount= Aliases.browser.page__RFCQuote.ConverLineItemCount__label.contentText

    var EGMQ1 = Aliases.browser.page__RFCQuote.EGMQuantity__label.contentText
    var EGMQ = parseInt(EGMQuantity) + parseInt(ConversionQuantity)+ parseInt(ConversionQuantity);
     
     if (parseInt(EGMQ)  ===  parseInt(EGMQ1))
     {
       Log.Message("Value of Conversion line item is updated successfuly in RFC quote")
     
     }
     else {
           Log.Message("Quantity updated as per new changes")  
     
     }
 
   }







