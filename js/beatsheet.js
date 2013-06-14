//! Beatsheet
//! (c) 2013 David Litmark
//! The beatsheet calculator may be freely distributed under the MIT license.

// The beat sheet distribution is based on the original Blake Snyder BS2 beat
// sheet from his book Save The Cat!, but adjusted for novels based on my own
// preferences, and with additions from his latest book:
//   * The length of act 1 is 1/5 instead of 1/4.
//   * The stasis=death beat is added. (1)
//   * The beats from the five-point finale are added. (1)
//
// (1) Mentioned in the book Save The Cat! Strikes Back.

(function () {

    'use strict';

    // Establish the root object.
    var root = this;

    // Establish the helper object.
    var Helper = function(range, strategy) {
        this.range = range;
        this.strategy = strategy;
    };

    Helper.prototype = {

        // Return the beat sheet breakpoints
        findBreakpoints : function () {
            return this.strategy();
        },

        // Function for calculating distributions
        distribute : function () {
            var range = this.range;
            return function ( m ) {
                return Math.ceil( m * range );
            };
        },

        // Find the distribution over the range. The range can be either the page count or word count.
        findDistribution : function () {
            var breakpoints = this.findBreakpoints();
            var distributor = this.distribute();
            return breakpoints.map( distributor );
        },

        // Return a JSON with all the beats
        populate : function ( position ) {
            return [
                {
                    "title" : "The opening image",
                    "begin" : position[0],
                    "end" : "NULL"
                },
                {
                    "title" : "Theme Stated",
                    "begin" : position[1],
                    "end" : "NULL"
                },
                {
                    "title" : "Set-up",
                    "begin" : position[0],
                    "end" : position[2]
                },
                {
                    "title" : "Stasis=Death",
                    "begin" : position[3],
                    "end" : "NULL"
                },
                {
                    "title" : "Catalyst",
                    "begin" : position[4],
                    "end" : "NULL"
                },
                {
                    "title" : "Debate",
                    "begin" : position[4],
                    "end" : position[5]
                },
                {
                    "title" : "Break into two",
                    "begin" : position[5],
                    "end" : "NULL"
                },
                {
                    "title" : "B-story",
                    "begin" : position[6],
                    "end" : "NULL"
                },
                {
                    "title" : "Fun and Games",
                    "begin" : position[6],
                    "end" : position[7]
                },
                {
                    "title" : "Midpoint",
                    "begin" : position[7],
                    "end" : "NULL"
                },
                {
                    "title" : "Bad Guys close in",
                    "begin" : position[7],
                    "end" : position[8]
                },
                {
                    "title" : "All Is Lost",
                    "begin" : position[8],
                    "end" : "NULL"
                },
                {
                    "title" : "Dark Night of the Soul",
                    "begin" : position[8],
                    "end" : position[9]
                },
                {
                    "title" : "Break Into Three",
                    "begin" : position[9],
                    "end" : "NULL"
                },
                {
                    "title" : "Gathering the team",
                    "begin" : position[10],
                    "end" : "NULL"
                },
                {
                    "title" : "Executing the Plan",
                    "begin" : position[11],
                    "end" : "NULL"
                },
                {
                    "title" : "The Height Tower Surprise",
                    "begin" : position[12],
                    "end" : "NULL"
                },
                {
                    "title" : "Dig, Deep Down",
                    "begin" : position[13],
                    "end" : "NULL"
                },
                {
                    "title" : "The Execution of the New Plan",
                    "begin" : position[14],
                    "end" : "NULL"
                },
                {
                    "title" : "Final Image",
                    "begin" : position[15],
                    "end" : "NULL"
                }
            ];
        }
    };

    // Establish the available strategies
    var strategies = {
        fiction : function(){
            return [1 / this.range, 0.04, 0.08, 0.09, 0.1, 0.2, 0.24, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
        },
        bs2 : function(){
            return [1 / this.range, 0.05, 0.09, 0.11, 0.18, 0.23, 0.27, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
        }
    };


    // The beatsheet object returns the beat sheet as a JSON
    var beatsheet = function ( size, strategy ) {

        if ( typeof size !== 'number' || size <= 0 ) {
            throw new Error('The size must be a number larger than 0.');
        }

        if ( !strategies[strategy] ) {
            throw new Error('The specified strategy does not exist.');
        }

        var helper = new Helper( size, strategies[strategy] );
        var distribution = helper.findDistribution();
        return helper.populate( distribution );
    };

    // Export the beatsheet object.
    root.beatsheet = beatsheet;

    // Current version
    beatsheet.version = '0.1.3';

}).call( this );