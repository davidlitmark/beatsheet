function findDistribution(range) {
  // Adjusted for novels, w. stasis=death and 5-point finale
  var breakpoints = [1/range, 0.04, 0.08, 0.09, 0.1, 0.2, 0.24, 0.5, 0.68, 0.77, 0.81, 0.85, 0.89, 0.93, 0.97, 1];
  var distributor = distribute(range);
  return breakpoints.map(distributor);
}

function distribute(range) {
  return function(m) {
    return Math.ceil(m * range);
  };
}

function buildOutput(outline) {
  var buf = [];
  buf[0] = "The opening image (" + outline[0] + ")";
  buf[1] = "Theme Stated (" + outline[1] + ")";
  buf[2] = "Set-up (" + outline[0] + " to " + outline[2] + ")";
  buf[3] = "Statis=Death (" + outline[3] + ")";
  buf[4] = "Catalyst (" + outline[4] + ")";
  buf[5] = "Debate (" + outline[4] + " to " + outline[5] + ")";
  buf[6] = "Break into two (" + outline[5] + ")";
  buf[7] = "B-story (" + outline[6] + ")";
  buf[8] = "Fun and Games (" + outline[6] + " to " + outline[7] + ")";
  buf[9] = "Midpoint (" + outline[7] + ")";
  buf[10] = "Bad Guys close in (" + outline[7] + " to " + outline[8] + ")";
  buf[11] = "All Is Lost (" + outline[8] + ")";
  buf[12] = "Dark Night of the Soul (" + outline[8] + " to " + outline[9] + ")";
  buf[13] = "Break Into Three (" + outline[9] + ")";
  buf[14] = "Gathering the team (" + outline[10] + ")";
  buf[15] = "Executing the Plan (" + outline[11] + ")";
  buf[16] = "The Hight Tower Suprise (" + outline[12] + ")";
  buf[17] = "Dig, Deep Down (" + outline[13] + ")";
  buf[18] = "The Execution of the New Plan (" + outline[14] + ")";
  buf[19] = "Final Image (" + outline[15] + ")";
  return buf.join();
}


