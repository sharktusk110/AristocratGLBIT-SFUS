

function getSOC_Lines(){
  server = "localhost"
  capabilities = {
  "browserName": "chrome",
  "screenResolution": "1920x1080"
   }
  url = "https://services.smartbear.com/samples/TestComplete15/smartstore/"
  Browsers.RemoteItem(server, capabilities).Run(url)
  
}

function getSOC_Liness(){
 
 var str1=Aliases.browser.page_RFCCreation.RFC.textnodeTabs.linkDetailtabItem.panelSocValidatedDate.textContent;
//Log.Message(aqDateTime.Today());
 var CurrentDate = aqDateTime.Today() 
 var str3 = aqDateTime.AddDays(CurrentDate, -1)

if(aqString.Contains(str1,CurrentDate)<0){
  if(aqString.Contains(str1,str3)<0){
  Log.Error("Not Matched");
  }else{
   Log.Checkpoint("Date Matched for SOC Validation");
  }
}else{
  Log.Checkpoint("Date Matched for SOC Validation");
}

}

