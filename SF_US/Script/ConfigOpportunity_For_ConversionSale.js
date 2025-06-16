function ConfigConversionSales()
{
  //Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.EditLineItem_Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ConfigTool_Tab' control.
  Aliases.browser.section4.ConfigTool_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text '2' in the 'Qnty_Tab' text editor.
  Aliases.browser.section2.sectionConfigure2.Qnty_Tab.SetText("2");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Save3_Button' button.
  Aliases.browser.section2.Save3_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Performs a single click on the specified button.
  Aliases.browser.section4.buttonClose.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.EditLineItem_Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Add_button' button.
  Aliases.browser.section.article.header.Add_button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Families_Tab' button.
  Aliases.browser.section.textnodeAllFamilies.Families_Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'textnodeNorthAmerica2' control.
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.textnodeNorthAmerica2.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text 'HELIX PLUS UPRIGHT' in the 'ProductSearch_Bar' text editor.
  Aliases.browser.section.ProductSearch_Bar.SetText("HELIX PLUS UPRIGHT");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.section.HelixPlusUpright_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ConversionsPaidSerialKnown_Tab' control.
  Aliases.browser.section4.ConversionsPaidSerialKnown_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Continue_Button' button.
  Aliases.browser.section.Continue_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Selects the 2 item of the 'License_Tab' combo box.
  Aliases.browser.section.sectionConfigure.License_Tab.ClickItem(2);
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'buttonMainfloor' button.
  Aliases.browser.section.sectionConfigure.buttonMainfloor.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Performs a single click on the specified button.
  Aliases.browser.AccountCreation_Page.Save_button.Click();
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Clicks the 'buttonClose' button.
  Aliases.browser.section4.buttonClose.ClickButton();
}


function Conversion_Validation()
{
  //Checks whether the 'Enabled' property of the Aliases.browser.section5.panelShowHideChildItems object equals True.
  //aqObject.CheckProperty(Aliases.browser.section5.panelShowHideChildItems, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.PreAccountApproval_Tabs.Home_Panel.panelEgmCount object equals True.
  aqObject.CheckProperty(Aliases.browser.PreAccountApproval_Tabs.Home_Panel.panelEgmCount, "Enabled", cmpEqual, true);
}



