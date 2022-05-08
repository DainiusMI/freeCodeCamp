
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
It should had been done with charCodeAt() and fromCharCode():
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


### Sorted Union:
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
  ```js
  function uniteUnique(...arr) {
    const result = [];
    arr.filter(innerArr => {
      for (let item in innerArr){
        result.includes(innerArr[item])?null:result.push(innerArr[item]);
      }
    })
    return result;
  }
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  ```
Could had been done with flat():
  ```js
  function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
  }
  // Or as an arrow function
  const uniteUnique = (...arr) => [...new Set(arr.flat())];
  ```


### Convert HTML Entities:
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
  ```js
  function convertHTML(str) {
    return str.replace(/[&<>"']/g, i => {
      switch(i) {
        case '&' : return '&amp;';
        case '<' : return '&lt;';
        case '>' : return '&gt;';
        case '"' : return '&quot;';
        case '\'' : return '&apos;';  // '\'' == " ' "
      }
    });
  }
  ```


### Sum All Odd Fibonacci Numbers:
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

  ```js
  function sumFibs(num) {
    let arrFib = [];
    let i = 0;
    do {
      i===0||i===1?arrFib.push(1):arrFib.push(arrFib[i-2]+arrFib[i-1]);
      i++;
    } while (arrFib[i-1] < num);
    return arrFib.length < 2 ? 1 : arrFib.filter(a => {
      if (a <= num && a%2 !== 0){
        return a;
      }
    }).reduce((a, b) => a + b);
  }
  console.log(sumFibs(75025));
  ```
Could had done much simpler like this:
  ```js
  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return result;
  }
  ```


### Sum All Primes:
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
  ```js
  function sumPrimes(num) {
    let arr = [];
    let i = 2;
    while (i <= num) {
      if (arr.every((n) => i % n !==0)){
        arr.push(i);
      }
      i++;
    };
    console.log(arr.at(-1))
    return arr.reduce((a, b) => a + b);
  }
  console.log(sumPrimes(977));
  ```


### Smallest Common Multiple:
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
  ```js
  function smallestCommons(arr) {
    let numRange = [];
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      numRange.push(i);
    } 
    let result = 0;
    let num = 0;
    do {
      num++;
      if (numRange.every(i => num % i === 0)) {
        result = num;
      }
    } while (result === 0);
    return result;
  }
  ```


### Drop it:
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
  ```js
  function dropElements(arr, func, i = 0, sliceIndex) {
    while (sliceIndex === undefined && arr.length > i){
      func(arr[i])?sliceIndex=i:i++;
    }
    return sliceIndex!==undefined?arr.slice(sliceIndex):[];
  }
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  ```


### Steamroller:
Flatten a nested array. You must account for varying levels of nesting.
  ```js
  function steamrollArray(arr) {
    const result = [];
    function genResult(arr) {
      arr.map(i => !Array.isArray(i)?
      result.push(i):
      genResult(i)
      );
    }
    genResult(arr);
    return  result
  }
  ```


### Binary Agents:
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
  ```js
  function binaryAgent(str, arr = []) {
    str.split(' ').forEach(i => arr.push(parseInt(i, 2)));
    return String.fromCharCode(...arr);
  }
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  ```


### Everything Be True:
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
  ```js
  function truthCheck(collection, pre) {
    return collection.every(a => a[pre]);
  }
  ```


### Arguments Optional:
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:
  ```js
  var sumTwoAnd = addTogether(2);
  ```
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
  ```js
  function addTogether(x, y) {
    if (!Number.isInteger(x)) {
      return undefined
    }
    else if (y === undefined) {
        return function(y) {
          if (!Number.isInteger(y)) {
            return undefined
          }
          return x+y
        }
    }
    else {
      if (!Number.isInteger(y)) {
        return undefined
      }
      else
      return x + y
    } 
  }
  addTogether(2, 3)
  ```

  ```js
    function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (second === undefined)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }
  ```
not like my mess, note how he assigned function arguments: const [first, second] = arguments;


### 

  ```js

  ```



