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
        var input = this,
            offset = input.offset(),
            placeholder = input.prev();

        placeholder
            .set(input.get("placeholder"))
            .setStyle("width", offset.right - offset.left)
            .on("click", input.fire, ["focus"], input);

        input.on("focus", placeholder.hide, [], placeholder);
        input.on("blur", input._showPlaceholder, [placeholder]);

        if (input.get() || input.isFocused()) placeholder.hide();
    },
    _showPlaceholder: function(placeholder) {
        if (!this.get()) placeholder.show();
    }
});
