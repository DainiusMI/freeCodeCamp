
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


### 

  ```js

  ```
  ```


### 

  ```js

  ```


### 

  ```js

  ```
  ```


### 

  ```js

  ```


### 

  ```js

  ```




