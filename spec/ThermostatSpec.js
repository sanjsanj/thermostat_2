describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when created', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temp()).toBe(20);
    });
  });

  describe('can', function() {

    it('increase temp by 1 with the \'up\' button', function() {
      thermostat.upButton();
      expect(thermostat.temp()).toBe(21);
    });
  });
});
