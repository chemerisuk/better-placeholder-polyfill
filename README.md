# better-placeholder-polyfill [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]
> `[placeholder]` polyfill for [better-dom](https://github.com/chemerisuk/better-dom)

The `placeholder` attribute is quite useful and despite on "optional" sense in some UIs you have to include a polyfill that adds support in old browsers. The project implements consistent support for the `placeholder` attribute in browsers that do not handle it.

[LIVE DEMO](http://chemerisuk.github.io/better-placeholder-polyfill/) (open in IE < 10)

## Features
* [live extension](https://github.com/chemerisuk/better-dom/wiki/Live-extensions) - works for current and future content
* supports any kind of input (no issues with password) and textarea
* does nothing if native support exists

## Installing
Use [bower](http://bower.io/) to download this extension with all required dependencies.

    bower install better-placeholder-polyfill

This will clone the latest version of the __better-placeholder-polyfill__ into the `bower_components` directory at the root of your project.

Then append the following html elements on your page:

```html
<html>
<head>
    ...
    <!--[if IE]>
        <link href="bower_components/better-dom/dist/better-dom-legacy.htc" rel="htc"/>
        <script src="bower_components/better-dom/dist/better-dom-legacy.js"></script>
    <![endif]-->
</head>
<body>
    ...
    <script src="bower_components/better-dom/dist/better-dom.js"></script>
    <script src="bower_components/better-placeholder-polyfill/dist/better-placeholder-polyfill.js"></script>
</body>
</html>
```

## Browser support
#### Desktop
* Chrome
* Safari 6.0+
* Firefox 16+
* Opera 12.10+
* IE8+

#### Mobile
* iOS Safari 6+
* Android 2.3+
* Chrome for Android

[travis-url]: http://travis-ci.org/chemerisuk/better-placeholder-polyfill
[travis-image]: https://api.travis-ci.org/chemerisuk/better-placeholder-polyfill.png?branch=master

[coveralls-url]: https://coveralls.io/r/chemerisuk/better-placeholder-polyfill
[coveralls-image]: https://coveralls.io/repos/chemerisuk/better-placeholder-polyfill/badge.png?branch=master
