console.log('hello')

$('#backBtn').on('click', function(event){
    event.preventDefault();
    console.log('clicked');
    location.replace('index.html');
})