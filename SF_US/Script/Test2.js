


function Test2()
{
  //Checks whether the 'contentText' property of the Aliases.browser.page__login.WithoutQuoting__panel object equals 'Forecast'.
  aqObject.CheckProperty(Aliases.browser.page__login.WithoutQuoting__panel, "contentText", cmpEqual, "Forecast");
}

function Test1()
{
  aqObject.CheckProperty(Aliases.browser.page__login.InQuoting__panel, "contentText", cmpEqual, "Quoting");
}

