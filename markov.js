/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.markovList = this.makeChains();
  
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let markovList = {};

    for (let i = 0; i < this.words.length; i++){
     
      if(i == this.words.length)
      {
        if(this.words[i] in markovList){
          markovList[this.words[i]].push(null)
        }else{
          markovList[this.words[i]] = null
        }

      }else{
          if(this.words[i] in markovList){
            markovList[this.words[i]].push(this.words[i+1])
          }else{
            markovList[this.words[i]] = [this.words[i+1]]
          }
        }
    }
   
    return markovList;
    
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    
    let words = [];
    let size = Object.keys(this.markovList).length;
    let arraySize = 0;
    let newKey = '';
    let newValue = '';
    let finalText = '';

    const keys = Object.keys(this.markovList);


    for(let i=0; i< numWords; i++)
    {
      

      newKey = keys[Math.floor(Math.random() * keys.length)];
      
      words.push(newKey);

      if(words.length == numWords){
        break;
      }


      newValue = this.markovList[newKey][Math.floor(Math.random() * this.markovList[newKey].length)];

      words.push(newValue);

      if(words.length == numWords){
        break;
      }

    }

    finalText = words.join(" ");
    
    console.log(finalText);

    return finalText;

  }
}

module.exports = {MarkovMachine};
