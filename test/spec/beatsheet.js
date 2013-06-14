// Tests - beatsheet.js

(function () {

    'use strict';

    var expect = chai.expect;

    var beats = [
        {
            "title" :"The opening image",
            "begin":1,
            "end"  :"NULL"
        },
        {
            "title" :"Theme Stated",
            "begin":4,
            "end"  :"NULL"
        },
        {
            "title" :"Set-up",
            "begin":1,
            "end"  :8
        },
        {
            "title" :"Stasis=Death",
            "begin":9,
            "end"  :"NULL"
        },
        {
            "title" :"Catalyst",
            "begin":10,
            "end"  :"NULL"
        },
        {
            "title" :"Debate",
            "begin":10,
            "end"  :20
        },
        {
            "title" :"Break into two",
            "begin":20,
            "end"  :"NULL"
        },
        {
            "title" :"B-story",
            "begin":24,
            "end"  :"NULL"
        },
        {
            "title" :"Fun and Games",
            "begin":24,
            "end"  :50
        },
        {
            "title" :"Midpoint",
            "begin":50,
            "end"  :"NULL"
        },
        {
            "title" :"Bad Guys close in",
            "begin":50,
            "end"  :68
        },
        {
            "title" :"All Is Lost",
            "begin":68,
            "end"  :"NULL"
        },
        {
            "title" :"Dark Night of the Soul",
            "begin":68,
            "end"  :77
        },
        {
            "title" :"Break Into Three",
            "begin":77,
            "end"  :"NULL"
        },
        {
            "title" :"Gathering the team",
            "begin":81,
            "end"  :"NULL"
        },
        {
            "title" :"Executing the Plan",
            "begin":85,
            "end"  :"NULL"
        },
        {
            "title" :"The Height Tower Surprise",
            "begin":89,
            "end"  :"NULL"
        },
        {
            "title" :"Dig, Deep Down",
            "begin":93,
            "end"  :"NULL"
        },
        {
            "title" :"The Execution of the New Plan",
            "begin":97,
            "end"  :"NULL"
        },
        {
            "title" :"Final Image",
            "begin":100,
            "end"  :"NULL"
        }
    ];


    describe('Beatsheet', function () {
        it('returns the beatsheet based on the given input and strategy', function () {
            var output = beatsheet(100, 'fiction');
            expect(output).to.eql(beats);
        });


        describe('the size param', function() {

            it('should be a number', function () {
                expect(function(){ beatsheet('100', 'fiction'); }).to.throw(Error);
            });

            it('should be greater than 0', function () {
                expect(function(){ beatsheet(-1, 'fiction'); }).to.throw(Error);
            });

        });

        describe('the strategies param', function() {

            it('should exist', function () {
                expect(function(){ beatsheet(100, 'fail'); }).to.throw(Error);
            });

        });


    });

})();




