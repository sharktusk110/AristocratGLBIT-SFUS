//USEUNIT RFC_SOC_logic_untouched
//USEUNIT RFC_Quote_Creation


//Run C01 And C02 .
// In C02 opportunity is available (With approved RFC & SOC ) in Config stage.
// Create New RFC and SOC of existing Opportunity.

 
function Create_NEW_RFC()    
{
  
    Create_RFC_Quote()
    OpenRFC_Quote()
    RFC_Quote_Update()
    Delay(3000);
    ConfigGOpsSale()
    AddWVFEE()
    //Submitforapproval()
    Submitforapproval1()
    Create_SocQuote()


}