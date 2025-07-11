
function RFCApply_Pref_Validation()
{

 Aliases.browser.Page__PreAccountApproval.Home__Panel.QuoteAddEditLineItems__Tab.ClickButton();
 Delay(2000);
  
 NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Add__Button.ClickButton();
 Delay(2000);
  
 Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Families__Tab.ClickButton();
 Delay(2000);

 Aliases.browser.Page__EditLineItem.textnodeAllFamilies.EGM__Tab.Click();
 Delay(2000);
  
 Aliases.browser.Page__EditLineItem.ProductSearch__Bar.Click();  
 Delay(2000);
 
 Aliases.browser.Page__EditLineItem.ProductSearch__Bar.SetText("Helix Plus Upright");
 Delay(4000);
  
Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
Delay(2000);
  
Aliases.browser.Page__EditLineItem.OutrightSaleNew__Tab.Click();
Delay(2000);
 
Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
Delay(2000);
  
Aliases.browser.Page__EditLineItem.sectionConfigure.ApplyPrefrence__Button.Click();
Delay(4000);

Log.Message("verifying that mainfloor button/ApplyingPrefrence is enable")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button, "Enabled", cmpEqual, true);
 
Log.Message("verifying that Promotion tab  is enable")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Tab, "Enabled", cmpEqual, true);
 
 
Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
 
Log.Message("verifying that BillAccepter__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.BillAccepter__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Printer__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Printer__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Trim__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Trim__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Licence__panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Licence__panel, "Enabled", cmpEqual, true);

Log.Message("verifying that Button__Panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Button__Panel, "Enabled", cmpEqual, true);

Log.Message("verifying that OtherDiscount__Panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.OtherDiscount__Panel, "Enabled", cmpEqual, true);


Log.Message(" RFC apply Prefrence Button is Visible")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.ApplyPrefrence__Button, "contentText", cmpEqual, "MainFloor");
Delay(4000);

Aliases.browser.Page__RFCQuote.buttonSave3.Click();
Delay(4000);
 
Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(3);
Delay(2000);

Log.Message(" License panel is a required Field") 
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Required__Panel, "contentText", cmpEqual, "Required !");
Delay(2000);

Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(3);
Delay(2000);


  

Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);


Aliases.browser.Page__RFCQuote.buttonSave3.Click();
  
 

}






