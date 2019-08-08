var sentenceElem = document.querySelector(".sentence");
var wordCountElem = document.querySelector(".wordCount");
var setLimit = document.querySelector(".maxWordCount");
var errorMessage = document.querySelector(".error");

var countWords = wordCounter();
countWords.maxWordCount(Number(setLimit.value))

setLimit.addEventListener("keyup", function(){
    countWords.maxWordCount(Number(setLimit.value));
});

sentenceElem.addEventListener("keyup", function(){
    
    countWords.parseSentence(sentenceElem.value);
    wordCountElem.innerHTML = countWords.wordCount();
    errorMessage.innerHTML = countWords.errorMessage();
});