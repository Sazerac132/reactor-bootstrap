# reactor-bootstrap
A framework using react.js to quickly get up and running for front-end projects using [React](https://facebook.github.io/react/).

## Prerequisites
- [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Installing node.js from the link on the left will install both of these.
- [gulp.js](http://gulpjs.com/) doesn't need to be installed globally but can make some things easier: `npm install -g gulp`

## Creating a new project
- Fork this repository with the button to the top-right.
- Give the project an awesome name.
- CD into the directory: `cd awesome-name`
- Install dependencies: `npm install`
- That's pretty much it. You're good to go!

## Commands
- `npm run build` or `gulp build` - triggers the build task; versions assets will be put in `dist/`.
- `npm start` or `gulp dev` - starts webpack's dev server at localhost:8080.
 
## Technologies leveraged
- [React](https://facebook.github.io/react/) - a JavaScript framework..
- [webpack](https://webpack.github.io/) and [webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html).
- [PostCSS](http://postcss.org/), a CSS postprocessor.
  - [Autoprefixer](https://github.com/postcss/autoprefixer) - adds required vendor prefixes to CSS rules based on values from [Can I Use](http://caniuse.com/).
  - [React CSS Modules](https://github.com/gajus/react-css-modules) - automatic scoping of CSS selectors by file.
  - Further plugins can be added to [postcss.config.js](./postcssconfig.js) as desired.
- [Font Awesome](http://fontawesome.io/) for some slightly more abstract typography requirements.

## License
ISC (c) 2017 Thomas McDevitt