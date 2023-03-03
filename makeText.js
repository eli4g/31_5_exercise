/** Command-line tool to generate Markov text. */
const {MarkovMachine} = require("./markov.js");
const fs = require('fs');
const axios = require('axios');



let args = [];


for (let i = 0; i < process.argv.length; i += 1) {
    
    args.push(process.argv[i]);
  }

let urlOrPath = args[3];

if (args[2] == "url"){

    let returnValue = '';
    (async function(){
        returnValue = await webCat(urlOrPath);
        let mm = new MarkovMachine(returnValue);
        mm.makeText();
      })();

    
    

}else if (args[2] == "file"){

    
  


    let returnValue = '';
    (async function(){
        returnValue = await fileCat(urlOrPath);
        let mm = new MarkovMachine(returnValue);
        mm.makeText();
      })();


}else{

    console.log("Error: invalid parament, please use a valid 'url' or 'file' path.")

}




async function webCat(urlOrPath)
{

    try {
        
        const response =   await axios.get(urlOrPath).then(res => res.data.toString());
            
        return response;
      
        
      } catch (error) {
        console.error(error);
      }

}





function fileCat(urlOrPath) {

    let data = fs.readFileSync(urlOrPath, 'utf8');

    // fs.readFile(urlOrPath, 'utf8', (err, data) => {
        
    //     if (err) {
    //       console.log("ERROR:", err);
    //        process.kill(1)
    //     }
    
            
    //         return data.toString();
        
       
    //   })

      return data;

}






module.exports = {fileCat, webCat};








