[![npm](https://img.shields.io/npm/v/pacos.svg)](https://www.npmjs.com/package/pacos)
[![npm](https://img.shields.io/david/expressjs/express.svg)](https://www.npmjs.com/package/bulma)

# Pacos
Pacos is a simple boilerplate, with scss modules

## Usage
`npm install pacos --save-dev`

### Import components
To import all base scss files simply use the import function:

`@import '~pacos/scss/base/all'`

Components that are included:
- HTML
    * browser
- SCSS
    * breakpoints
    * browser
    * grid *
    * helpers
    * reset

_* dependent on bulma_

#### Variables available
* $column-gutter


### Framework
We use bulma as our front-end framework. Just import what you need.  Check their [documentation](http://bulma.io/documentation/overview/modular/) how to load modules.

For example if you only want to load the bulma grid:
```
@import
	'~bulma/sass/utilities/_all',
	'~bulma/sass/grid/columns';
```

### Guidelines
We follow the scss/css guidlines from Airbnb. Read their [documentation](https://github.com/airbnb/css) for the guidlines.

## Create your own
* Clone the repo: `git clone https://github.com/Julian-Hulsdouw/pacos.git`
* [Download the latest release](https://github.com/Julian-Hulsdouw/pacos/archive/master.zip)

## Browser support
* Chrome latest
* Firefox latest
* Opera latest
* Safari latest
* IE latest
Pacos works perfectly with almost all older versions of the browsers above, though IE certainly has large degradation prior to IE11.

## Copyright & License
Code copyright 2017 Julian Hulsdouw. Code released under the [MIT license](https://github.com/Julian-Hulsdouw/pacos/blob/master/LICENSE).
