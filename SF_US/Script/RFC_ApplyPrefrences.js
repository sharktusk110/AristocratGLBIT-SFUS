
function RFCApply_Pref_Validetion()
{

//Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.Page__PreAccountApproval.Home__Panel.QuoteAddEditLineItems__Tab.ClickButton();
  //Clicks the 'Add_button' button.
   Delay(2000);
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Add__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Families_Tab' button.
 Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Families__Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
 Aliases.browser.Page__EditLineItem.textnodeAllFamilies.EGM__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ProductSearch_Bar' control.
  Aliases.browser.Page__EditLineItem.ProductSearch__Bar.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text 'Helix Plus Upright' in the 'ProductSearch_Bar' text editor.
  Aliases.browser.Page__EditLineItem.ProductSearch__Bar.SetText("Helix Plus Upright");
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Clicks the 'HelixPlusUpright_Tab' control.
  Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'OutrightSaleNew_Tab' control.
Aliases.browser.Page__EditLineItem.OutrightSaleNew__Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Continue_Button' button.
 Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ApplyPrefrence_Button' button.
  Aliases.browser.Page__EditLineItem.sectionConfigure.ApplyPrefrence__Button.Click();
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Checks whether the 'contentText' property of the Aliases.browser.section.sectionConfigure.ApplyPrefrence_Button object equals 'MainFloor'.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.ApplyPrefrence__Button, "contentText", cmpEqual, "MainFloor");
  Delay(4000);
  //Clicks the 'buttonSave2' button.
  Aliases.browser.Page__EditLineItem.Save__Button3.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  //Aliases.browser.section.sectionConfigure.License_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Checks whether the 'contentText' property of the Aliases.browser.section.sectionConfigure.panelRequired object equals 'Required !'.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Required__Panel, "contentText", cmpEqual, "Required !");
  //Selects the 3 item of the 'License_Tab' combo box.
   Delay(2000);
 Aliases.browser.Page__EditLineItem.sectionConfigure.License__Tab.ClickItem(3);
  //Delays the test execution for the specified time period.
   //Selects the 3 item of the 'Frieght__Tab' combo box.
    Delay(2000);
  Aliases.browser.Page__RFCQuote.Page__Configu.sectionConfigure2.Frieght__Tab.ClickItem(3);
  
  //Delays the test execution for the specified time period.
  Delay(2000);
  
  //Selects the 3 item of the 'Promotion__Button' combo box.
  Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Button.ClickItem(3);
  //Delay(4000);
  Aliases.browser.Page__EditLineItem.Save__Button3.Click();
  
 

}

function RFC_EditLineItem_Validation()
{
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.buttonMainfloor object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button, "Enabled", cmpEqual, true);
 
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelPromotion object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Promotion__Tab, "Enabled", cmpEqual, true);
  
  //Checks whether the 'value' property of the Aliases.browser.section2.sectionConfigure2.textbox2 object equals '1'.
  //aqObject.CheckProperty(Aliases.browser.section2.sectionConfigure2.textbox2, "value", cmpEqual, "1");
  //Clicks the 'buttonMainfloor' button.
  Aliases.browser.Page__EditLineItem.sectionConfigure.Mainfloor__Button.ClickButton();
 
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select22 object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.BillAccepter__Tab, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select32 object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Printer__Tab, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select4 object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Trim__Tab, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panel object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Licence__panel, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelButtonPanel2 object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.Button__Panel, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelOtherDiscounts2 object equals True.
  aqObject.CheckProperty(Aliases.browser.Page__EditLineItem.sectionConfigure.OtherDiscount__Panel, "Enabled", cmpEqual, true);
}
