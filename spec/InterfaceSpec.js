describe('Interface', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('can toggle off', function(){
    $("#powerbutton").click();
    expect($('.container').is(":hidden")).toBe(true);
  });

  it('displays default temp', function(){
    expect('#temp').toContainText('20');
  });

  it('displays power saving mode on by default', function(){
    expect('#psStatus').toBeChecked();
  });

  it('can increase temp by 1', function(){
    $("#up").click();
    expect('#temp').toContainText('21');
  });

  it('can decrease temp by 1', function(){
    $('#down').click();
    expect('#temp').toContainText('19');
  });

  it('displays green text when temp is below 18 degrees', function(){
    $('#down').click();
    $('#down').click();
    $('#down').click();
    expect($('#temp').css('color')).toEqual('rgb(19, 113, 50)');
  });

  it('displays yellow text when temp is between 18 and 25 degrees', function(){
    expect($('#temp').css('color')).toEqual('rgb(223, 193, 55)');
  });

  it('displays red text when temp is above 25 degrees', function(){
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    $('#up').click();
    expect($('#temp').css('color')).toEqual('rgb(204, 51, 51)');
  });
});
