
########################################################
Intermediate Algorithm Scripting
########################################################

### Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
  ```js
  function sumAll(arr) {
    let sum = 0;
    for (let i=Math.min(...arr); i<=Math.max(...arr); i++){
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([7, 4]));
  ```


### Diff Two Arrays:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
  ```js
  function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i=0; i<arr1.length; i++){
      arr2.includes(arr1[i])?null :
        newArr.push(arr1[i]);
    }
    for (let i=0; i<arr2.length; i++){
      arr1.includes(arr2[i])?null :
        newArr.push(arr2[i]);
    }
    console.log(newArr);
    return newArr;
  }
  ```


### Seek and Destroy:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
  ```js
  function destroyer(arr, ...rest) {
    return arr.filter(n => !rest.includes(n));
  }
  ```


### Wherefore art thou:
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
  ```js
  function whatIsInAName(collection, source) {
    let testKeys = Object.keys(source);
    return collection
    .filter(obj => testKeys
      .every(
        key => obj.hasOwnProperty(key) && obj[key] === source[key]
      )
    );
  }
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
  ```


### Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  ```js
  function spinalCase(str) {
    return str.split(/\W|_|(?=[A-Z])/).join('-').toLowerCase();
  }
  console.log(spinalCase("The_AndyGriffith_Show"));
  ```


### Pig Latin:
Pig Latin is a way of altering English Words. The rules are as follows:
  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
  - If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
  ```js
  function translatePigLatin(str) {
    console.log(str.match(/^[^aieou]*/ig));
    return str.match(/^[aieou]/i)?
    str.concat('way')
    :
    str.replace(/^[^aieou]+/, '').concat(str.match(/^[^aieou]+/) + 'ay');
  } 
  translatePigLatin("consonant");
  ```


### Search and Replace:
Perform a search and replace on the sentence using the arguments provided and return the new sentence:  
  - First argument is the sentence to perform the search and replace on.
  - Second argument is the word that you will be replacing (before).
  - Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
  ```js
  function myReplace(str, before, after) {
    return  before.match(/^[A-Z]/)?
    str.replace(before, after.charAt(0).toUpperCase()+after.slice(1)):
    str.replace(before, after.charAt(0).toLowerCase()+after.slice(1));
  }
  ```


### DNA Pairing:
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

My stupid ass bellow:
  ```js
  function pairElement(str) {
    let finalArr = [];
    for(let i=0; i<str.length; i++){
      let pairArr = [];
      pairArr.push(str[i]);
      switch (str[i]) {
        case 'G': 
          pairArr.push('C');
          finalArr.push(pairArr);
          break;
        case 'C':
          pairArr.push('G');
          finalArr.push(pairArr);
          break;
        case 'A':
          pairArr.push('T');
          finalArr.push(pairArr);
          break;
        case 'T':
          pairArr.push('A');
          finalArr.push(pairArr);
          break;
      }
    }
    return finalArr;
  }
  ```
How it could had been done:
  ```js
  function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  ```


### Missing letters:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
  ```js
  function fearNotLetter(str) {
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = alphabetArr.slice(alphabetArr.indexOf(str.charAt(0)), alphabetArr.indexOf(str.charAt(str.length-1)));
    let result;
    arr.filter(i => {
      str.includes(i)?null:result=i;
    })
    return result;
  }
  ```
It should had been done with charCodeAt()
  ```js
  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i); // gave numbers in incremental order (letter id's)
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) { // checked if letter id's did not skip
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  ```

### 

  ```js

  ```


### 

  ```js

  ```



