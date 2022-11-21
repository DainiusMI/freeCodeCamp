

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

