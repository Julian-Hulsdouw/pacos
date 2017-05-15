# Pacos
Pacos is a simple boilerplate, with sass modules

## NPM
`npm install pacos --save-dev`

### Import components
To import sass files simply use the import function

`@import '~pacos/sass/reset'`

Sass components that are included:
* helpers
* reset

### Framework
We use bulma as our front-end framework. Just import what you need.  Check their [documentation](http://bulma.io/documentation/overview/modular/) how to load modules.

For example if you only want to load the bulma grid:
```
@import
	'~bulma/sass/utilities/_all',
	'~bulma/sass/grid/columns';
```

## Getting started
There are two ways to start your boilerplate:
* [Download the zip](https://github.com/Julian-Hulsdouw/pacos/archive/master.zip)
* Clone the repo: `git clone https://github.com/Julian-Hulsdouw/pacos.git`

## Browser support
* Chrome latest
* Firefox latest
* Opera latest
* Safari latest
* IE latest
Pacos works perfectly with almost all older versions of the browsers above, though IE certainly has large degradation prior to IE11.

## Copyright & License
Code copyright 2017 Julian Hulsdouw. Code released under the [MIT license](https://github.com/Julian-Hulsdouw/pacos/blob/master/LICENSE).
