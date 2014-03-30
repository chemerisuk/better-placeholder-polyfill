describe("better-placeholder-polyfill", function() {
    "use strict";

    var input, placeholder;

    beforeEach(function() {
        input = DOM.mock("input[placeholder='123']");
        placeholder = DOM.mock();
    });

    it("should hide placeholder on focus", function() {
        var spy = spyOn(placeholder, "hide");

        input.onFocus(placeholder);
        expect(spy).toHaveBeenCalled();
    });

    it("should show placeholder on blur when value is empty", function() {
        var spy = spyOn(placeholder, "show"),
            getSpy = spyOn(input, "get").and.returnValue("123");

        input.onBlur(placeholder);
        expect(getSpy).toHaveBeenCalled();
        expect(spy).not.toHaveBeenCalled();

        getSpy.and.returnValue("");
        getSpy.calls.reset();

        input.onBlur(placeholder);
        expect(getSpy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
    });

    it("should focus on input when placeholder was clicked", function() {
        var spy = spyOn(input, "fire");

        expect(input.onPlaceholderClick()).toBe(false);
        expect(spy).toHaveBeenCalledWith("focus");
    });
});
