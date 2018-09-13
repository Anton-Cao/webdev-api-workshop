var updateFunFact = function() {
  var xmlHttp = new XMLHttpRequest(); // object to make GET request
  xmlHttp.onreadystatechange = function() { // function that is called once we get the response
    var response = xmlHttp.responseText.slice(1, -1);
    document.getElementById('fun-fact').innerHTML = response;
  };
  xmlHttp.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', true);
  xmlHttp.send(null);
}

document.addEventListener('DOMContentLoaded', function() {
  updateFunFact();
  document.getElementById('button').addEventListener('click', function() {
    updateFunFact();
  });
});
