// Tests for BeatSheet Calculator (for novels)
// (c) 2013 David Litmark

(function () {

    "use strict";

    var range = [1, 4, 8, 9, 10, 20, 24, 50, 68, 77, 81, 85, 89, 93, 97, 100];
    //var expectedOutput =
    //		"The opening image (1)"
    //    	+ ",Theme Stated (4)"
    //    	+ ",Set-up (1 to 8)"
    //    	+ ",Statis=Death (9)"
    //    	+ ",Catalyst (10)"
    //    	+ ",Debate (10 to 20)"
    //    	+ ",Break into two (20)"
    //    	+ ",B-story (24)"
    //    	+ ",Fun and Games (24 to 50)"
    //    	+ ",Midpoint (50)"
    //    	+ ",Bad Guys close in (50 to 68)"
    //    	+ ",All Is Lost (68)"
    //    	+ ",Dark Night of the Soul (68 to 77)"
    //    	+ ",Break Into Three (77)"
    //    	+ ",Gathering the team (81)"
    //    	+ ",Executing the Plan (85)"
    //    	+ ",The Hight Tower Suprise (89)"
    //    	+ ",Dig, Deep Down (93)"
    //    	+ ",The Execution of the New Plan (97)"
    //    	+ ",Final Image (100)"

    var result = [
        {
            "beat" :"The opening image",
            "begin":1,
            "end"  :"NULL"
        },
        {
            "beat" :"Theme Stated",
            "begin":4,
            "end"  :"NULL"
        },
        {
            "beat" :"Set-up",
            "begin":1,
            "end"  :8
        },
        {
            "beat" :"Statis=Death",
            "begin":9,
            "end"  :"NULL"
        },
        {
            "beat" :"Catalyst",
            "begin":10,
            "end"  :"NULL"
        },
        {
            "beat" :"Debate",
            "begin":10,
            "end"  :20
        },
        {
            "beat" :"Break into two",
            "begin":20,
            "end"  :"NULL"
        },
        {
            "beat" :"B-story",
            "begin":24,
            "end"  :"NULL"
        },
        {
            "beat" :"Fun and Games",
            "begin":24,
            "end"  :50
        },
        {
            "beat" :"Midpoint",
            "begin":50,
            "end"  :"NULL"
        },
        {
            "beat" :"Bad Guys close in",
            "begin":50,
            "end"  :68
        },
        {
            "beat" :"All Is Lost",
            "begin":68,
            "end"  :"NULL"
        },
        {
            "beat" :"Dark Night of the Soul",
            "begin":68,
            "end"  :77
        },
        {
            "beat" :"Break Into Three",
            "begin":77,
            "end"  :"NULL"
        },
        {
            "beat" :"Gathering the team",
            "begin":81,
            "end"  :"NULL"
        },
        {
            "beat" :"Executing the Plan",
            "begin":85,
            "end"  :"NULL"
        },
        {
            "beat" :"The Height Tower Surprise",
            "begin":89,
            "end"  :"NULL"
        },
        {
            "beat" :"Dig, Deep Down",
            "begin":93,
            "end"  :"NULL"
        },
        {
            "beat" :"The Execution of the New Plan",
            "begin":97,
            "end"  :"NULL"
        },
        {
            "beat" :"Final Image",
            "begin":100,
            "end"  :"NULL"
        }
    ];

    var serializedResult = JSON.stringify(result);

    describe('#findDistribution', function () {
        it('returns the breakpoints distributed over the range', function () {
            var output = beatsheet.findDistribution(100);
            expect(output).to.eql(range);
        });
    });

//    describe('#print', function () {
//        it('returns a description of the output', function () {
//            var output = beatsheet.print(range);
//            expect(output).to.eql(serializedResult);
//        });
//    });

    describe('#generate', function () {
        it('returns the beatsheet based the given input', function () {
            var output = beatsheet.generate(100);
            expect(output).to.eql(serializedResult);
        });
    });


})();




