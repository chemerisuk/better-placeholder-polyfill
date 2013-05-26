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
            .on("click", function() {
                input.fire("focus");
            });

        input.on({
            focus: function() {
                placeholder.hide();
            },
            blur: function() {
                if (!input.get()) placeholder.show();
            }
        });

        if (input.get() || input.isFocused()) placeholder.hide();
    }
});
