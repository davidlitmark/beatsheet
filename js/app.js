// BeatSheet Calculator (for novels)
// (c) 2013 David Litmark
// The beatsheet calculator may be freely distributed under the MIT license.

// The beat sheet distribution is based on the original Blake Snyder BS2 beat
// sheet from his book Save The Cat!, but adjusted for novels based on my own
// preferences, and with additions from his latest book:
//   * The length of act 1 is 1/5 instead of 1/4.
//   * The statis=death beat is added. (1)
//   * The five-point finale beats are added. (1)
//
// (1) Mentioned in the book Save The Cat! Strikes Back.

;
(function () {
    "use strict";

    // Establish the root object.
    var root = this;

    // Create the beatsheet object.
    var beatsheet = {};
//    function(size){
//       return this.generate(size);
//    };

    // Export the beatsheet object.
    root.beatsheet = beatsheet;

    // Current version
    beatsheet.version = "0.1.0";

    var findBreakpoints = function ( range ) {
        return [1 / range, 0.04, 0.08, 0.09, 0.1, 0.2, 0.24, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
    };

    // Internal function for calculating distributions
    var distribute = function ( range ) {
        return function ( m ) {
            return Math.ceil( m * range );
        };
    };

    // Find the distribution over the range. The range can be either the page count or word count.
    beatsheet.findDistribution = function ( range ) {
        var breakpoints = findBreakpoints( range );
        var distributor = distribute( range );
        return breakpoints.map( distributor );
    };

    beatsheet.build = function ( outline ) {
        return [
            {
                "beat"  : "The opening image",
                "begin" : outline[0],
                "end"   : "NULL"
            },
            {
                "beat"  : "Theme Stated",
                "begin" : outline[1],
                "end"   : "NULL"
            },
            {
                "beat"  : "Set-up",
                "begin" : outline[0],
                "end"   : outline[2]
            },
            {
                "beat"  : "Statis=Death",
                "begin" : outline[3],
                "end"   : "NULL"
            },
            {
                "beat"  : "Catalyst",
                "begin" : outline[4],
                "end"   : "NULL"
            },
            {
                "beat"  : "Debate",
                "begin" : outline[4],
                "end"   : outline[5]
            },
            {
                "beat"  : "Break into two",
                "begin" : outline[5],
                "end"   : "NULL"
            },
            {
                "beat"  : "B-story",
                "begin" : outline[6],
                "end"   : "NULL"
            },
            {
                "beat"  : "Fun and Games",
                "begin" : outline[6],
                "end"   : outline[7]
            },
            {
                "beat"  : "Midpoint",
                "begin" : outline[7],
                "end"   : "NULL"
            },
            {
                "beat"  : "Bad Guys close in",
                "begin" : outline[7],
                "end"   : outline[8]
            },
            {
                "beat"  : "All Is Lost",
                "begin" : outline[8],
                "end"   : "NULL"
            },
            {
                "beat"  : "Dark Night of the Soul",
                "begin" : outline[8],
                "end"   : outline[9]
            },
            {
                "beat"  : "Break Into Three",
                "begin" : outline[9],
                "end"   : "NULL"
            },
            {
                "beat"  : "Gathering the team",
                "begin" : outline[10],
                "end"   : "NULL"
            },
            {
                "beat"  : "Executing the Plan",
                "begin" : outline[11],
                "end"   : "NULL"
            },
            {
                "beat"  : "The Height Tower Surprise",
                "begin" : outline[12],
                "end"   : "NULL"
            },
            {
                "beat"  : "Dig, Deep Down",
                "begin" : outline[13],
                "end"   : "NULL"
            },
            {
                "beat"  : "The Execution of the New Plan",
                "begin" : outline[14],
                "end"   : "NULL"
            },
            {
                "beat"  : "Final Image",
                "begin" : outline[15],
                "end"   : "NULL"
            }
        ];
    };

    beatsheet.generate = function ( size ) {
        var distribution = this.findDistribution( size );
        var result = this.build( distribution );
        return JSON.stringify( result );
    };

}).call( this );