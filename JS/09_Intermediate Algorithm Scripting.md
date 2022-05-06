
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

  ```js

  ```


### 

  ```js

  ```



