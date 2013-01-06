describe('#findDistribution', function() {
  it('returns the breakpoints distributed over the range', function() {
    var output = beatsheet.findDistribution(100);
    expect(output).to.eql([1, 4, 8, 9,10, 20, 24, 50, 68, 77, 81, 85, 89, 93, 97, 100]);
  });
});


// functions below are not testable no more since they are private, unless I use a spy. Remove these from tests?

// describe('#distribute', function() {
//   it('returns a function', function() {
//     var distributor = beatsheet.distribute(2);
//     expect(distributor).to.be.a('Function');
//   });
// });

// describe('#distributor', function() {
//   it('multiplies the input w. the predefined number', function() {
//     var distributor = beatsheet.distribute(2);
//     expect(distributor(4)).to.equal(8);
//   });
// });