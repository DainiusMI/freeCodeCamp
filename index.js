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

*/