
########################################################
Basic Algorithm Scripting
########################################################


### Convert Celsius to Fahrenheit:
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
  ```js
  function convertToF(celsius) {
    let fahrenheit = celsius*9/5+32;
    return fahrenheit;
  }
  convertToF(30);
  ```


### Reverse a String:
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
  ```js
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  reverseString("hello");
  ```


### Factorialize a Number:
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
  ```js
  let result = 1;
  function factorialize(num) {
    if (num == 0){
      return 1;
    }
    return factorialize(num-1) * num;
  }
  ```


### Find the Longest Word in a String:
Return the length of the longest word in the provided sentence.
Your response should be a number.
  ```js
  function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length));
  }
  ```
Here you take a given string split it into an array, then you re map this arrays value lengths into another array that gives a pool of values for Math.max to find the longest word.

### Return Largest Numbers in Arrays:
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
  ```js
  function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
      result.push(Math.max(...arr[i]));
    }
    console.log(result);
    return result;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])

// how you should had done it
  function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  } 
  ```


### Confirm the Ending:
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
  ```js
  function confirmEnding(str, target) {
    return str.substring(str.length-target.length)==target?true:false;
  }
  console.log(confirmEnding("Bastian", "ian"));
  ```


### Repeat a String Repeat a String:
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
  ```js
  function repeatStringNumTimes(str, num) {
    let result = '';
    for (let i=0; i<num; i++){
      result += str;
    }
    return result;
  }


  function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }
  ```
Recursive function with ternary operator.


### Truncate a String:
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
  ```js
  function truncateString(str, num) {
    return str.length>num?str.substring(0, num)+'...':str;  \\ should had used slice instead of substring
  }

  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  ```



### Finders Keepers:
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
  ```js
  function findElement(arr, func) {
    return arr.find(func);
  }
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
  ```


### Boo who:
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
  ```js
    function booWho(bool) {
        return typeof bool==='boolean';
    }
    console.log(booWho(5));
  ```


### Title Case a Sentence:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
  ```js
  function titleCase(str) {
    let arr = str.split(' ');
    for (let i=0; i< arr.length; i++){
      let word = arr[i].toLowerCase();
      arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return arr.join(' ');
  }


  function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
  ```
  - Lowercase the whole string using str.toLowerCase().
  - Replace every word’ first character to uppercase using .replace.
  - Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
  - Regex explanation:  //  /(^|\s)\S/g
    - Find all non-whitespace characters (\S)
    - At the beginning of string (^)
    - Or after any whitespace character (\s)
    - The g modifier searches for other such word pattern in the whole string and replaces them.


### Slice and Splice:
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
  ```js
  function frankenSplice(arr1, arr2, n) {
    //let result = arr2.slice();
    //return result.splice(n, 0, ...arr1);
    return arr2.slice(0,n).concat(...arr1).concat(arr2.slice(n));
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  ```


### Falsy Bouncer:
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
  ```js
  function bouncer(arr) {
    return arr.filter(a => a); //   return arr.filter(Boolean);
  }
  console.log(bouncer([9, "ate", "", 7, false]));
  ```


### Where do I Belong:
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
  ```js
  function getIndexToIns(arr, num) {
    return arr.sort().filter(a => a < num).length; // there was no reason to 'sort()' them from lowest to highest - filtered array was goin to be the smae length anyway
  }
  console.log(getIndexToIns([40, 60], 50));
  ```


### Mutations:
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
  ```js
  function mutation(arr) {
    let charPool = arr[0].toUpperCase().split('');    // split() was not needed
    let testPool = arr[1].toUpperCase().split('');    // includes() test strings, arrays and objects...
    for (let i=0; i<testPool.length; i++){
      if (!charPool.includes(testPool[i])){
        return false;
      }
    }
    return true;
  }
  console.log(mutation(["hello", "hey"]));


  function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
  }
  ```
The cool way to do it. Here he uses recursive function.


### Chunky Monkey:
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  ```js
  let result = [];
  let step = 0;
  function chunkArrayInGroups(arr, size, i=0) {
    if (i >= arr.length) {
      return result;
    }
    else {
      step += size;
      result.push(arr.slice(i, step));
      i += size;
      chunkArrayInGroups(arr, size, i);
    }
    return result;
  }

  //console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  ```
My stupid ass trying to use recursive function




