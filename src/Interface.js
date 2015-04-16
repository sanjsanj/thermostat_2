var thermostat = new Thermostat();

$(document).ready(function(){

  var updateColor = function() {
     if (thermostat.tempColor() === 'green' ) {
        $("#temp").css({'color' : 'rgb(19, 113, 50)', 'font-size' : '200%'});
    } else if (thermostat.tempColor() === 'yellow') {
        $("#temp").css({'color' : 'rgb(223, 193, 55)', 'font-size' : '200%'});
    } else {
        $("#temp").css({'color' : 'rgb(204, 51, 51)', 'font-size' : '200%'});
    };
  };
  $('#temp').text(thermostat.temp());
  $('#temp').text(function(){
    updateColor();
  });

  $('#up').click(function(){
    thermostat.upButton();
    updateColor();
   $('#temp').text(thermostat.temp());
  });

  $('#down').click(function(){
    thermostat.downButton();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

  $('#psStatus').change(function(){
    thermostat.psButton();
      $('#temp').text(thermostat.temp());
  });



});
