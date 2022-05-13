// DOM ELEMENTS --------------------------------------------------------------
var searchTermEl = $('#search-term');
var formatInputEl = $('#format-input');
var submitBtnEl = $('#submitBtn');

// VARIABLES ------------------------------------------------------------------

// FUNCTION CALLS -------------------------------------------------------------




// CLICK EVENTS ---------------------------------------------------------------




$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    searchTerm = searchTermEl.val().trim();
    console.log(searchTerm);
    formatInput = formatInputEl.val().trim();
    console.log(formatInput);
    if(searchTerm === ''){
        alert('Please enter a search term');
    }
    // var requestUrl = 'https://www.loc.gov/' + formatInput + '/?q=' + searchTerm + '&fo=json&c=10';
    var queryParameters = 'q=' + searchTerm + '&format=' + formatInput
    // /search-results.html?q=dogs&format=
    console.log(queryParameters);

    // fetch(requestUrl)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    location.replace('search-results.html?' + queryParameters);
});


