/**
 * @file <%= pkg.name %>
 * @version <%= pkg.version %> <%= grunt.template.today('isoDateTime') %>
 * @overview <%= pkg.description %>
 * @copyright <%= pkg.author %> <%= grunt.template.today('yyyy') %>
 * @license <%= pkg.license %>
 * @see <%= pkg.repository.url %>
 */
(function(DOM) {
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
}(window.DOM));
