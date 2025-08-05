function AddWVFEE()
{
  Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.EditLine__Bar.header.Add__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Families__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.textnodeAllFamilies.Fees__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.ProductSearch__Bar.SetText("WVFEE");
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.HelixPlusUpright__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.OutrightSaleNew__Tab.Click();
  Delay(2000);
  
  Aliases.browser.Page__EditLineItem.Continue__Button.ClickButton();
  Delay(2000);
  
  NameMapping.Sys.browser.pageHomeSearch.buttonSave.Click();
  delay(4000);
  
  NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.Click();
  Delay(2000);
}



function Submitforapproval()
{
    Aliases.browser.Page__PostAccountApproval.TaxCalculator__Button.Click();
    Delay(2000);
    
    Aliases.browser.Page__AccountCreation.Save__button.Click();
    Delay(5000);
 
    Aliases.browser.Page__SubmitForApproval.click();
    Delay(2000);
  
    Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Click();
  
    Aliases.browser.Page__SubmitForApproval.CommentApproval_Panel.CommentsApproval__Field.Keys("Approve");
  
    Aliases.browser.Page__SubmitForApproval.Submit__Button.click();  
}


function EditRFCquote()

{
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Button.Click();
  Delay(2000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerms__Tab.Click();
  Delay(1000);
  
  Aliases.browser.Page__RFCQuote.PaymentTerms__Panel.PaymentTerm6M__Tab.Click();
  
  Aliases.browser.Page__AccountCreation.Save__button.Click();
  Delay(2000);
  
  
  
  Log.Message("Verify that BDE (quote owner) is not able to modify any field values on Outright Sale RFC Quote once it is submitted for approval")     
  aqObject.CheckProperty(Aliases.browser.Page__Login.RFCErrorAlert__Text, "contentText", cmpEqual, "Review the errors on this page.\nSorry, you cannot change field 'Payment Terms' as this Quote is in Submitted For Approval status.\nReview the following fields\nApproval Status");


}


function ELI_Disabeld()

{
  
    Aliases.browser.Page__PostAccountApproval.AddEditLineItem__Button.Click();
    Delay(2000);
  
    Aliases.browser.Page__RFCQuote.Click__Panel.Opport__Click.Click();
    Delay(2000);
    
    
    Log.Message("BDE should not be able to see the Add / Edit Lines buttons Like New / Existing")
    aqObject.CheckProperty(Aliases.browser.Page__Login.FindElement("//div[@role='dialog']//section//c-add-edit-line-items//div//div[contains(@class, 'flex-item-one-autoscroll')]"), "Enabled", cmpEqual, true);

    
    NameMapping.Sys.browser.pageCasinoRoyaleAccountSalesforc.Close__Button.Click();
    Delay(2000);
    
    Aliases.browser.Page__PostAccountApproval.Detail__Tab.Cancel__Button.Click();

}


