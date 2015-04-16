var thermostat = new Thermostat();

$(document).ready(function(){
  $('#temp').text(thermostat.temp());
});