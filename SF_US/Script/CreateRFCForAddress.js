//USEUNIT DataRead

function  OpenExistingAccount()
{
  

  var LoginDataMap=dataReader("SF_opportunity"); //Sheetname
  var AccountName=LoginDataMap["B04"]["AccountName"];
  


 Aliases.browser.Page__PreAccountApproval.Home__Panel.UserLogedIn__Panel.GlobalAccount__Tab.Click();
 Delay(2000);
 
 Aliases.browser.Page__AccountCreation.NewAccount__Panel.Account__Tab.Click();
 Delay(2000);
 
 Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Click();
 Delay(1000);
 
 Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.SetText(AccountName);
 Delay(2000);

 Aliases.browser.Page__PreAccountApproval.Home__Panel.headerOneheader2.GlobalSearch__Field.Keys("[Enter]");
  Delay(3000);

 Aliases.browser.Page__PreAccountApproval.SearchAccount_Page.SelectAccount_Panel.Select__Account2.Click();
 Delay(2000);
 
 Aliases.browser.Page__PreAccountApproval.Detail__Panel.Related__Tab.Click();
 Delay(3000);
 
 Aliases.browser.Page__PreAccountApproval.RelatedQuickLink__Tab.Address__Link.Click();
 Delay(2000);
 
 Log.Message("Capture Delivery Address")
 Account_Filters(false,"Delivery")
 
 Log.Message("Capture Invoice Address")
 Account_Filters(true,"Invoice")
 
 Log.Message("Capture Venu Address")
 Account_Filters(true,"Venu")
 
}

Aliases.browser.Page__PostAccountApproval.D365AdressBox_Panel.D365Adress_Tab.QuickListAddress__Button
Aliases.browser.Page__PostAccountApproval.D365AdressBox_Panel.Account_R2C1_label

function Account_Filters(Flag1,Flag2)
{
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.ShowQuickFilters__button.Click();
  if (Flag1=== true){
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.ClearAllFilters__button.Click();
  Delay(1000);}
  
  if (Flag2==="Delivery"){
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.DeliveryAddress__label.Click();}
  
  else if(Flag2==="Invoice"){
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.InvoiceAddress__label.Click();}
  
  else if(Flag2==="Venu"){
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.VenueAddress__label.Click();}
  
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.Apply__button.Click();
  Aliases.browser.Page__PreAccountApproval.Home__Panel.AccountsTable__panel.CloseFilters__button.Click();

}