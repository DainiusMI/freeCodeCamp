
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
    // check the length
    if (9 < digitCount && digitCount < 12) {
      // look for country code and comfirm it
      if (digitCount == 11 && arr[0] != 1) {
        return false;
      }
    }
    else {
      return false;
    }
    // testing values and format bellow
    for (let i in str) {
      // look for not numbers
      if (!/\d/.test(str[i])) {
        // look if it's a valid symbol
        if (/\(|\-|\)|\s/.test(str[i])) {
            // check if next 3 values are diggits
            if (/\-|\s/.test(str[i])) {
              let n;
              // account for possible braket
              /\(/.test(str[+i+1])?n=+i+2:n=+i+1;
              for (n; n < +i+4; n++) {
                if (!/\d/.test(str[n])) {
                  return false
                }
              }
            }
            // check for missing brakets
            if (/\(|\)/.test(str[i])) {
              if (!/\(\d{3}\)/.test(str)) {
                return false
              }
            }
        }
        // not allowed symbol
        else {
          return false;
        }
      }
    }
  return true;
  }
  ```
This feels like I failed regex


### Cash Register:  
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    
    - Currency Unit	Amount
    -  Penny	$0.01 (PENNY)
    -  Nickel	$0.05 (NICKEL)
    -  Dime	$0.1 (DIME)
    -  Quarter	$0.25 (QUARTER)
    -  Dollar	$1 (ONE)
    -  Five Dollars	$5 (FIVE)
    -  Ten Dollars	$10 (TEN)
    -  Twenty Dollars	$20 (TWENTY)

One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:
  ```js
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
  ```

  
My solution bellow
  ```js
  function checkCashRegister(price, cash, cid) {
    const cashValues = {
      'ONE HUNDRED': 100,
      'TWENTY': 20,
      'TEN': 10,
      'FIVE': 5,
      'ONE': 1,
      'QUARTER': 0.25,
      'DIME': 0.1,
      'NICKEL': 0.05,
      'PENNY': 0.01
    }

    let change = cash - price;
    let result = { status: '', change: []};
    let bank = cid.map(i => i[1]*100).reduce((a,b) => a + b)/100;
    const origCID = cid.map(i => [i[0], (i[1]*100/100)]);
    // scroll over object with values
    for (let i in cashValues) {
      if (change >= cashValues[i]) {
        // scroll over cid
        cid.filter(a => {
          // find the bill that is necessary
          if (a[0] == i) {

            // look how many bills will you need
            let n = Math.floor(change / cashValues[i]);
            // check if you have enough of them
            while (n * cashValues[i] > a[1]) {
              n--;
            }
            let takeAway = n * cashValues[i];
            function calcucalte(val) {
              return (val *1000 - takeAway *1000) /1000;
            }
            change = calcucalte(change);
            bank = calcucalte(bank);
            a[1] = calcucalte(a[1]);
            result.change.push([i, takeAway]);
            //console.log(i + ' times ' + n + ' is '+ takeAway + ' taken out of change is: '+change);
          }
        });
      }
    }
    if (change > 0) {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change.length = 0;
    }
    else {
      if (bank > 0) 
        result.status = 'OPEN';
      else {
        result.status = 'CLOSED';
        result.change = origCID;
      }
    }
    console.log(result);
    return result;
  }
  ```



