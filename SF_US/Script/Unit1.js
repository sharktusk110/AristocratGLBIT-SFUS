

function getSOC_Lines(Config){
  Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000eDJVCA2/view");
  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.LicenseType_Field, "contentText", cmpEqual, Config[4]);
  Delay(1000);
  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.GameTheme_Field, "contentText", cmpEqual, Config[5]);
  Delay(1000);
  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.Topper_Field, "contentText", cmpEqual, Config[7]);
  Delay(1000);
  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.ProgressiveType_Field, "contentText", cmpEqual, Config[9]);
  Delay(1000);


}

function Test1()
{
  Browsers.Item(btEdge).Navigate("https://test.salesforce.com/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let submitButton = browser.pageLoginSalesforce.formLoginForm.submitbuttonLogInToSandbox;
  submitButton.ClickButton();
  submitButton.ClickButton();
  let page = browser.pageLoginSalesforce2;
  page.Wait();
  page.Wait();
  page = browser.Page_SFAppSearch_AccountSearch;
  page.Wait();
  page.Wait();
  browser.ToUrl("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Quote/list?filterName=__Recent");
  page = browser.Page_QuoteNavigation;
  page.Wait();
  page.Wait();
  page.Wait();
  page.Wait();
  page.SearchThisList_SearchField.Click();
}