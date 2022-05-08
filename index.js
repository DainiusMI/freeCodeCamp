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



// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  let arr = list.slice();
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
  let arr = list.slice();
  const book_index = arr.indexOf(bookName);

  if (book_index >= 0) {
    arr.splice(book_index, 1);
    return arr;
    // Change code above this line
    }
}


// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(item => newArray.push(callback(item)));
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s);



// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList.filter(a => a.imdbRating >= 8).map(({Title, imdbRating}) => ({title:Title, rating:imdbRating }));

// Only change code above this line

console.log(filteredList);



// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(a => callback(a)?newArray.push(a):null);
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let averageRating;
  let nolanMovies = [];
  nolanMovies = watchList.filter(movie => movie.Director === 'Christopher Nolan').map(rating => +rating.imdbRating);
  averageRating = nolanMovies.reduce((a,b) => {return a+b;}) / nolanMovies.length;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));


const squareList = arr => {
  // Only change code below this line
  return  arr.filter(p => Number.isInteger(p) === true && p > 0).map(n => Math.pow(n, 2));
  // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b){return a === b ? 0 : a > b? 1 : -1;})
  // Only change code above this line
};

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let sortedArr = arr.slice();
  return sortedArr.sort(function(a,b){
    return a-b;
  });
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));


function splitify(str) {
  // Only change code below this line
return str.split(/\W/)
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));


// Only change code below this line
function urlSlug(title) {
return title.trim().toLowerCase().split(' ').join('-');
}
// Only change code above this line
console.log(urlSlug(" Winter Is Coming"));


function sumAll(arr) {
  let sum = 0;
  for (let i=Math.min(...arr); i<=Math.max(...arr); i++){
    sum += i;
  }
  return sum;
}

sumAll([7, 4]);
console.log(sumAll([7, 4]));


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

diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]);



function destroyer(arr, ...rest) {
  return arr.filter(n => !rest.includes(n));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
 // arr.push(collection.filter(obj => obj[Object.keys(source)] == source[Object.keys(source)]));
 
  collection.filter(obj => {
    for (let key in source) { 
      obj[key] === source[key]?arr.push(obj):null;
    }
  });
  // Only change code above this line
  console.log(arr);
  return arr;
}


function whatIsInAName(collection, source) {
  let testKeys = Object.keys(source);
  return collection
  .filter(obj => testKeys
    .every(
      key => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))




function spinalCase(str) {
  return str.split(/\W|_|(?=[A-Z])/).join('-').toLowerCase();
}
console.log(spinalCase("The_AndyGriffith_Show"));



function translatePigLatin(str) {
  console.log(str.match(/^[^aieou]* /ig));
  return str.match(/^[aieou]/i)?
  str.concat('way')
  :
  str.replace(/^[^aieou]+/, '').concat(str.match(/^[^aieou]+/) + 'ay');
} 
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("california"));



function myReplace(str, before, after) {
  return  before.match(/^[A-Z]/)?
  str.replace(before, after.charAt(0).toUpperCase()+after.slice(1))
  :str.replace(before, after.charAt(0).toLowerCase()+after.slice(1));
}

console.log(myReplace("I think we should look up there", "up", "Down"));



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

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));





function fearNotLetter(str) {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let arr = alphabetArr.slice(alphabetArr.indexOf(str.charAt(0)), alphabetArr.indexOf(str.charAt(str.length-1)));
  let result;
  arr.filter(i => {
    str.includes(i)?null:result=i;
  })
  return result;
}

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    // code of current character 
    var code = str.charCodeAt(i);
    console.log(code)
    console.log(str.charCodeAt(0) + i)

    // if code of current character is not equal to first character + no of iteration
     //   hence character has been escaped 
    if (code !== str.charCodeAt(0) + i) {
      //if current character has escaped one character find previous char and return 
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));



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


function convertHTML(str) {
  return str.replace(/[&<>"']/g, i => {
    switch(i) {
      case '&' : return '&amp;';
      case '<' : return '&lt;';
      case '>' : return '&gt;';
      case '"' : return '&quot;';
      case '\'' : return '&apos;';
    }
  });
}

//onsole.log(convertHTML("Dolce & Gabbana"));
//console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));



function sumFibs(num) {
  if (num === 1) {
    return 1;
  }
  let arrFib = [];
  for (let i = 0; i <= num; i++) {
    i===0||i===1?arrFib.push(1):arrFib.push(arrFib[i-2]+arrFib[i-1]);
  }
  return arrFib.filter(a => {
    if (a < num && a%2 !== 0){
      return a;
    }
  }).reduce((a, b) => a + b);
}
sumFibs(4);




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
      return num;
    }
  } while (result === 0);

}

console.log(smallestCommons([2,5]));

function dropElements(arr, func, i = 0, sliceIndex) {
  while (sliceIndex === undefined && arr.length > i){
    func(arr[i])?sliceIndex=i:i++;
  }
  return sliceIndex!==undefined?arr.slice(sliceIndex):[];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))





function steamrollArray(arr, result = []) {
  function genResult(arr) {
    arr.map(i => !Array.isArray(i)?
    result.push(i):
    genResult(i)
    );
  }
  genResult(arr);
  return  result
}

console.log(steamrollArray([1, [2], [3, [[4]]], 8 ]));
console.log(steamrollArray([[["a"]], [["b"]]]));



function binaryAgent(str, arr = []) {
  str.split(' ').forEach(i => arr.push(parseInt(i, 2)));
  return String.fromCharCode(...arr);
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


*/


function truthCheck(collection, pre) {
  return collection.every(a => a[pre]);
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))



