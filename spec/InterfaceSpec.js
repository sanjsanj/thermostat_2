describe('Interface', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temp', function(){
    expect('#temp').toContainText('20');
  });

  it('can increase temp by 1', function(){
    $("#up").click();
    expect('#temp').toContainText('21');
  });
  
  it('can decrease temp by 1', function(){
    $('#down').click();
    expect('#temp').toContainText('19');
  });
});
