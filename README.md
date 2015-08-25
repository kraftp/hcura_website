#HCURA Website

Credit to the Clean Blog theme by [Start Bootstrap](http://startbootstrap.com/).  Credit to wowthemes.net for their HTML [theme](http://www.wowthemes.net/studio-francesca-free-responsive-template/), which we adapted to Jekyll. Website available at [hcura.org](http://hcura.org).

Website built using Jekyll.  A guide to installing Jekyll [can be found here](http://jekyllrb.com/docs/installation/).  Once Jekyll is installed, view the site locally by running in the repository root:

    jekyll serve

This serves the website locally.

Javascipt is minified using Uglify while CSS is minified and compacted using UnCSS and CSSO then concatenated and critical CSS is extracted using Critical and then inlined.  To minify Javascript or process CSS, [first install node.js and npm here](https://nodejs.org/download/).  Then install gulp and all packages by running in the repository root:

    npm install --global gulp
    npm install --save-dev gulp
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-concat
    npm install --save-dev gulp-csso
    npm install --save-dev gulp-uncss
    npm install --save-dev gulp-rename
    npm install --save critical

Then, to minify all Javascript, run in the repository root:

    gulp compressjs

To extract critical CSS and compactify, minify, and concatenate the rest, run in the repository root:

    gulp processcss

Note that before running either of these, you must run *jekyll serve* to generate a *_site* folder.
