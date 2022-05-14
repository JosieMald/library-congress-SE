var getQueryString = function () {
  var queryString = document.location.search;
  console.log(queryString);
  var queryFormat = queryString.split("=")[2];
  console.log(queryFormat);
  var querySearch = queryString.split("&")[0].split("=")[1];
  console.log(querySearch);
  getApiCall(queryFormat, querySearch);
};

var getApiCall = function (format, search) {
  var apiUrl =
    "https://www.loc.gov/" + format + "/?q=" + search + "&fo=json&c=10";
  console.log(apiUrl);

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
};

$("#backBtn").on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  location.replace("index.html");
});

getQueryString();
