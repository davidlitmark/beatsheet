var range = [1, 4, 8, 9, 10, 20, 24, 50, 68, 77, 81, 85, 89, 93, 97, 100];

describe('#findDistribution', function() {
  it('returns the breakpoints distributed over the range', function() {
    var output = beatsheet.findDistribution(100);
    expect(output).to.eql(range);
  });
});

describe('#buildOutput', function() {
  it('returns a description of the output', function() {
    var output = beatsheet.buildOutput(range);
    expect(output).to.eql(
    	  "The opening image (1)"
    	+ ",Theme Stated (4)"
    	+ ",Set-up (1 to 8)"
    	+ ",Statis=Death (9)"
    	+ ",Catalyst (10)"
    	+ ",Debate (10 to 20)"
    	+ ",Break into two (20)"
    	+ ",B-story (24)"
    	+ ",Fun and Games (24 to 50)"
    	+ ",Midpoint (50)"
    	+ ",Bad Guys close in (50 to 68)"
    	+ ",All Is Lost (68)"
    	+ ",Dark Night of the Soul (68 to 77)"
    	+ ",Break Into Three (77)"
    	+ ",Gathering the team (81)"
    	+ ",Executing the Plan (85)"
    	+ ",The Hight Tower Suprise (89)"
    	+ ",Dig, Deep Down (93)"
    	+ ",The Execution of the New Plan (97)"
    	+ ",Final Image (100)"
    	);
  });
});