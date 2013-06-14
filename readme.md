# Beat Sheet Calculator

The Beat Sheet returns a JSON with all the beats and where they should appear in your story. The beats are from the Blake Snyder Beat Sheet or the "BS2" which includes the 15 essential "beats" or plot points that all stories should contain, according to the [Blake Snyder beat sheet][bs2] from his book [Save The Cat!][sc].

It also includes additions from [Save The Cat! Strikes Back][scsb]:

  * The stasis=death beat is added.
  * The five-point finale beats are added.

To better suit novels and short stories there's an option to generate a different beat sheet to use for fiction.

## Usage
Include beatsheet.min.js on your page, then use:

    var output = beatsheet(100,'fiction');

In this example, beatsheet takes two parameters:

  * The projected number of pages (or words). If you are writing a 400 pages long novel use 400, if you're writing 90000 words, use 90000.
  * The type of beat sheet you'd like to calculate. You can select between the original `bs2` and `fiction`.

The output is a JSON with all the beats and their page/word count:

    [{"title":"The opening image","begin":1,"end":"NULL"},{"title":"Theme Stated","begin":4,"end":"NULL"},{"title":"Set-up","begin":1,"end":8},{"title":"Statis=Death","begin":9,"end":"NULL"},{"title":"Catalyst","begin":10,"end":"NULL"},{"title":"Debate","begin":10,"end":20},{"title":"Break into two","begin":20,"end":"NULL"},{"title":"B-story","begin":24,"end":"NULL"},{"title":"Fun and Games","begin":24,"end":50},{"title":"Midpoint","begin":50,"end":"NULL"},{"title":"Bad Guys close in","begin":50,"end":68},{"title":"All Is Lost","begin":68,"end":"NULL"},{"title":"Dark Night of the Soul","begin":68,"end":77},{"title":"Break Into Three","begin":77,"end":"NULL"},{"title":"Gathering the team","begin":81,"end":"NULL"},{"title":"Executing the Plan","begin":85,"end":"NULL"},{"title":"The Height Tower Surprise","begin":89,"end":"NULL"},{"title":"Dig, Deep Down","begin":93,"end":"NULL"},{"title":"The Execution of the New Plan","begin":97,"end":"NULL"},{"title":"Final Image","begin":100,"end":"NULL"}]

## Available Beat Sheets

### bs2
This is the original Blake Snyder Beat Sheet or the "BS2".

### fiction
To better suit novels and short stories the first act is a bit shorter, based on input from [Plot & Stucture (James Scott Bell)][ps]. The reasoning behind this is that a written text demands more involvement from the reader than a movie that you can just sit back and watch, hence we must involve the reader sooner.

Compared to the original BS2 beat sheet the following is made:

  * The length of act 1 is 1/5 of the total length.


## Browser compatibility
Modern browsers, and IE9+.

## Changelog

0.1.3 (2013/06/14)
Can generate the original bs2 beat sheet

0.1.2 (2013/06/09)
Better lint and minification

0.1.1 (2013/05/11)
Adds Karma for browser testing

0.1.0 (2013/02/10)
Initial release

## Acknowlegements
Blake Snyder, for the BS2.

## License
Beatsheet is freely distributable under the terms of the MIT license.

Copyright (c) 2013 David Litmark

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[sc]: http://www.amazon.com/Save-Last-Book-Screenwriting-Youll/dp/1932907009/ref=la_B001JOXDUA_1_1?ie=UTF8&qid=1357587839&sr=1-1 "Save The Cat!"

[ps]: http://www.writersdigest.com/qp7-migration-books/wgf-plot-structure "Plot & Stucture (James Scott Bell)"

[scsb]: http://www.amazon.com/Save-Cat-Strikes-Back-Screenwriters/dp/0984157603/ref=la_B001JOXDUA_1_3?ie=UTF8&qid=1357587839&sr=1-3 "Save The Cat! Strikes Back"

[bs2]: https://www.google.se/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&sqi=2&ved=0CC8QFjAA&url=http%3A%2F%2Fblakesnyder.com%2FTHE_BLAKE_SNYDER_BEAT_SHEET.doc&ei=YSfrUJz5OMLm4QTP94HACQ&usg=AFQjCNGZEwjScEFLPJEVEAhA6KYP1doAxw "Blake Snyder beat sheet"