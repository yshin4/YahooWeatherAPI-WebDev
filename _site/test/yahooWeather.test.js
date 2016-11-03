describe("Yahoo weather Example", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("search.fixture.html");
        yahooWeather.init();
    });
    describe("location", () => {
        var location;

        beforeEach(() => {
            location = $("#city");
        });

 describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();

            $("#location").val("Los Angeles");
            $(".nav-tabs a").click();

            request = jasmine.Ajax.requests.mostRecent();
        });

    it("should start with an empty search field", () => {
        expect($("#search-term").val()).toBe("");
    });

    it("should start with a disabled search button", () => {
        expect($("#search-button").prop("disabled")).toBe(true);
    });
