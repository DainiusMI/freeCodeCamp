
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
  console.log(rot13("SERR PBQR PNZC!"));
  ```


### Telephone Number Validator:
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
  - 555-555-5555
  - (555)555-5555
  - (555) 555-5555
  - 555 555 5555
  - 5555555555
  - 1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
  ```js
  function telephoneCheck(str) {
    let arr = str.split(/\D/).filter(a => a !== '');
    let digitCount = arr.join('').length;

    // testing values and format bellow
    for (let i in str) {

      if (!/\d/.test(str[i])) {
        if (/\(|\-|\)|\s/.test(str[i])) {
          console.log('not a number but is allowed')
        }
        else {
          console.log(str[i] + ' is not allowed')
          return false;
        }
      }

      // check if it's allowed
      if (/\(|\-|\)|\s/.test(str[i])) {

        // next 3 values are diggits
          if (/\-|\s/.test(str[i])) {
            let n;
            // account for braket after whitespace
            /\(/.test(str[+i+1])?n=+i+2:n=+i+1;
            for (n; n < +i+4; n++) {
              if (!/\d/.test(str[n])) {
                console.log('3 in row failed')
                return false
              }
            }
          }

        // check if brakets are not missing
          if (/\(/.test(str[i])) {
            if (str[+i+4] != ')') {
              console.log('missing braket )')
              return false
            }
          }
          console.log(str[-i-4])
          if (/\)/.test(str[i])) {
            if (str[+i-4] != '(') {
              console.log('missing braket (')
              return false
            }
          }
        }

      // check the length
      if (9 < digitCount && digitCount < 12) {
        // look for country code and comfirm it
        if (digitCount == 11 && arr[0] != 1) {
          console.log('bad country code')
          return false;
        }
      }
      else {
        console.log('to long')
        return false;
      }
    }

  return true;
  }
  ```
This feels like I failed regex


### 

  ```js

  ```



