describe("Yahoo weather front end", function () {

    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("search.fixture.html");
        WeatherController.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();

            $("#city").val("Tatooine");
            $("#Forecast").submit();

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

<<<<<<< HEAD
        it("should trigger a Giphy search when the search button is clicked", () => {
            expect(request.url).toBe("");
=======
        it("should have an initial value of Tatooine", () => {
            expect($("#city").val()).toBe("Tatooine");
        });

        it("should trigger a Yahoo weather search when the form is submitted", () => {
            expect(request.url.match(/https:\/\/query.yahooapis.com\/v1\/public\/yql/)).toBeTruthy();
            expect(request.url.match(/Tatooine/)).toBeTruthy();
>>>>>>> c0aec32a72ce19ce1fd9954b693bc9915a7801bb
        });

        it("should populate the image container when search results arrive", () => {
            expect($(".result-container1").children().length).toBe(0);

            request.respondWith({
                status: 200,
                responseText: JSON.stringify({
                    query: {
                        results: {
                            channel: {
                                astronomy: {
                                },
                                atmosphere: {
                                },
                                item: {
                                    forecast: [
                                        { day: "Hi" },
                                        { day: "Jen" },
                                        { day: "and" },
                                        { day: "Jay" },
                                        { day: "what" },
                                        { day: "is" },
                                        { day: "up" }
                                    ]
                                },
                                units: {
                                },
                                wind: {
                                }
                            }
                        }
                    }
                })
            });

            expect($(".result-container1").children().length).toBe(5);
        });
    });
});

