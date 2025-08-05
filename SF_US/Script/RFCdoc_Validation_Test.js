//USEUNIT CreateRFCForAddress_Test


function GenerateQuote(){
   var VenuAddress="VENDOR #7333"
   var invoiceAddress="VENDOR #7333"
   var DelveryAddress= "VENDOR #7333"
  Aliases.browser.Page__PostAccountApproval.GenerateQuoteDoc__button.Click();
  Delay(6000);
  Aliases.browser.Page__EditLineItem.Pdf__frame.click();
  OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+VenuAddress+"*");
  OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+invoiceAddress+"*");
  OCR.Recognize(Aliases.browser.Page__EditLineItem.Pdf__frame).CheckText("*"+DelveryAddress+"*");  
   
  
  Aliases.browser.Page__Login.sectionHelp.buttonClose.Click();

} 