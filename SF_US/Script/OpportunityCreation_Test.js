//USEUNIT OpportunityCreation

function New_Opportunity_Create(){
  var TestCaseID="B02"
  OpenAccount_Page()
  Create_opportunity(TestCaseID);
  Opportunity_Success_Validation();
}



