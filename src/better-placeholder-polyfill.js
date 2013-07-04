/*!
 * better-placeholder-polyfill (https://github.com/chemerisuk/better-placeholder-polyfill)
 * [placeholder] polyfill for better-dom (https://github.com/chemerisuk/better-dom)
 *
 * Copyright (c) 2013 Maksim Chemerisuk
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["DOM"], factory);
    } else {
        factory(window.DOM);
    }
})(function(DOM) {
    "use strict";

    if (DOM.supports("placeholder", "input")) return;

    DOM.extend("[placeholder]", [
        "input[style='box-sizing: border-box; position: absolute; color: graytext; background: none no-repeat 0 0; border-color: transparent']"
    ], {
        constructor: function(holder) {
            var offset = this.offset();

            this
                .on("focus", holder, "hide")
                .on("blur", this, "_showPlaceholder", [holder]);

            holder
                .set(this.get("placeholder"))
                .setStyle("width", offset.right - offset.left)
                .on("click", this, "fire", ["focus"]);

            if (this.get() || this.isFocused()) holder.hide();

            this.before(holder);
        },
        _showPlaceholder: function(holder) {
            if (!this.get()) holder.show();
        }
    });
});
