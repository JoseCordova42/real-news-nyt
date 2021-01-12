var search = $("#search");
var records = $("#numRecords");
var start = $("#startYear");
var end = $("#endYear");
var topArticles = $("#topArticles")

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    
})

$("#clearBtn").on("click", function(event) {
    event.preventDefault();
    search.empty();
    records.empty();
    start.empty();
    end.empty();
    topArticles.empty();
})