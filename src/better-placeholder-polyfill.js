(function(DOM) {
    "use strict";

    var placeholder = DOM.create("input").get("placeholder");

    DOM.extend("[placeholder]", typeof placeholder !== "string", {
        constructor() {
            var placeholder = DOM.create("span.better-placehoder[unselectable=on aria-hidden=true]");

            placeholder
                .css(this.css(["width", "height", "font", "padding", "text-align", "border-width"]))
                .on("mousedown", this.onPlaceholderClick);

            this
                .on("focus", [placeholder], this.onFocus)
                .on("blur", [placeholder], this.onBlur)
                .set("_placeholder", placeholder)
                .before(placeholder);

            if (this.get() || this.matches(":focus")) {
                placeholder.css("display", "none");
            }

            this.defineAttribute("placeholder", {
                get: () => placeholder.get(),
                set: (value) => {
                    placeholder.set(value);

                    return value;
                }
            });
        },
        onFocus(placeholder) {
            placeholder.css("display", "none");
        },
        onBlur(placeholder) {
            if (!this.get()) {
                placeholder.css("display", "");
            }
        },
        onPlaceholderClick() {
            this.fire("focus");

            return false;
        }
    });
}(window.DOM));
