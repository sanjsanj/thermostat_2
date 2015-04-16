var thermostat = new Thermostat();

$(document).ready(function(){
  
  $('#temp').text(thermostat.temp());
  $('#up').click(function(){
    thermostat.upButton();
   $('#temp').text(thermostat.temp());
  });
 
});