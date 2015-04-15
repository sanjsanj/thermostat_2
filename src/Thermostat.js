var Thermostat = function() {
  this._temp = 20;
  this._psMode = true;
};

Thermostat.prototype.temp = function() {
  return this._temp;
};

Thermostat.prototype.upButton = function() {
  if (this._temp < 25) {
    this._temp ++;
  };
};

Thermostat.prototype.downButton = function() {
  if (this._temp > 10) {
    this._temp --;
  };
};

Thermostat.prototype.psStatus = function() {
  return this._psMode;
};
