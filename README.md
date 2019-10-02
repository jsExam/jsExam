# jsExam - jExam enrollment schedules at a glance 👀

_jsExam offers a way to view more detailled information on jExam enrollment schedules._

## Features

- [x] See, when enrollment starts
- [x] See, when enrollment ends

Optional and maybe added in the future:

- [ ] Search for lectures directly by name

Feature Requests are welcome via the [Issues](https://github.com/jsExam/jsExam/issues) panel.

## Quickstart

1. Visit [jExam](https://jexam.inf.tu-dresden.de/de.jexam.web.v4.5/spring/welcome) and find out the ID of the desired lecture via a html inspector of your choice.
2. Copy that ID and paste it to our [App](https://jsexam.github.io/jsExam/). The App searches automatically for that lecture and displays further information.

## How does it work?

jsExam is a prettified interface to the `getLectures` `ajax` json interface of jExam, which is accessible under `/de.jexam.web.v4.5/spring/lectures/ajax`. To conform to cross origin policies, jsExam tunnels all requests to jExam via an [API](https://github.com/jsExam/jsExam/tree/master/api).

## Concepts

jsExam is a SPA build on top off React 16, Webpack 4, Babel 7. It includes Hot Module Replacement via webpack-dev-server. We will use Babel as a compiler for writing next generation JavaScript. Webpack packs our many modules into a few bundled assets thus allowing for code splitting. Our webpack config consists of style-loader, css-loader and sass-loader for transforming our scss code into css, html-loader and html-webpack-plugin to serve our index.html and babel-loader to load our JavaScript. To ensure a consistent style and formatting of code we use ESLint and Prettier with our opinionated default settings for react development.

To start a local development environment you will have to:

1. Install all dependencies with your your package manager of choice. We prefer [yarn](https://github.com/yarnpkg/yarn).

   Simply run `$ yarn install` OR `$ npm install`

2. Run the react app in development mode with hot module replacement via webpack dev server

   Simply run `$ yarn run start` OR `$ npm run start`

Then open your browser at `localhost:3000`.

To generate a static build of the application execute `$ yarn run build` OR `$ npm run build`. You will know have a `/dist` folder in the root directory of this repository containing all files. We host these static files on our [Site](https://jsexam.github.io/jsExam/) by simply serving the directory over Github Pages.

## Technologies used

- [React 16](https://github.com/facebook/react)
- [Webpack 4](https://github.com/webpack/webpack) [ Module Bundler ]
- [Babel 7](https://github.com/babel/babel) [ Compiler for JSX and ES6,ES7,ES8 ]
- [Eslint](https://github.com/eslint/eslint/) [ pluggable tool for identifying and reporting on patterns ]
- [Prettier](https://github.com/prettier/prettier) [ Opinionated Code Formatter ]
- [Bulma](https://github.com/jgthms/bulma) [Modern CSS framework based on Flexbox]
- [Anime.JS](https://github.com/juliangarnier/anime/) [JavaScript animation engine]
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [Webpack dev server](https://github.com/webpack/webpack-dev-server)

## License

[Apache-2.0](https://github.com/jsExam/jsExam/blob/master/LICENSE)

## Legal disclaimer

jsExam does not permanently store any user specific information.

#### This service comes without any warranty. If the jExam team requests a takedown of this activity, we will be consient.
