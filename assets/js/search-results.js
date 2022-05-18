// DOM ELEMENTS -----------------------------------------------------------------------------
var containerEl = $(".dataContainer");
var searchTermEl = $("#search-term");
var formatInputEl = $("#format-input");
var submitBtnEl = $("#submitBtn");

// FUNCTION CALLS ---------------------------------------------------------------------------
var getQueryString = function () {
  var queryString = document.location.search;
  var queryFormat = queryString.split("=")[2];
  var querySearch = queryString.split("&")[0].split("=")[1];
  getApiCall(queryFormat, querySearch);
};

var getApiCall = function (format, search) {
  if (format == "Select a format...") {
    format = "newspapers";
  }
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
  if (data.results.length == 0) {
    $(".showResults").text("No results found for  " + data.search.query);
  } else {
    $(".showResults").text("Showing results for " + data.search.query);
  }
  for (var i = 0; i < data.results.length; i++) {
    $(".dataContainer").append(
      "<div class='mx-4 mb-4 col-12 w-auto box'>" +
        "<h2>" +
        data.results[i].title +
        "</h2>" +
        "<p> Date: " +
        data.results[i].date +
        "</p>" +
        "<p> Subject: " +
        data.results[i].subject[0] +
        "</p>" +
        "<p> Description: " +
        data.results[i].description +
        "</p>" +
        "<a class='btn btn-dark mb-3' href='" +
        data.results[i].url +
        "' target='_blank' > Read More </a>" +
        "</div>"
    );
  }
  $(".loading").attr("class", "hide");
};

// EVENT LISTENERS ---------------------------------------------------------------------------
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  searchTerm = searchTermEl.val().trim();
  formatInput = formatInputEl.val().trim();
  if (searchTerm === "") {
    alert("Please enter a search term");
  }
  if (formatInput == "Select a format...") {
    formatInput = "newspapers";
  }
  var queryParameters = "q=" + searchTerm + "&format=" + formatInput;
  location.replace("search-results.html?" + queryParameters);
});

$("#backBtn").on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  location.replace("index.html");
});

getQueryString();
