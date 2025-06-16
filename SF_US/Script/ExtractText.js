function ExtractVerificationCode(InStr)
{
var regEx, Matches, i;
var ResStr = ""
//var InStr = "You recently logged in to Salesforce from a browser or app that we don't recognize. Browser: ChromeOperating System: Windows 10Username: crmtest.4@aristocrat.com.usqa1To ensure your account's security, we need to verify your identity. Enter the following code where prompted by Salesforce.Verification Code: 872221If you didn't recently log in to Salesforce, or you don't recognize this browser or operating system, contact your Salesforce administrator.";
  // Set regular expression pattern that specifies an identity verification code
  regEx = /\d{6}/g;
  // Perform search operation
  Matches = InStr.match(regEx);
  // Iterate through Matches array
  for (i=0; i<Matches.length; i++)

    {
      ResStr=ResStr+Matches[i];
    }

  Log.Message("Text found: "+ResStr);

//Assign found text to project variable
Project.Variables.verificationCode = ResStr;
}
