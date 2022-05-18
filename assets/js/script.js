// DOM ELEMENTS --------------------------------------------------------------
var searchTermEl = $("#search-term");
var formatInputEl = $("#format-input");
var submitBtnEl = $("#submitBtn");

// CLICK EVENTS ---------------------------------------------------------------
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  searchTerm = searchTermEl.val().trim();
  formatInput = formatInputEl.val().trim();
  if (searchTerm === "") {
    alert("Please enter a search term");
  }
  var queryParameters = "q=" + searchTerm + "&format=" + formatInput;
  location.replace("search-results.html?" + queryParameters);
});
