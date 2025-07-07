function Verify_upright_Required_Field()
 {
  Delay(2000);
  
  //Clicks the 'ConfigTool__Tab' control.
  Aliases.browser.Page__RFCQuote.section6.ConfigTool__Tab.Click();
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Sets the text '5' in the 'Qnty__Tab' text editor.
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText("4");
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
    //Clicks the 'buttonSave' button.
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  
  Delay(6000);
 
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//tr[2]/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//tr[2]/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]"), "Enabled", cmpEqual, true);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//tr/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//tr/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]"), "Enabled", cmpEqual, true);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__Login.FindElement("//tr[17]/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]") object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//tr[17]/td/c-egm-configurator-line-item-editor-row//div[contains(@class, 'slds-m-right_x-small')]"), "Enabled", cmpEqual, true);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Selects the 2 item of the 'Frieght__Tab' combo box.
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(2);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Selects the 2 item of the 'License__Tab' combo box.
  Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(2);
  
  //Delays the test execution for the specified time period.
  Delay(3000);
  
  //Clicks the 'select' object.
  Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);
 
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Clicks the 'buttonSave' button.
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.buttonSave.ClickButton();
  
  //Delays the test execution for the specified time period.
  Delay(12000);
  
  //Checks whether the 'Enabled' property of the Aliases.browser.Page__AccountCreation.AccountCreation__Toast object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__AccountCreation.AccountCreation__Toast, "Enabled", cmpEqual, true);
}
