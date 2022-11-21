

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
