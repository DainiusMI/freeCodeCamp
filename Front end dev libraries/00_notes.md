

## Bootstrap:

You can add Bootstrap to any app by adding the following code to the top of your HTML:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```
### classes:
- container-fluid
- img-responsive: sets image to exactly the width of our phone's screen
- text-center: sets text to the center
- btn-default
- btn 
- btn-block: streches the button to 100% witdh
- btn-primary
- btn-info
- btn-danger

        && Bootstrap uses a responsive 12-column grid system

- col-md-*: Here, md means medium, and * is a number specifying how many columns wide the element should be.
- col-xs-*: xs means extra small (like an extra-small mobile phone screen), and * is the number of columns specifying how many columns wide the element should be.

- text-primary
- text-danger


- form-control

## jQuery

Before we can start using jQuery, we need to add some things to our HTML.

```js
    <script>
        $(document).ready(function() {
            
        });
    </script>
```

Target html elements with:
- $("element-tag")
- $(".class-name")
- $("#id-name")

You can add remove classes:
```js
$("#target6").addClass("animated fadeOut");
$("#target2").removeClass("btn-default");
```

Change the targets CSS
```js 
$("#target1").css("color", "blue");
```

Enable or Disable html elements:
```js
$("button").prop("disabled", true);
```

Manipulate html elements:
- .html() lets you add HTML tags and text within an element.
- .text() only alters text without adding tags.
- .remove() will remove an HTML element entirely
- .appendTo() allows you to select HTML elements and append them to another element.
- .clone() makes a copy of an element.
```js
$("#target2").clone().appendTo("#right-well");
```
- .parent() allows you to access the parent of whichever element you've selected.
```js 
$("#left-well").parent().css("background-color", "blue")
```
- .children() that allows you to access the children of whichever element you've selected.
- target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type.
```js
$(".target:nth-child(3)").addClass("animated bounce");
```
- ":odd" and ":even" target elements based on their positions
```js 
$(".target:odd").addClass("animated shake");
```
        && Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, :odd selects the second element (position 1), fourth element (position 3), and so on.


## SASS

SASS accepts:
- if conditions:
```scss
@mixin border-stroke($val) {
  @if $val == light {
    border : 1px solid black;
  }
  @else if $val == medium {
    border : 3px solid black;
  }
  @else if $val == heavy {
    border: 6px solid black;
  }
  @else {
    border: none;
  }
}
```
- @for loops: @for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.
```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
        && Note that #{}  turns #{$i} into a string with the value of $i

- @each directive which loops over each item in a list or map
```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}

$colors: (color1: blue, color2: red, color3: green);
@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```
first example was a list second a map

- @while directive is an option with similar functionality to the JavaScript while loop.
```scss
$i:1;
@while $i < 7 {
  .text-#{$i} {
    font-size: $i * 15px;
  }
  $i: $i + 1;
}
```


## REACT

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. 

JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }. 

To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process.

It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). 

ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.

In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, it is an important one to keep in mind moving forward.

JSX differs from HTML is in the idea of the self-closing tag. Any JSX element can be written with a self-closing tag, and every element must be closed. 

A <div> can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />.

Components are the core of React. One important thing to note is that React requires your function name to begin with a capital letter.

Components can be created with a function or a class syntax:
- To create a component with a function, you simply write a JavaScript function that returns either JSX or null.  
    ```jsx
    const DemoComponent = function() {
      return (
        <div className='customClass' />
      );
    };
    ```
- define a React component is with the ES6 class syntax.
```jsx
    class Kitten extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <h1>Hi</h1>
        );
      }
    }
```
Class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. It is best practice to call a component's constructor with super, and pass props to both. 


To compose components together, you could create an parent component which renders each of those components as children. 
```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```
When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag.

React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components.

React also has an option to set default props.
For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise.

The way to override the default props is to explicitly set the prop values for a component.
Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. 
```jsx
return <Items quantity={10}/>
```

    && 10 is in curly braces because it needs to be integer if you needed a string you would put it quates.

React provides useful type-checking features to verify that components receive props of the correct type.
```jsx
Items.propTypes = {quantity : PropTypes.number.isRequired}
```
quantity is a property name

    && && Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:
```jsx
this.state = {}
```
You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be.

Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. 
```jsx
this.setState({
  username: 'Lewis'
});
```
React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. 

In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. So, you should not use code like this:
```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```
Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:
```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

    && Note: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page. 

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. 
Here is a list of some of the main lifecycle methods: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()


### Redux

Redux is a state management framework that can be used with a number of different web technologies, including React. 

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store.

This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

The Redux store is an object which holds and manages application state. There is a method called createStore() on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument.
```js
const reducer = (state = 5) => {
  return state;
}
const store= Redux.createStore(reducer);
```
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.
```js
const store = Redux.createStore(
  (state = 5) => state
);
const currentState = store.getState();
```
In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. 
Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.
Writing a Redux action is as simple as declaring an object with a type property. 
```js
const action = {
  type: "LOGIN"
}
```
After creating an action, the next step is sending the action to the Redux store so it can update its state. 
An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.
```js
const action = {
  type: 'LOGIN'
}
function actionCreator() {
  return action
}
```
dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:
```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. 
Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. 
Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. 

A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.

    && Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe listener functions to the store,

Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux createStore() method.
n order to let us combine multiple reducers together, Redux provides the combineReducers() method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.
Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way.
```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```
 A useful tool for handling objects is the Object.assign() utility. Object.assign() takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:
 ```js
 const newObject = Object.assign({}, obj1, obj2);
 ```
 This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.
 ```js
 Object.assign({}, state, {status: "online"})
 ```


 ## React & Redux

 Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.
 Because Redux is not designed to work with React out of the box, you need to use the react-redux package. It provides a way for you to pass Redux state and dispatch to your React components as props.

 
 









