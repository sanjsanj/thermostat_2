var thermostat = new Thermostat();

$(document).ready(function(){

  var OpenWeather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'

  $('#powerbutton').click(function(){
    $('.screen').fadeToggle();
    thermostat.resetButton();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

  $.getJSON(OpenWeather, function(data) {
    getTemp = data.main.temp;
    temp = temperatureConverter(getTemp);
    $('#outsideTemperature').html(temp);
  });

  function temperatureConverter(temp){
    temp = temp - 273.15;
    return temp.toFixed(1);
  };

  var updateColor = function() {
    //  if (thermostat.tempColor() === 'green' ) {
    //     $("#temp").css({'color' : 'rgb(19, 113, 50)', 'font-size' : '200%'});
    // } else if (thermostat.tempColor() === 'yellow') {
    //     $("#temp").css({'color' : 'rgb(223, 193, 55)', 'font-size' : '200%'});
    // } else {
    //     $("#temp").css({'color' : 'rgb(204, 51, 51)', 'font-size' : '200%'});
    // };
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

  $('#psStatus').click(function(){
    thermostat.psButton();
    $('#temp').text(thermostat.temp());
    // $('#psStatus').css
  });

  $('#resetbutton').click(function(){
    thermostat.resetButton();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

});
