//Button Click
var translateButton = document.getElementById('translate-button');

//Read Input
var translateInput = document.getElementById('translate-input');

//Show Output
var translateOutput = document.getElementById('translate-output');

//mock URL
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//Yoda Speak API
var url = 'https://api.funtranslations.com/translate/yoda.json';

translateButton.addEventListener('click', function () {
  var input = translateInput.value;
  fetch(finalURL(input))
    .then((response) => response.json())
    .then((json) => {
      translateOutput.innerText = json.contents.translated;
    });
});

function finalURL(text) {
  return url + '?text=' + text;
}
