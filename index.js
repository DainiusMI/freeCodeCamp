/*
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value.length > 0) {
    records[id][prop] = value;
  }
  else if (value.length == 0) {
    console.log('delete if');
    delete records[id][prop];
  }
  else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') == false) {
    records[id][prop] = [];
    records[id][prop].push(value);
  }
  else if (prop == 'tracks' && records[id].hasOwnProperty('tracks')) {
    records[id][prop].push(value);
  }
  else if (prop == 'tracks' && value.length != 0) {
    records[id][prop].push(value);
  }

  return records;
}

//console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
//console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
//console.log(updateRecords(recordCollection, 2548, "tracks", ""));





// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let nameArray = [];
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      nameArray.push(contacts[i].firstName);
      if (contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }
      else {
        return 'No such property';
      }
    } 
  } 
  if (nameArray.includes(name) == false) {
    return 'No such contact';
  }

}
//console.log(lookUpProfile("Akira", "likes"));
//console.log(lookUpProfile("Kristian", "lastName"));
//console.log(lookUpProfile("Bob", "number"));
//console.log(lookUpProfile("Bob", "potato"));
//console.log(lookUpProfile("Akira", "address"));






var str = [];
function countdown(n){
    if (n < 0){
      return str;
    }
    else if (n <= 1){
    str.push(1);
    return
  }
  str.push(n);
  console.log(str);
  n = countdown(n-1);
  return str;
  
}
//console.log(countdown(-1));





let arr = [];
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    if (arr[arr.length] > arr[arr.length-1]) {
      arr.push(endNum);
    }
    else {
      arr.unshift(startNum);
    }
    return arr;
  }
  if (startNum < endNum) {
    arr.unshift(endNum);
    startNum = rangeOfNumbers(startNum , endNum - 1);
  }
  else if (startNum > endNum) {
    arr.push(startNum);
    startNum = rangeOfNumbers(startNum - 1, endNum);
  }
  return arr;
};
//console.log(rangeOfNumbers(1, 5));






const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow}  = HIGH_TEMPERATURES;

// Only change code above this line




const TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday} = TEMPERATURES;






let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];





const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line

  const [a, b, ...arr] = list; // Change this line
  console.log(arr);
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);





const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  //const failure = arr;
  let failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  // Only change code above this line
  return failureItems;


}

const failuresList = makeList(result.failure);
console.log(failuresList);


// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'





// Only change code below this line
class Thermostat {
  constructor(farhn) {
    this.farhn = farhn;
  }
  get temperature() {
    console.log('getter');
    return (this.farhn - 32) * 5 / 9;
  }
  set temperature(c) {
    console.log('setter');
    this.farhn = (c * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
//console.log(temp);

console.log(thermos);
console.log(temp);



function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let j = 0; j < n; j++) {
    row.push(0);
  }
  for (let i = 0; i < m; i++) {
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);


function zeroArray(m, n) {
  let newArray = [ ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      newArray[j][i]=0;
      }
  }
  return newArray;
}


function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift(7, 'VIII', 9);
arr.push('I', 2, 'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));



function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i < arr.length; i++){
    if (arr[i].includes(elem) == false){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  // Only change code below this line
let counter = 0;
  for (let user in usersObj){
    if (usersObj[user].online == true){
      counter ++;
    }
  }
  return counter;
  // Only change code above this line
}

console.log(countOnline(users));




let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
userObj.data.friends.push(friend);
return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));



function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");


let result = 1;
function factorialize(num) {
  if (num == 0){
    return 1;
  }
  return factorialize(num-1) * num;
}

console.log(factorialize(5));
console.log(factorialize(10));


function findLongestWordLength(str) {
  let longest = 0;
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longest){
      longest = arr[i].length;
    }
  }
  return longest;
}

function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
findLongestWordLength("The quick brown fox jumped over the lazy dog");

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



function confirmEnding(str, target) {
  return str.substring(str.length-target.length)===target?true:false;
}
console.log(confirmEnding("Bastian", "an"));



function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i =0; i<num; i++){
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));




function truncateString(str, num) {
  return str.length>num?str.substring(0, num)+'...':str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



function findElement(arr, func) {
  let num = 0;
  let i=0;
    do {
      arr[i]%2==0?num=arr[i]:i++;;
    }while (num == 0 && i < 4)
  return num;
}

function findElement(arr, func) {
  return arr.find(func);
}
console.log(findElement([1, 5, 3, 7], num => num % 2 === 0));


function booWho(bool) {
    return typeof bool==='boolean';
}
console.log(booWho(5));



function titleCase(str) {
  let arr = str.split(' ');
  for (let i=0; i< arr.length; i++){
    let word = arr[i].toLowerCase();
    arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));


function frankenSplice(arr1, arr2, n) {
  //let result = arr2.slice();
  //return result.splice(n, 0, ...arr1);
  return arr2.slice(0,n).concat(...arr1).concat(arr2.slice(n));
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


function bouncer(arr) {
  return arr.filter(Boolean);
}
console.log(bouncer([9, "ate", "", 7, false]));



function getIndexToIns(arr, num) {
  return arr.sort().filter(a => a < num).length;
}
console.log(getIndexToIns([40, 60], 50));


function mutation(arr) {
  let charPool = arr[0].toUpperCase();
  let testPool = arr[1].toUpperCase();
  for (let i=0; i<testPool.length; i++){
    if (!charPool.includes(testPool[i])){
      return false;
    }
  }
  return true;
}
console.log(mutation(["hello", "he"]));


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


*/