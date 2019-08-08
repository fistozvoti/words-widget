function wordCounter(){
    var theWordCount = 0;
    var theMaxWords = 0;

    function parseSentence(sentence){
        theWordCount = sentence.split(" ").length;
    }
    function wordCount(){
        return theWordCount;
    }
    function maxWordCount(maxWords){
        theMaxWords = maxWords;
    }
    function errorMessage(){
        if(theWordCount > theMaxWords){
            return "Hol up! Hol up! Hol up! this is way over the limit! "
        }
        return "";
    }
    return{
        parseSentence,
        wordCount,
        maxWordCount,
        errorMessage
    }
    }