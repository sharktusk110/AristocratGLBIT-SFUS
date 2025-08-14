function AddWVFEE()
{
  Aliases.browser.page__Home.QuoteAddEditLineItems__tab.ClickButton();
 Delay(2000);
  
  Aliases.browser.page__EditLineItem.Add__button.ClickButton();
 Delay(2000);
  
  Aliases.browser.page__EditLineItem.AllFamilies__panel.Families__tab.ClickButton();
  Delay(2000);
  
  Aliases.browser.page__EditLineItem.AllFamilies__panel.Families__tab.Keys("[Down][Down][Down][Enter]");
 Delay(2000);
  
  Aliases.browser.Page__EditLineItem.ProductSearch__bar.SetText("WVFEE");
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
  Delay(2000);
  
  Aliases.browser.page__RFCQuote.OutrightSale__tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  Delay(2000);
  
  NameMapping.Sys.browser.pageHomeSearch.buttonSave.Click();
  delay(6000);
  
  Aliases.browser.page__EditLineItem.Close__button.Click();
  Delay(2000);
}



function Submitforapproval()
{
    Aliases.browser.page__RFCQuote.TaxCalculator__button.Click();
    Delay(2000);
    
    Aliases.browser.page__Home.Save__button.Click();
    Delay(5000);
 
    Aliases.browser.page__Account.SubmitForApproval__tab.click();
    Delay(2000);
  
    Aliases.browser.page__Home.CommentsApproval__field.Click();
  
    Aliases.browser.page__Home.CommentsApproval__field.Keys("Approve");
  
    Aliases.browser.page__Home.Submit__button.click();  
}


function EditRFCquote()

{
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Click();
  Delay(1000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Keys("[Down][Enter]")
  //Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerm6M__Tab.Click();
  
  Aliases.browser.page__Home.Save__button.Click();
  Delay(2000);
  
  
  
  Log.Message("Verify that BDE (quote owner) is not able to modify any field values on Outright Sale RFC Quote once it is submitted for approval")     
  aqObject.CheckProperty(Aliases.browser.Page__Login.RFCErrorAlert__text, "contentText", cmpEqual, "Review the errors on this page.\nSorry, you cannot change field 'Payment Terms' as this Quote is in Submitted For Approval status.\nReview the following fields\nApproval Status");


}


function ELI_Disabeld()

{
  
    Aliases.browser.page__Home.QuoteAddEditLineItems__tab.Click();
    Delay(2000);
  
    Aliases.browser.Page__RFCQuote.Click__Panel.Opport__Click.Click();
    Delay(2000);
    
    
    Log.Message("BDE should not be able to see the Add / Edit Lines buttons Like New / Existing")
    aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[@role='dialog']//section//c-add-edit-line-items//div//div[contains(@class, 'flex-item-one-autoscroll')]"), "Enabled", cmpEqual, true);

    
    Aliases.browser.page__EditLineItem.Close__button.Click();
    Delay(2000);
    
   Aliases.browser.page__Account.Cancel__Button.Click();

}


