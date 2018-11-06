var updateFunFact = function() {
  var xmlHttp = new XMLHttpRequest(); // object to make GET request
  xmlHttp.onreadystatechange = function() { // function that is called once we get the response
    var response = xmlHttp.responseText.slice(1, -1);
    document.getElementById('fun-fact').innerHTML = response; // update the text of the fun-fact element
  };
  xmlHttp.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', true);
  xmlHttp.send(null);
}

document.addEventListener('DOMContentLoaded', function() { // we only want to add the event listener on the button once the button has loaded
  updateFunFact();
  document.getElementById('button').addEventListener('click', function() { // this function will be run whenever the button is clicked
    updateFunFact();
  });
});
