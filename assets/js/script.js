// DOM ELEMENTS --------------------------------------------------------------
var searchTermEl = $('#search-term');

// VARIABLES ------------------------------------------------------------------

// FUNCTION CALLS -------------------------------------------------------------




// CLICK EVENTS ---------------------------------------------------------------




$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    searchTermEl = searchTermEl.val();
    console.log(searchTermEl);
    var format = 'maps';
    var requestUrl = 'https://www.loc.gov/' + format + '/?q=' + searchTermEl + '&fo=json';
    console.log(requestUrl);
    
});


