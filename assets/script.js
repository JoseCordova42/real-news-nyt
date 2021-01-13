var search = $("#search");
var records = $("#numRecords");
var start = $("#startYear");
var end = $("#endYear");
var topArticles = $("#topArticles");


// Click on search makes an AJAX request to the NYT API
$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var begin_date = "begin_date=" + daveVar0;
    var end_date = "&end_date=" + daveVar1;
    var query = "&q=" + daveVar2;
    var key = "&api-key=e0aXsblILsvDExrjmOsKLkG7fL4UyRkH";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20210112&q=covid&api-key=e0aXsblILsvDExrjmOsKLkG7fL4UyRkH",
        "method": "GET",
        "headers": {}
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    
})

// Resets all the variables to be empty
$("#clearBtn").on("click", function(event) {
    event.preventDefault();
    search.empty();
    records.empty();
    start.empty();
    end.empty();
    topArticles.empty();
})

// AJAX request



