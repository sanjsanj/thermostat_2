var thermostat = new Thermostat();

$(document).ready(function(){

  $('#temp').text(thermostat.temp());

  $('#up').click(function(){
    thermostat.upButton();
   $('#temp').text(thermostat.temp());
  });

  $('#down').click(function(){
    thermostat.downButton();
    $('#temp').text(thermostat.temp());
  });
});
