function ConfigGOpsSale_Config()
{
  
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
  
  Aliases.browser.Page__EditLineItem.GOpsSale__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText("7");
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(4);
  Delay(4000);

  Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
  Delay(6000);  

  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(3);
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.sectionConfigure.UnitDiscount__Box.SetText(100);
 
  
 Aliases.browser.Page__EditLineItem.Save__Button3.ClickButton();

 Delay(6000);

 Log.Message("Account has been created seccessfull massege")
  aqObject.CheckProperty(Aliases.browser.Page__AccountCreation.AccountCreation__Toast, "Enabled", cmpEqual, true);
 
 NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
 
 
}

function validateGOps_LeaseTerm()
{
  Log.Message("validation for Lease Term field is auto-populated with Not Required - GOps MSP ")
  aqObject.CheckProperty(Aliases.browser.Page__PostAccountApproval.Detail__Tab.GopsMspNotRequired__Label, "contentText", cmpEqual, "Not Required - GOps MSP");

}

