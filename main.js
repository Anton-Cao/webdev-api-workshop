var updateFunFact = function() {
  var xmlHttp = new XMLHttpRequest(); // object to make GET request
  xmlHttp.onreadystatechange = function() { // function that is called once we get the response
    document.getElementById('fun-fact').innerText = xmlHttp.responseText;
  };
  xmlHttp.open('GET', 'http://numbersapi.com/random/math', true);
  xmlHttp.send(null);
}

document.addEventListener('DOMContentLoaded', function() {
  updateFunFact();
  document.getElementById('button').addEventListener('click', function() {
    updateFunFact();
  });
});
