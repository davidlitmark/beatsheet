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

(function() {

  // Establish the root object.
  var root = this;

  // Create the beatsheet object.
  var beatsheet = function() {};

  // Export the beatsheet object.
  root.beatsheet = beatsheet;

  // Internal function for calculating distributions
  var distribute = function(range) {
      return function(m) {
        return Math.ceil(m * range);
      };
    };

  // Current version
  beatsheet.version = "0.1.0";

  var findBreakpoints = function(range) {
    return [1 / range, 0.04, 0.08, 0.09, 0.1, 0.2, 0.24, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
  };

  // Find the distribution over the range. The range can be either the page count or word count.
  beatsheet.findDistribution = function(range) {
    var breakpoints = findBreakpoints(range);
    var distributor = distribute(range);
    return breakpoints.map(distributor);
  };

  // Internal function for returning beats
  var getBeats = function () {
    return [
      "The opening image",
      "Theme Stated",
      "Set-up", 
      "Statis=Death", 
      "Catalyst", 
      "Debate", 
      "Break into two", 
      "B-story", 
      "Fun and Games", 
      "Midpoint",
      "Bad Guys close in",
      "All Is Lost",
      "Dark Night of the Soul",
      "Break Into Three",
      "Gathering the team",
      "Executing the Plan",
      "The Hight Tower Suprise",
      "Dig, Deep Down",
      "The Execution of the New Plan",
      "Final Image"];
  };

  // Builds the beatsheet as a long string
  beatsheet.printBS = function(outline) {
    var buf = [];
    var beats = getBeats();

    buf[0] = beats[0] + " (" + outline[0] + ")";
    buf[1] = beats[1] + " (" + outline[1] + ")";
    buf[2] = beats[2] + " (" + outline[0] + " to " + outline[2] + ")";
    buf[3] = beats[3] + " (" + outline[3] + ")";
    buf[4] = beats[4] + " (" + outline[4] + ")";
    buf[5] = beats[5] + " (" + outline[4] + " to " + outline[5] + ")";
    buf[6] = beats[6] + " (" + outline[5] + ")";
    buf[7] = beats[7] + " (" + outline[6] + ")";
    buf[8] = beats[8] + " (" + outline[6] + " to " + outline[7] + ")";
    buf[9] = beats[9] + " (" + outline[7] + ")";
    buf[10] = beats[10] + " (" + outline[7] + " to " + outline[8] + ")";
    buf[11] = beats[11] + " (" + outline[8] + ")";
    buf[12] = beats[12] + " (" + outline[8] + " to " + outline[9] + ")";
    buf[13] = beats[13] + " (" + outline[9] + ")";
    buf[14] = beats[14] + " (" + outline[10] + ")";
    buf[15] = beats[15] + " (" + outline[11] + ")";
    buf[16] = beats[16] + " (" + outline[12] + ")";
    buf[17] = beats[17] + " (" + outline[13] + ")";
    buf[18] = beats[18] + " (" + outline[14] + ")";
    buf[19] = beats[19] + " (" + outline[15] + ")";
    return buf.join();
  };

  beatsheet.calc = function (size) {
    var distribution = this.findDistribution(size);
    return this.printBS(distribution);
  };


}).call(this);