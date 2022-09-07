var  inputTxt = document.querySelector("#inputtext");
var converBtn = document.querySelector("#inputBtn");
var outputDiv = document.querySelector("#txtoutput");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
     return serverURL + "?" + "text=" + input
}

function clickHandler() {
    // outputDiv.innerText = "ajsjsjsjsjsjsj " + inputTxt.value;
   var inputText = inputTxt.value;
    
   //calling server for processing
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
   })
    
   
};








converBtn.addEventListener("click" , clickHandler);