function ConfigConversionSales()
{
  //Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ConfigTool_Tab' control.
  Aliases.browser.Page__Config.ConfigTool__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text '2' in the 'Qnty_Tab' text editor.
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Qnty__Tab.SetText("2");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Save3_Button' button.
 Aliases.browser.Page__EditLineItem.Save__button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Performs a single click on the specified button.
NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Add_button' button.
 Aliases.browser.Page__EditLineItem.EditLine__Bar.header.Add__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Families_Tab' button.
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Families__Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'textnodeNorthAmerica2' control.
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.EGM__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text 'HELIX PLUS UPRIGHT' in the 'ProductSearch_Bar' text editor.
  Aliases.browser.Page__EditLineItem.ProductSearch__Bar.SetText("HELIX PLUS UPRIGHT");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ConversionsPaidSerialKnown_Tab' control.
  Aliases.browser.Page__Config.ConversionsPaidSerialKnown__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Continue_Button' button.
  Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Selects the 2 item of the 'License_Tab' combo box.
  Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(2);
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Clicks the 'buttonMainfloor' button.
  Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(6000);
  //Performs a single click on the specified button.
 Aliases.browser.Page__EditLineItem.Save__Button3.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(6000);
  //Clicks the 'buttonClose' button.
 NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.ClickButton();
}


function Conversion_Validation()
{
  //Checks whether the 'Enabled' property of the Aliases.browser.section5.panelShowHideChildItems object equals True.
  //aqObject.CheckProperty(Aliases.browser.section5.panelShowHideChildItems, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.PreAccountApproval_Tabs.Home_Panel.panelEgmCount object equals True.
  //aqObject.CheckProperty(Aliases.browser.PreAccountApproval__Tabs.Home__Panel.panelEgmCount, "Enabled", cmpEqual, true);
//let browser = Aliases.browser;
aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[contains(@class, 'slds-theme--success')]"), "Enabled", cmpEqual, true);
}



