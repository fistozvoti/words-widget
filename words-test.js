describe('this test' , function(){
    it('should be able to count the words typed' , function(){
        let countWords = wordCounter();

        countWords.parseSentence("I am Iviwe")
        assert.equal(3,countWords.wordCount());
    });
    it('should give an error message when the limit is exceeded' , function(){
        let wordLimit = wordCounter();

        wordLimit.maxWordCount(6);
        wordLimit.parseSentence("Code, a small set of rules but they do the most")
        assert.equal("Hol up! Hol up! Hol up! this is way over the limit! ",wordLimit.errorMessage());
    }); 
    it('should not give an error message when the limit set is not exceeded' , function(){
        let wordLimit = wordCounter();

        wordLimit.maxWordCount(6);
        wordLimit.parseSentence("I am slowly getting there")
        assert.equal("",wordLimit.errorMessage());
    }); 


});
