//USEUNIT RFC_Quote_Creation
//USEUNIT COEuserValidation
//USEUNIT RFC_Quote_Config
//USEUNIT Oppor_Quoting_ConfigStage

function Quoting_ConfigStage() 

{
  //Run C01 before this.
  //Lara was logged in as super user and quote is approved.
   LoginPowerUser()
   Openconfigopportunity()
   
   
   OpenRFC_Quote()
   Create_SocQuote()
   UpdateConfig_EditLineItem()
   Click_Validate()
    
   aqObject.CheckProperty(Aliases.browser.page__Account.Detail__tab.StatusValidated__tab, "contentText", cmpEqual, "Validated");

   Openconfigopportunity()
   
  //Validate that After configuration and submission of RFC Quote , opportunity should be change in Quoting stage.   
  aqObject.CheckProperty(Aliases.browser.page__login.InQuoting__panel, "contentText", cmpEqual, "Quoting");

   OpenRFC_Quote()
   
   Aliases.browser.Page__PostAccountApproval.OpenSOCQuote__tab.Click();
   Delay(2000);
   Click_Complete()
   
   Openconfigopportunity()
   
   //Validate that After configuration and submission of RFC ,SOC Quote opportunity should be change in Config stage.   
   aqObject.CheckProperty(Aliases.browser.page__Account.Detail__tab.StatusConfig__tab, "contentText", cmpEqual, "Config");
   
}


 