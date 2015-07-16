#HCURA Website

Credit to the Clean Blog theme by [Start Bootstrap](http://startbootstrap.com/).  Website available at [campus.hcura.org](campus.hcura.org).

Website built using Jekyll.  A guide to installing Jekyll [can be found here](http://jekyllrb.com/docs/installation/).  Once Jekyll is installed, view the site locally by running in the repository root:

    jekyll serve

This serves the website locally.

Javascipt is minified using gulp and uglify.  Only minified Javascript is run.  To minify Javascript, [first install node.js and npm here](https://nodejs.org/download/).  Then install gulp and all packages by running in the repository root:

    npm install --global gulp
    npm install --save-dev gulp
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-rename

Then, to minify all Javascript, run in the repository root:

    gulp compressjs
