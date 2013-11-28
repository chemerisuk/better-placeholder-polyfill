# better-placeholder-polyfill [![Build Status](https://api.travis-ci.org/chemerisuk/better-placeholder-polyfill.png?branch=master)](http://travis-ci.org/chemerisuk/better-placeholder-polyfill)
> `[placeholder]` polyfill for [better-dom](https://github.com/chemerisuk/better-dom)

[LIVE DEMO](http://chemerisuk.github.io/better-placeholder-polyfill/) (open in IE < 10)

## Features
* [live extension](https://github.com/chemerisuk/better-dom/wiki/Live-extensions) - works for current and future content
* works for any kind of input (no issues with password) and textarea
* does nothing if native support exists

## Installing
Use [bower](http://bower.io/) to download this extension with all required dependencies.

    bower install better-placeholder-polyfill --save

This will clone the latest version of the __better-placeholder-polyfill__ into the `bower_components` directory at the root of your project.

Then append the following html elements on your page:

```html
<html>
<head>
    ...
    <!--[if IE]>
        <link href="bower_components/better-dom/dist/better-dom.htc" rel="htc" />
        <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
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
* Chrome
* Safari 4+
* Firefox 16+
* Opera 12.10+
* IE8+
