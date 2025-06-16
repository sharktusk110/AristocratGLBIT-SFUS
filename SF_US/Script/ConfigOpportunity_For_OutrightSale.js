function EditOpportunity_Page()
{
  //Clicks the 'GlobalSearch_Tab' control.
  Aliases.browser.Page_Login.GlobalSearch_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Opportunity_Tab' control.
  Aliases.browser.AccountCreation_Page.NewAccount_Panel.Opportunity_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'GlobalSearch_Bar' control.
  Aliases.browser.Page_Login.GlobalSearch_Bar.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text Project.Variables.OpportunityName in the 'GlobalSearch_Bar' text editor.
  Aliases.browser.Page_Login.GlobalSearch_Bar.SetText(Project.Variables.OpportunityName);
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Enters '[Enter]' in the 'GlobalSearch_Bar' object.
  Aliases.browser.Page_Login.GlobalSearch_Bar.Keys("[Enter]");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'NewOpportunity_Tab' link.
  Aliases.browser.PostAccountApproval_Tab.NewOpportunity_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'TypeEdit_Button' button.
  //Aliases.browser.PostAccountApproval_Tab.D365CompanyCode_Field.TypeEdit_Button.ClickButton();
  Aliases.browser.PreAccountApproval_Tabs.Detail_Panel.Regular_Button.Type_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Type_Button' button.
  Aliases.browser.PreAccountApproval_Tabs.Detail_Panel.Regular_Button.Type_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Regular_Tab' control.
  Aliases.browser.PreAccountApproval_Tabs.Detail_Panel.Regular_Button.Regular_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Save_button' button.
  Aliases.browser.AccountCreation_Page.Save_button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Checks whether the 'contentText' property of the Aliases.browser.PostAccountApproval_Tab.D365CompanyCode_Field.TypeEdit_Button object equals 'Edit Type'.
  aqObject.CheckProperty(Aliases.browser.PostAccountApproval_Tab.D365CompanyCode_Field.TypeEdit_Button, "contentText", cmpEqual, "Edit Type");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'EditLineItem_Tab' button.
  Aliases.browser.PreAccountApproval_Tabs.Home_Panel.EditLineItem_Tab.ClickButton();
  //Clicks the 'Add_button' button.
  Aliases.browser.section.article.header.Add_button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Families_Tab' button.
  Aliases.browser.section.textnodeAllFamilies.Families_Tab.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.section.textnodeAllFamilies.EGM_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ProductSearch_Bar' control.
  Aliases.browser.section.ProductSearch_Bar.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Sets the text 'Helix Plus Upright' in the 'ProductSearch_Bar' text editor.
  Aliases.browser.section.ProductSearch_Bar.SetText("Helix Plus Upright");
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Clicks the 'HelixPlusUpright_Tab' control.
  Aliases.browser.section.HelixPlusUpright_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'OutrightSaleNew_Tab' control.
  Aliases.browser.section.OutrightSaleNew_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'Continue_Button' button.
  Aliases.browser.section.Continue_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'ApplyPrefrence_Button' button.
  Aliases.browser.section.sectionConfigure.ApplyPrefrence_Button.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(4000);
  //Checks whether the 'contentText' property of the Aliases.browser.section.sectionConfigure.ApplyPrefrence_Button object equals 'MainFloor'.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.ApplyPrefrence_Button, "contentText", cmpEqual, "MainFloor");
  Delay(2000);
  //Clicks the 'buttonSave2' button.
  Aliases.browser.section.buttonSave2.ClickButton();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  //Aliases.browser.section.sectionConfigure.License_Tab.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Checks whether the 'contentText' property of the Aliases.browser.section.sectionConfigure.panelRequired object equals 'Required !'.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.panelRequired, "contentText", cmpEqual, "Required !");
  //Selects the 3 item of the 'License_Tab' combo box.
  Aliases.browser.section.sectionConfigure.License_Tab.ClickItem(3);
  //Delays the test execution for the specified time period.
  //Delay(4000);
  
 

}

function EditLineItem_Validation()
{
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.buttonMainfloor object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.buttonMainfloor, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelPromotion object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.panelPromotion, "Enabled", cmpEqual, true);
  //Checks whether the 'value' property of the Aliases.browser.section2.sectionConfigure2.textbox2 object equals '1'.
  //aqObject.CheckProperty(Aliases.browser.section2.sectionConfigure2.textbox2, "value", cmpEqual, "1");
  //Clicks the 'buttonMainfloor' button.
  Aliases.browser.section.sectionConfigure.buttonMainfloor.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select22 object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.select22, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select32 object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.select32, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.select4 object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.select4, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panel object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.panel, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelButtonPanel2 object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.panelButtonPanel2, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.browser.section.sectionConfigure.panelOtherDiscounts2 object equals True.
  aqObject.CheckProperty(Aliases.browser.section.sectionConfigure.panelOtherDiscounts2, "Enabled", cmpEqual, true);
}

 function Close_EditLine_Item()
{
 //Clicks the 'buttonSave2' button.
  Aliases.browser.section.buttonSave2.ClickButton();
  
  //Delays the test execution for the specified time period.
 Delay(2000);
 
  //Checks whether the 'contentText' property of the Aliases.browser.AccountCreation_Page.AccountCreation_Toast object equals 'Success notification.
  //Product Configuration saved.
  //Press Control + F6 to navigate to the next toast notification or focusable region.
  //Close'.
  aqObject.CheckProperty(Aliases.browser.AccountCreation_Page.AccountCreation_Toast, "contentText", cmpEqual, "Success notification.\nProduct Configuration saved.\nPress Control + F6 to navigate to the next toast notification or focusable region.\nClose");
  Delay(2000);
  Aliases.browser.section4.buttonClose.Click();
}