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

    it('toggle power saving mode off', function() {
      thermostat.psButton();
      expect(thermostat.psStatus()).toBe(false);
    });

    it('reset the temp to 20', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      thermostat.resetButton();
      expect(thermostat.temp()).toBe(20);
    });

    it('set the temp to 25 when power saving mode is enabled', function() {
      thermostat.psButton();
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      thermostat.psButton();
      expect(thermostat.temp()).toBe(25);
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

    it('a maximum temp of 32 with power saving mode off', function() {
      thermostat.psButton();
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toBe(32);
    });
  });

  describe('displays', function() {

    it('green when temp is less than 18', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.downButton();
      };
      expect(thermostat.tempColor()).toBe('green');
    });

    it('yellow when temp is less than 25', function() {
      for (var i = 0; i < 2; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.tempColor()).toBe('yellow');
    });

    it('red when temp is 25 or above', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.tempColor()).toBe('red');
    });
  });
});
