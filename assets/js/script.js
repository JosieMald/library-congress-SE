// DOM ELEMENTS --------------------------------------------------------------
var searchTermEl = $('#search-term');
var formatInputEl = $('#format-input');

// VARIABLES ------------------------------------------------------------------

// FUNCTION CALLS -------------------------------------------------------------




// CLICK EVENTS ---------------------------------------------------------------




$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    // console.log("clicked");
    searchTermEl = searchTermEl.val();
    formatInputEl = formatInputEl.val();
    var requestUrl = 'https://www.loc.gov/' + formatInputEl + '/?q=' + searchTermEl + '&fo=json';
    console.log(requestUrl);

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
});


