## SASS

### Store Data with Sass Variables:
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:
```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```
And to use the variables:
```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.


### Nest CSS with Sass:

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:
```scss
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```
For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:
```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```


### Create Reusable CSS with Mixins:

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:
```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```
It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:
```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```
The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:
```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

### Use @if and @else to Add Logic To Your Styles:

The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.
```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```
And just like in JavaScript, @else if and @else test for more conditions:
```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```
Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else:
```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```
If $val is not light, medium, or heavy, the border should be set to none.
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


### Use @for to Create a Sass Loop:

The @for directive adds styles in a loop, very similar to a for loop in JavaScript.

@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

Here's a start through end example:
```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:
```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```
This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

Write a @for directive that takes a variable $j that goes from 1 to 6.

It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 15px multiplied by the index.
```scss
@for $j from 1 to 6 {
  .text-#{$j} {
    font-size: $j * 15px;
  }
}
```


### 