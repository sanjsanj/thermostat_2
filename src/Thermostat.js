var Thermostat = function() {
  this._temp = 20;
  this._psMode = true;
};

Thermostat.prototype.temp = function() {
  return this._temp;
};

Thermostat.prototype.upButton = function() {
  if (this._psMode && this._temp < 25) {
    this._temp ++;
  };
  if (!this._psMode && this._temp < 32) {
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

Thermostat.prototype.psButton = function() {
  this._psMode = !this._psMode;
  if (this._temp > 25) {
    this._temp = 25;
  };
};

Thermostat.prototype.resetButton = function() {
  this._temp = 20;
};

Thermostat.prototype.tempColor = function() {
  if (this._temp < 18) {
    return 'green';
  };
  if (this._temp < 25) {
    return 'yellow';
  };
  return 'red';
};
