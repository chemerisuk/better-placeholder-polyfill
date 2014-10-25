/**
 * better-placeholder-polyfill: [placeholder] polyfill for better-dom
 * @version 1.3.0 Sat, 25 Oct 2014 21:05:59 GMT
 * @link https://github.com/chemerisuk/better-placeholder-polyfill
 * @copyright 2014 Maksim Chemerisuk
 * @license MIT
 */
(function(DOM) {
    "use strict";

    var placeholder = DOM.create("input").get("placeholder");

    DOM.extend("[placeholder]", typeof placeholder !== "string", {
        constructor: function() {
            var placeholder = DOM.create("span.better-placehoder[unselectable=on aria-hidden=true]");

            placeholder
                .css(this.css(["width", "height", "font", "padding", "text-align", "border-width"]))
                .on("mousedown", this.onPlaceholderClick)
                .set(this.get("placeholder"));

            this
                .on("focus", [placeholder], this.onFocus)
                .on("blur", [placeholder], this.onBlur)
                .before(placeholder);

            if (this.get() || this.matches(":focus")) {
                placeholder.css("display", "none");
            }

            this.defineAttribute("placeholder", {
                get: function()  {return placeholder.get()},
                set: function(value)  {
                    placeholder.set(value);

                    return value;
                }
            });
        },
        onFocus: function(placeholder) {
            placeholder.css("display", "none");
        },
        onBlur: function(placeholder) {
            if (!this.get()) {
                placeholder.css("display", "");
            }
        },
        onPlaceholderClick: function() {
            this.fire("focus");

            return false;
        }
    });
}(window.DOM));

DOM.importStyles(".better-placehoder", "display:inline-block;box-sizing:border-box;position:absolute;color:graytext;background:none;border-color:transparent;border-style:solid");
