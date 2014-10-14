describe("better-placeholder-polyfill", function() {
    "use strict";

    var input, placeholder, defineSpy;

    beforeEach(function() {
        defineSpy = spyOn(Object, "defineProperty");
        input = DOM.mock("input[placeholder=`123`]");
        placeholder = input.get("_placeholder");
    });

    it("should use placeholder value", function() {
        expect(placeholder.get()).toBe("123");

        input = DOM.mock("input[placeholder=`some text`]");
        placeholder = input.get("_placeholder");

        expect(placeholder.get()).toBe("some text");
    });

    it("should not display placeholder if value exists", function() {
        input = DOM.mock("input[placeholder=`123` value=`some value`]");
        placeholder = input.get("_placeholder");

        expect(placeholder.get("aria-hidden")).toBe("true");
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
