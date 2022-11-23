

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







