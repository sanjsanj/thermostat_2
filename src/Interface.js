var thermostat = new Thermostat();

$(document).ready(function(){

  var updateColor = function() {
     if (thermostat.tempColor() === 'green' ) {
        $("#temp").css({'color' : 'rgb(19, 113, 50)', 'font-size' : '200%'});
    } else if (thermostat.tempColor() === 'yellow') {
        $("#temp").css({'color' : 'rgb(255, 255, 0)', 'font-size' : '200%'});
    } else {
        $("#temp").css({'color' : 'rgb(255, 0, 0)', 'font-size' : '200%'});
    };
  };

  $('#temp').text(thermostat.temp());

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
