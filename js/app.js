// BeatSheet Calculator (for novels)
// (c) 2013 David Litmark
// The beatsheet calculator may be freely distributed under the MIT license.

// The beat sheet distribution is based on the original Blake Snyder BS2 beat
// sheet from his book Save The Cat!, but adjusted for novels based on my own
// preferences, and with additions from his latest book:
//   * The length of act 1 is 1/5 instead of 1/4.
//   * The statis=death beat is added. (1)
//   * The beats from the five-point finale are added. (1)
//
// (1) Mentioned in the book Save The Cat! Strikes Back.

(function () {
    "use strict";

    // Establish the root object.
    var root = this;

    // Establish the helper object
    var helpers = {

        // Return the beat sheet breakpoints
        findBreakpoints : function ( range ) {
            return [1 / range, 0.04, 0.08, 0.09, 0.1, 0.2, 0.24, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
        },

        // Function for calculating distributions
        distribute : function ( range ) {
            return function ( m ) {
                return Math.ceil( m * range );
            };
        },

        // Find the distribution over the range. The range can be either the page count or word count.
        findDistribution : function ( range ) {
            var breakpoints = this.findBreakpoints( range );
            var distributor = this.distribute( range );
            return breakpoints.map( distributor );
        },

        // Return a JSON with all the beats
        populate : function ( position ) {
            return [
                {
                    "beat" : "The opening image",
                    "begin" : position[0],
                    "end" : "NULL"
                },
                {
                    "beat" : "Theme Stated",
                    "begin" : position[1],
                    "end" : "NULL"
                },
                {
                    "beat" : "Set-up",
                    "begin" : position[0],
                    "end" : position[2]
                },
                {
                    "beat" : "Statis=Death",
                    "begin" : position[3],
                    "end" : "NULL"
                },
                {
                    "beat" : "Catalyst",
                    "begin" : position[4],
                    "end" : "NULL"
                },
                {
                    "beat" : "Debate",
                    "begin" : position[4],
                    "end" : position[5]
                },
                {
                    "beat" : "Break into two",
                    "begin" : position[5],
                    "end" : "NULL"
                },
                {
                    "beat" : "B-story",
                    "begin" : position[6],
                    "end" : "NULL"
                },
                {
                    "beat" : "Fun and Games",
                    "begin" : position[6],
                    "end" : position[7]
                },
                {
                    "beat" : "Midpoint",
                    "begin" : position[7],
                    "end" : "NULL"
                },
                {
                    "beat" : "Bad Guys close in",
                    "begin" : position[7],
                    "end" : position[8]
                },
                {
                    "beat" : "All Is Lost",
                    "begin" : position[8],
                    "end" : "NULL"
                },
                {
                    "beat" : "Dark Night of the Soul",
                    "begin" : position[8],
                    "end" : position[9]
                },
                {
                    "beat" : "Break Into Three",
                    "begin" : position[9],
                    "end" : "NULL"
                },
                {
                    "beat" : "Gathering the team",
                    "begin" : position[10],
                    "end" : "NULL"
                },
                {
                    "beat" : "Executing the Plan",
                    "begin" : position[11],
                    "end" : "NULL"
                },
                {
                    "beat" : "The Height Tower Surprise",
                    "begin" : position[12],
                    "end" : "NULL"
                },
                {
                    "beat" : "Dig, Deep Down",
                    "begin" : position[13],
                    "end" : "NULL"
                },
                {
                    "beat" : "The Execution of the New Plan",
                    "begin" : position[14],
                    "end" : "NULL"
                },
                {
                    "beat" : "Final Image",
                    "begin" : position[15],
                    "end" : "NULL"
                }
            ];
        }
    };

    // The beatsheet object returns the beat sheet as a JSON
    var beatsheet = function ( size ) {
        var distribution = helpers.findDistribution( size );
        var result = helpers.populate( distribution );
        return JSON.stringify( result );
    };

    // Export the beatsheet object.
    root.beatsheet = beatsheet;

    // Current version
    beatsheet.version = "0.1.0";

}).call( this );