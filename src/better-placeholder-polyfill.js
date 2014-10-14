(function(DOM) {
    "use strict";

    var supportsPlaceholder = typeof DOM.create("input").get("placeholder") === "string";

    DOM.extend("[placeholder]", !supportsPlaceholder, {
        constructor() {
            var placeholder = DOM.create("input.better-placehoder[tabindex=-1 unselectable=on value=`{0}`]", [this.get("placeholder")]);

            this
                .on("focus", [placeholder], this.onFocus)
                .on("blur", [placeholder], this.onBlur)
                .set("_placeholder", placeholder)
                .before(placeholder);

            placeholder
                .on("mousedown", this.onPlaceholderClick)
                .css(this.css(["width", "height", "font", "padding", "text-align", "border-width"]));

            if (this.get() || this.matches(":focus")) placeholder.hide();
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
