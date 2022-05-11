// DOM ELEMENTS --------------------------------------------------------------
var searchTermEl = $('#search-term');
var formatInputEl = $('#format-input');

// VARIABLES ------------------------------------------------------------------

// FUNCTION CALLS -------------------------------------------------------------




// CLICK EVENTS ---------------------------------------------------------------




$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    searchTermEl = searchTermEl.val();
    formatInputEl = formatInputEl.val();
    console.log(searchTermEl);
    console.log(formatInputEl);
    var format = 'maps';
    var requestUrl = 'https://www.loc.gov/' + format + '/?q=' + searchTermEl + '&fo=json';
    console.log(requestUrl);
    
});


