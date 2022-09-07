var  inputTxt = document.querySelector("#inputtext");
var converBtn = document.querySelector("#inputBtn");
var outputDiv = document.querySelector("#txtoutput");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
     return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
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

   .catch(errorHandler)
    
   
};








converBtn.addEventListener("click" , clickHandler);