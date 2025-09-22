 


function Submitforapproval1()
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


