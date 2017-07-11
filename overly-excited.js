// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    let walrus = "";

    theWordArray.forEach(function(word){
      if (indexof(walrus[word] + 1) % 3 === 0) {
        console.log(walrus += word + "! ");
      } else {
        console.log(walrus += word + " ");
      }
    });


  }


// Invoke the function and pass in the array
addExcitement(sentence);
