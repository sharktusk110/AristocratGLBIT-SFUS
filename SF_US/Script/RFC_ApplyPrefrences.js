//USEUNIT DataRead



function RFCApply_Pref_Validation()
{

 Aliases.browser.page__Home.QuoteAddEditLineItems__tab.ClickButton();
 Delay(2000);
  
 Aliases.browser.page__EditLineItem.Add__button.ClickButton();
 Delay(2000);
  
  Aliases.browser.page__EditLineItem.AllFamilies__panel.Families__tab.ClickButton();
  Delay(2000);
  
 Aliases.browser.page__EditLineItem.AllFamilies__panel.Families__tab.Keys("[Down][Enter]");
 Delay(2000);
  
  Aliases.browser.Page__EditLineItem.ProductSearch__bar.Click();
  Delay(2000);
 
  Aliases.browser.Page__EditLineItem.ProductSearch__bar.SetText("Helix Plus Upright");
  Delay(4000);
 
  
Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
Delay(2000);
  
Aliases.browser.Page__EditLineItem.OutrightSaleNew__Tab.Click();
Delay(2000);
 
Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
Delay(2000);
  
Aliases.browser.page__EditLineItem.Configure__Panel.ApplyPrefrence__button.Click();
Delay(4000);

Log.Message("verifying that mainfloor button/ApplyingPrefrence is enable")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Mainfloor__Button, "Enabled", cmpEqual, true);
 
Log.Message("verifying that Promotion tab  is enable")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Promotion__Tab, "Enabled", cmpEqual, true);
 
 
Aliases.browser.Page__EditLineItem.Configure__Panel.Mainfloor__Button.ClickButton();
 
Log.Message("verifying that BillAccepter__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.BillAccepter__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Printer__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Printer__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Trim__Tab  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Trim__Tab, "Enabled", cmpEqual, true);

Log.Message("verifying that Licence__panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Licence__panel, "Enabled", cmpEqual, true);

Log.Message("verifying that Button__Panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.Button__Panel, "Enabled", cmpEqual, true);

Log.Message("verifying that OtherDiscount__Panel  is enable after applying Prefrences")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.OtherDiscount__Panel, "Enabled", cmpEqual, true);


Log.Message(" RFC apply Prefrence Button is Visible")
aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.Configure__Panel.ApplyPrefrence__Button, "contentText", cmpEqual, "MainFloor");
Delay(4000);



Aliases.browser.page__RFCQuote.Save3__button.Click();
Delay(4000);
 
Aliases.browser.page__RFCQuote.Page__Configu.ConfigureEditLineItem__panel.Frieght__tab.Click();

Aliases.browser.page__RFCQuote.Page__Configu.ConfigureEditLineItem__panel.Frieght__tab.Keys("[Down][Down][Enter]");
Delay(2000);

Log.Message(" License panel is a required Field") 
aqObject.CheckProperty(Aliases.browser.page__EditLineItem.Configure__Panel.Required__panel, "contentText", cmpEqual, "Required !");
Delay(2000);

Aliases.browser.page__EditLineItem.Configure__Panel.License__tab.Click();
Aliases.browser.page__EditLineItem.Configure__Panel.License__tab.Keys("[Down][Down][Enter]");
Delay(3000);
   

 Aliases.browser.Page__EditLineItem.Configure__Panel.Promotion__Button.Click();
 Aliases.browser.Page__EditLineItem.Configure__Panel.Promotion__Button.Keys("[Down][Down][Enter]");
       Delay(3000);
     
    
Aliases.browser.page__RFCQuote.Save3__button.Click();
  
 

}










