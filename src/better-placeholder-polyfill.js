(function(DOM) {
    "use strict";

    if (typeof DOM.create("input").get("placeholder") === "string") return;

    DOM.extend("[placeholder]", {
        constructor: function() {
            var holder = DOM.create("input[tabindex=-1 style='box-sizing: border-box; position: absolute; color: graytext; background: none no-repeat 0 0; border-color: transparent'"),
                offset = this.offset();

            this
                .on("focus", function() { holder.hide() })
                .on("blur", function() { if (!this.get()) holder.show() });

            holder
                .set(this.get("placeholder"))
                .style("width", offset.right - offset.left)
                .on("click", this, function() { this.fire("focus") });

            if (this.get() || this.matches(":focus")) holder.hide();

            this.before(holder);
        }
    });
}(window.DOM));
