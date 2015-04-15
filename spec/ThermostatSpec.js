describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when created', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temp()).toBe(20);
    });

    it('has power saving mode on', function() {
      expect(thermostat.psStatus()).toBe(true);
    });
  });

  describe('can', function() {

    it('increase temp by 1 with the \'up\' button', function() {
      thermostat.upButton();
      expect(thermostat.temp()).toBe(21);
    });

    it('decrease temp by 1 with the \'down\' button', function() {
      thermostat.downButton();
      expect(thermostat.temp()).toBe(19);
    });
    
  });

  describe('has', function() {

    it('a minimum temp of 10', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.downButton();
      };
      expect(thermostat.temp()).toBe(10);
    });

    it('a maximum temp of 25 with power saving mode on', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toBe(25);
    });
  });
});