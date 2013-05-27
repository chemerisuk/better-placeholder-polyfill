/*!
 * better-placeholder-polyfill (https://github.com/chemerisuk/better-placeholder-polyfill)
 * Placeholder attribute polyfill for better-dom (https://github.com/chemerisuk/better-dom)
 *
 * Copyright (c) 2013 Maksim Chemerisuk
 */
DOM.supports("placeholder", "input") || DOM.extend("[placeholder]", {
    before: "<input type='text' style='box-sizing: border-box; position: absolute; color: graytext; background: none no-repeat 0 0; border-color: transparent'/>"
}, {
    constructor: function() {
        var offset = this.offset(),
            placeholder = this.prev();

        placeholder
            .set(this.get("placeholder"))
            .setStyle("width", offset.right - offset.left)
            .on("click", this.fire, ["focus"], this);

        this.on("focus", placeholder.hide, [], placeholder);
        this.on("blur", this._showPlaceholder, [placeholder]);

        if (this.get() || this.isFocused()) placeholder.hide();
    },
    _showPlaceholder: function(placeholder) {
        if (!this.get()) placeholder.show();
    }
});
