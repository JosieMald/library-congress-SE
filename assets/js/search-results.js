var containerEl = $('.dataContainer');


var getQueryString = function () {
  var queryString = document.location.search;
  var queryFormat = queryString.split("=")[2];
  var querySearch = queryString.split("&")[0].split("=")[1];
  getApiCall(queryFormat, querySearch);
};

var getApiCall = function (format, search) {
  var apiUrl =
    "https://www.loc.gov/" + format + "/?q=" + search + "&fo=json&c=10";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayData(data);
      });
    }
  });
};

var displayData = function (data) {
    $('.showResults').text("Showing results for " + data.search.query)
    for (var i = 0; i < data.results.length; i++) {
        $('.dataContainer').append(
            "<div class='m-4 col-12 w-auto hello'>" +
        '<h2>' + data.results[i].title + '</h2>' +
        '<p> Date: ' + data.results[i].date + '</p>' +
        '<p> Subject: ' + data.results[i].subject[0] + '</p>' +
        '<p> Description: ' + data.results[i].description + '</p>' +
        "<button type='button' class='btn btn-dark mb-3 read-more'> Read More </button>" + '</div>')
    }
  console.log(data);
  console.log(data.search.query);
};

$("#backBtn").on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  location.replace("index.html");
});

getQueryString();
