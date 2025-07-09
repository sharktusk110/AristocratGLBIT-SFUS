function EditOpportunity_Page()
{
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(Project.Variables.OpportunityName);
  Delay(2000);
  
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
  Delay(2000);
  
  Aliases.browser.Page__PostAccountApproval.NewOpportunity__Tab.Click();
  Delay(2000);
 
 let browserWindow = NameMapping.Sys.browser;
  
  
  browserWindow.pageCasinoRoyaleAccountSalesforc.panelAccount.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
 Delay(2000);
 
    Aliases.browser.Page__PreAccountApproval.Detail__Panel.TypeEdit__Button.Regular__Button.Click();
  Delay(2000);
 
  Aliases.browser.Page__AccountCreation.Save__button.ClickButton();
  Delay(2000);
 
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.EditLineItem__Tab.ClickButton();
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
  
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.ApplyPrefrence__Button, "contentText", cmpEqual, "MainFloor");
  Delay(4000);
  

  Aliases.browser.Page__EditLineItem.Save__Button3.Click();
  Delay(4000);
  
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Required__Panel, "contentText", cmpEqual, "Required !");

  Aliases.browser.Page__RFCQuote.section6.buttonSave.ClickButton();
  Delay(4000);

 Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(3);
 
}




function EditLineItem_Validation()
{
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button, "Enabled", cmpEqual, true);
 
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Tab, "Enabled", cmpEqual, true);
  Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.BillAccepter__Tab, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Printer__Tab, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Trim__Tab, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Licence__panel, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Button__Panel, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.OtherDiscount__Panel, "Enabled", cmpEqual, true);
}

 function Close_EditLine_Item()
{
 Delay(4000);
  let browserWindow = NameMapping.Sys.browser;
 
  let browser = Aliases.browser;
  Delay(4000);
  Aliases.browser.Page__EditLineItem.Save__Button3.ClickButton();
  
  Delay(4000);
  browserWindow.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
 
 
}
