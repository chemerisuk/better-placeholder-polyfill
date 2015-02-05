(function(DOM) {
    "use strict";

    var test = DOM.create("input").get("placeholder");
    var TEMPLATE = DOM.create("span.btr-placeholder[unselectable=on aria-hidden=true]");

    DOM.extend("[placeholder]", typeof test !== "string", {
        constructor() {
            var placeholder = TEMPLATE.clone(true);

            this.set("_placeholderElement", placeholder);

            placeholder
                .css(this.css(["width", "height", "font", "padding", "text-align", "border-width"]))
                .on("mousedown", this._clickPlaceholder)
                .set("textContent", this.get("placeholder"));

            this
                .on("focus", this._focusInput.bind(this, placeholder))
                .on("blur", this._blurInput.bind(this, placeholder))
                .before(placeholder);

            if (this.value() || this.matches(":focus")) {
                placeholder.css("display", "none");
            }

            this.define("placeholder",
                () => placeholder.get("textContent"),
                (value) => {
                    placeholder.set("textContent", value);

                    return value;
                }
            );
        },
        _focusInput(placeholder) {
            placeholder.css("display", "none");
        },
        _blurInput(placeholder) {
            if (!this.value()) {
                placeholder.css("display", "");
            }
        },
        _clickPlaceholder() {
            this.fire("focus");

            return false;
        }
    });
}(window.DOM));
