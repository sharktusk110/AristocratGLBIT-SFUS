function ConfigConversionSales()
{
  
  Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.ClickButton();
  Delay(2000);
 
  Aliases.browser.Page__Config.ConfigTool__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText("2");
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.Save__button.ClickButton();
  Delay(2000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.ClickButton();
  Delay(2000);
 
  Aliases.browser.Page__EditLineItem.EditLine__Bar.header.Add__Button.ClickButton();
  Delay(2000);
 
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Families__Tab.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.EGM__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.ProductSearch__Bar.SetText("HELIX PLUS UPRIGHT");
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
  Delay(2000);
 
  Aliases.browser.Page__Config.ConversionsPaidSerialKnown__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(2);
  Delay(4000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
  Delay(6000);
  
 Aliases.browser.Page__EditLineItem.Save__Button3.ClickButton();
 Delay(6000);
  
  
 NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
}


function Conversion_Validation()
{
  
aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]"), "Enabled", cmpEqual, true);
}



