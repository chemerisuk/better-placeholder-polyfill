/**
 * @file src/better-placeholder-polyfill.js
 * @version 1.1.0 2013-12-08T14:59:13
 * @overview [placeholder] polyfill for better-dom
 * @copyright Maksim Chemerisuk 2013
 * @license MIT
 * @see https://github.com/chemerisuk/better-placeholder-polyfill
 */
(function(DOM) {
    "use strict";

    if (typeof DOM.create("input").get("placeholder") === "string") return;

    var PLACEHOLDER_KEY = "input-placeholder";

    DOM.extend("[placeholder]", {
        constructor: function() {
            if (!this.matches("input,textarea")) return;

            var placeholder = DOM.create("input[tabindex=-1 unselectable=on value=\"${v}\" style=\"${css}\"]", {v: this.get("placeholder"), css: "box-sizing: border-box; position: absolute; color: graytext; background: none no-repeat 0 0; border-color: transparent"});

            this
                .on({focus: this.onFocus, blur: this.onBlur})
                .data(PLACEHOLDER_KEY, placeholder)
                .before(placeholder);

            placeholder
                .on("mousedown", this, this.onPlaceholderClick)
                .style({
                    width: this.style("width"),
                    height: this.style("height"),
                    font: this.style("font"),
                    padding: this.style("padding"),
                    "text-align": this.style("text-align"),
                    "border-width": this.style("border-width")
                });

            if (this.get() || this.matches(":focus")) placeholder.hide();
        },
        onFocus: function() {
            this.data(PLACEHOLDER_KEY).hide();
        },
        onBlur: function() {
            if (!this.get()) this.data(PLACEHOLDER_KEY).show();
        },
        onPlaceholderClick: function() {
            this.fire("focus");

            return false;
        }
    });
}(window.DOM));
