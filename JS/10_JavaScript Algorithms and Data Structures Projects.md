
########################################################
JavaScript Algorithms and Data Structures Projects
########################################################

### Palindrome Checker:
Return true if the given string is a palindrome. Otherwise, return false.

  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

  We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

  We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
  ```js
  function palindrome(str) {
    let arr = [];
    let result = true;
    str.toLowerCase().split('').filter(a => a.match(/[a-z0-9]/)?arr.push(a):null);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr.reverse()[i])
        result = false;
    }
    return result;
  }
  ```
Not to happy about how the function looks like


### Roman Numeral Converter:
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
  ```js
  function convertToRoman(num) {
    let result = '';
    const romanValues = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      III: 3,
      II: 2,
      I: 1,
    };
    for (let key in romanValues) {
      while (num >= romanValues[key]) {
        num -= romanValues[key];
        result += key;
      }  
    }
    return result;
  }
  ```
Was hard to figure out a approach to make it work


### Caesars Cipher:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
  ```js
  function rot13(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/\w/)) {
        if (String.fromCharCode(str[i].charCodeAt(0)-13).match(/[A-Z]/)) {
          result += String.fromCharCode(str[i].charCodeAt(0)-13);
        }
        else {
          result += String.fromCharCode(str[i].charCodeAt(0)+13);
        }
      }
      else {
        result +=  str[i];
      }
    }
    return result;
  }
  ```


### 

  ```js

  ```



