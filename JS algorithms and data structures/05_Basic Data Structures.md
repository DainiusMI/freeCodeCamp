
########################################################
Basic Data Structures
########################################################

### Use an Array to Store a Collection of Data:
The below is an example of the simplest implementation of an array data structure. 


### Access an Array's Contents Using Bracket Notation:
In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed.


### Add Items to an Array with push() and unshift():
The push() method adds elements to the end of an array, and unshift() adds elements to the beginning.


### Remove Items from an Array with pop() and shift():
Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.


### Remove Items Using splice():
if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

  ```js
  let array = ['today', 'was', 'not', 'so', 'great'];
  array.splice(2, 2);
  ```
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

  ```js
  let array = ['I', 'am', 'feeling', 'really', 'happy'];
  let newArray = array.splice(3, 2);
  ```
newArray has the value ['really', 'happy'].


### Add Items Using splice():
Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
  ```js
  const numbers = [10, 11, 12, 12, 15];
  numbers.splice(3, 1, 13, 14);
  console.log(numbers);
  ```
The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].


### Copy Array Items Using slice():
The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

  ```js
  let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
  let todaysWeather = weatherConditions.slice(1, 3);
  ```
todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].


### Copy an Array with the Spread Operator:
While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:
  ```js
  let thisArray = [true, true, undefined, false, null];
  let thatArray = [...thisArray];
  ```
thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.

### Combine Arrays with the Spread Operator:
Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:
  ```js
  let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
  let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
  ```
thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

### Check For The Presence of an Element With indexOf():
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

  ```js
  let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
  fruits.indexOf('dates');
  fruits.indexOf('oranges');
  fruits.indexOf('pears');
  ```
indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).


### Iterate Through All an Array's Items Using For Loops:
Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.
  ```js
  function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
  ```


### Create complex multi-dimensional arrays:
One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become a very complex data structure, known as a multi-dimensional, or nested array. Consider the following example
  ```js
  let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];
  ```
The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:

  console.log(nestedArray[2][1][0][0][0]);

### Add Key-Value Pairs to JavaScript Objects:
At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:
  ```js
  const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
  };
  ```
The above code defines a Tekken video game character object called tekkenCharacter. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:
  ```js
  tekkenCharacter.origin = 'South Korea';
  ```
This uses dot notation. 
  ```js
  tekkenCharacter['hair color'] = 'dyed orange';
  ```
This uses bracket notation. Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 


### Modify an Object Nested Within an Object:
Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:
  ```js
  let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  ```
nestedObject has three properties: id (value is a number), date (value is a string), and data (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:
  ```js
  nestedObject.data.onlineStatus.busy = 10;
  ```


### Access Property Names with Bracket Notation:
In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our foods object is being used in a program for a supermarket cash register. We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. This might look like:
  ```js
  let selectedFood = getCurrentFood(scannedItem);
  let inventory = foods[selectedFood];
  ```
This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, or undefined if it is not present.
Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.


### Use the delete Keyword to Remove Object Properties:
In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.
Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:
  ```js
  delete foods.apples;
  ```


### Check if an Object has a Property:
JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
  ```js
  users.hasOwnProperty('Alan');
  'Alan' in users;
  ```
Both of these would return true.

example from exercise:
  ```js
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
  );
  }
  ```
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

### Iterate Through the Keys of an Object with a for...in Statement:
Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:
  ```js
  for (let user in users) {
    console.log(user);
  }
  ```
This would log Alan, Jeff, Sarah, and Ryan - each value on its own line.

In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.
  $$ NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

### Generate an Array of All Object Keys with Object.keys():
We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
  ```js
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj);
    // Only change code above this line
  }
  ```
returns: [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ];


### Modify an Array Stored in an Object:
Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
  ```js
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