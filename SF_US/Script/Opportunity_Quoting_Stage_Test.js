//USEUNIT DataRead
//USEUNIT RFC_Quote_Creation
//USEUNIT OpportunityCreation
//USEUNIT CreateRFCForAddress
//USEUNIT ConfigGOpsSale_Test
//USEUNIT Opportunity_Quoting_Stage
//USEUNIT COEuserValidation
//USEUNIT B05_Submit_for_approval_Test
//USEUNIT RFC_Quote_Config




function Create_Opp_RFC()
{
   
  var AccountName = Project.Variables.ParentAccount
  
   GlobalSearch_Account(AccountName)
   Create_opportunity("B04")
   Openconfigopportunity()
   
    //Validate that after opportunity creation Oppor is not sitting in the Quoting stage .    
    aqObject.CheckProperty(Aliases.browser.page__login.WithoutQuoting__panel, "contentText", cmpEqual, "Forecast");
  
  
   Create_RFC_Quote()
   Openconfigopportunity()
  
   //Validate that After configuration and submission of RFC Quote , opportunity should be change in Quoting stage.   
   aqObject.CheckProperty(Aliases.browser.page__login.InQuoting__panel, "contentText", cmpEqual, "Quoting");
  
   
   OpenRFC_Quote()
   RFC_Quote_Update()
   Delay(3000);
   ConfigGOpsSale()
   AddWVFEE()
   //Submitforapproval()
   Submitforapproval1()
   Openconfigopportunity()
  
  //Validate that After configuration and submission of RFC Quote , opportunity should be change in Quoting stage.   
  aqObject.CheckProperty(Aliases.browser.page__login.InQuoting__panel, "contentText", cmpEqual, "Quoting");
  
   
   LoginPowerUser()
   OpenRFC_Quote()
   ApprovalQuote()
   Openconfigopportunity()
  
  //Validate that After configuration and submission of RFC Quote , opportunity should be change in Quoting stage.   
  aqObject.CheckProperty(Aliases.browser.page__login.InQuoting__panel, "contentText", cmpEqual, "Quoting");
   
   
}

