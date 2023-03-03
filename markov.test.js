/** Command-line tool to generate Markov text. */
const {MarkovMachine} = require("./markov.js");
const {webCat, fileCat} = require("./makeText.js");
const fs = require('fs');
const axios = require('axios');


describe("test markov", function () {

    test('test word count', function () {
      let wordList = '';
      let finalText = '';
      let finalTextArray = [];
      (async function(){
        wordList = await fileCat("eggs.txt");
        let mm = new MarkovMachine(wordList);
        finalText = mm.makeText(20).toString();
      })();

      finalTextArray = finalText.split(' ');
      console.log(finalText);
      expect(finalTextArray.length).toEqual(20);
    });
  

  
  });