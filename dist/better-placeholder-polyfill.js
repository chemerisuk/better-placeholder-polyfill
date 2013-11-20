/**
 * @file src/better-placeholder-polyfill.js
 * @version 1.1.0-rc.1 2013-11-20T13:41:46
 * @overview [placeholder] polyfill for better-dom
 * @copyright Maksim Chemerisuk 2013
 * @license MIT
 * @see https://github.com/chemerisuk/better-placeholder-polyfill
 */
(function(DOM) {
    "use strict";

    if (typeof DOM.create("input").get("placeholder") === "string") return;

    DOM.extend("[placeholder]", {
        constructor: function() {
            var holder = DOM.create("input[tabindex=-1 value='${v}' style='${css}']", {v: this.get("placeholder"), css: "box-sizing: border-box; position: absolute; color: graytext; background: none no-repeat 0 0; border-color: transparent"}),
                offset = this.offset();

            this
                .on("focus", function() { holder.hide() })
                .on("blur", function() { if (!this.get()) holder.show() });

            holder
                .style("width", offset.right - offset.left)
                .on("click", this, function() { this.fire("focus") });

            if (this.get() || this.matches(":focus")) holder.hide();

            this.before(holder);
        }
    });
}(window.DOM));
