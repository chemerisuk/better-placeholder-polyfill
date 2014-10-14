(function(DOM) {
    "use strict";

    var JSCRIPT_VERSION=/*@cc_on @_jscript_version|@*/void 0;
    var placeholder = DOM.create("input").get("placeholder");

    DOM.extend("[placeholder]", typeof placeholder !== "string", {
        constructor() {
            var placeholder = DOM.create("span.better-placehoder");

            this
                .on("focus", [placeholder], this.onFocus)
                .on("blur", [placeholder], this.onBlur)
                .set("_placeholder", placeholder)
                .before(placeholder);

            placeholder
                .on("mousedown", this.onPlaceholderClick)
                .css(this.css(["width", "height", "font", "padding", "text-align", "border-width"]));

            if (this.get() || this.matches(":focus")) placeholder.hide();

            this.doDefineProperty(placeholder);
        },
        doDefineProperty(placeholder) {
            var node = this[0];
            var propName = JSCRIPT_VERSION < 9 ? "PLACEHOLDER" : "placeholder";

            placeholder.set(this.get("placeholder"));

            Object.defineProperty(this[0], "placeholder", {
                get() {
                    return placeholder.get();
                },
                set(value) {
                    node.setAttribute(propName, value, 1);

                    placeholder.set(value);
                }
            });
        },
        onFocus(placeholder) {
            placeholder.hide();
        },
        onBlur(placeholder) {
            if (!this.get()) {
                placeholder.show();
            }
        },
        onPlaceholderClick() {
            this.fire("focus");

            return false;
        }
    });
}(window.DOM));
