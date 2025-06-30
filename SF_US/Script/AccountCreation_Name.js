

function generateRandomAccountName1() {
  // Generate a random number between 1 and 100000000 (you can change the range)
  var randomNumber = Math.floor(Math.random() * 1000) + 1;
  
  // Create the account name
  var accountName = "Test Account " + randomNumber;
  
  // Log it to the TestComplete log
  Log.Message("Generated Account Name: " + accountName);
  
  // Example: Set the value in a text box (replace with your actual object)
  // Aliases.MyApp.MainWindow.AccountNameTextbox.SetText(accountName);
 
  // Return the account name if needed
  return accountName;
}




