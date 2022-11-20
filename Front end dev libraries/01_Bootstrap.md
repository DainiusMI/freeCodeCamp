### Use Responsive Design with Bootstrap Fluid Containers:

Bootstrap responsive CSS framework will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.
With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.
You can add Bootstrap to any app by adding the following code to the top of your HTML:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.


### Make Images Mobile Responsive:

First, add a new image below the existing one. Set its src attribute to https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.
It would be great if this image could be exactly the width of our phone's screen.
Fortunately, with Bootstrap, all we need to do is add the img-responsive class to your image. Do this, and the image should perfectly fit the width of your page.


### Center Text with Bootstrap:

Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element.

### Create a Bootstrap Button:

Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.
Create a new button element below your large kitten photo. Give it the btn and btn-default classes, as well as the text of Like.


### Create a Block Element Bootstrap Button:

Normally, your button elements with the btn and btn-default classes are only as wide as the text that they contain. For example:
By making them block elements with the additional class of btn-block, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.
    
    && Note that these buttons still need the btn class.

### Taste the Bootstrap Button Color Rainbow:

The btn-primary class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.
Replace Bootstrap's btn-default class with btn-primary in your button.

    && Note that this button will still need the btn and btn-block classes.


### Call out Optional Actions with btn-info:

Bootstrap comes with several pre-defined colors for buttons. The btn-info class is used to call attention to optional actions that the user can take.
Create a new block-level Bootstrap button below your Like button with the text Info, and add Bootstrap's btn-info class to it.

    && Note that these buttons still need the btn and btn-block classes.


### Warn Your Users of a Dangerous Action with btn-danger:

Bootstrap comes with several pre-defined colors for buttons. The btn-danger class is the button color you'll use to notify users that the button performs a destructive action, such as deleting a cat photo.
Create a button with the text Delete and give it the class btn-danger.

    && Note that these buttons still need the btn and btn-block classes.


### Use the Bootstrap Grid to Put Elements Side By Side:

Bootstrap uses a responsive 12-column grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div elemen
Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens.

Take for example Bootstrap's col-md-* class. Here, md means medium, and * is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

In the Cat Photo App that we're building, we'll use col-xs-*, where xs means extra small (like an extra-small mobile phone screen), and * is the number of columns specifying how many columns wide the element should be.

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one <div class="row"> element, then each of them within a <div class="col-xs-4"> element.

The row class is applied to a div, and the buttons themselves can be nested within it.


### Ditch Custom CSS for Bootstrap:

We can clean up our code and make our Cat Photo App look more conventional by using Bootstrap's built-in styles instead of the custom styles we created earlier.

Delete the .red-text, p, and .smaller-image CSS declarations from your style element so that the only declarations left in your style element are h2 and thick-green-border.

Then delete the p element that contains a dead link. Then remove the red-text class from your h2 element and replace it with the text-primary Bootstrap class.

Finally, remove the smaller-image class from your first img element and replace it with the img-responsive class.


### Use a span to Target Inline Elements:

You can use spans to create inline elements. Remember when we used the btn-block class to make the button fill the entire row?

That illustrates the difference between an "inline" element and a "block" element.

By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently.

Using a span element, nest the word love inside the p element that currently has the text Things cats love. Then give the span the class text-danger to make the text red.


### Create a Custom Heading:

We will make a simple heading for our Cat Photo App by putting the title and relaxing cat image in the same row.

Remember, Bootstrap uses a responsive grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Nest your first image and your h2 element within a single <div class="row"> element. Nest your h2 element within a <div class="col-xs-8"> and your image in a <div class="col-xs-4"> so that they are on the same line.

        $$ Notice how the image is now just the right size to fit along the text?

    
### Add Font Awesome Icons to our Buttons:
Font Awesome is a convenient library of icons. These icons can be webfonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

You can include Font Awesome in any app by adding the following code to the top of your HTML:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```
The i element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the i element to turn it into an icon, for example:
```html 
<i class="fas fa-info-circle"></i>
```
Note that the span element is also acceptable for use with icons.

Use Font Awesome to add a thumbs-up icon to your like button by giving it an i element with the classes fas and fa-thumbs-up. Make sure to keep the text Like next to the icon.


### vAdd Font Awesome Icons to all of our Buttons:

Font Awesome is a convenient library of icons. These icons can be web fonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

Use Font Awesome to add an info-circle icon to your info button and a trash icon to your delete button.

        && Note: The span element is an acceptable alternative to the i element for the directions below.


### Responsively Style Radio Buttons:

You can use Bootstrap's col-xs-* classes on form elements, too! This way, our radio buttons will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest both your radio buttons within a <div class="row"> element. Then nest each of them within a <div class="col-xs-6"> element.

        && Note: As a reminder, radio buttons are input elements of type radio.


### Responsively Style Checkboxes:

Since Bootstrap's col-xs-* classes are applicable to all form elements, you can use them on your checkboxes too! This way, the checkboxes will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest all three of your checkboxes in a <div class="row"> element. Then nest each of them in a <div class="col-xs-4"> element.


### Style Text Inputs as Form Controls:

You can add the fa-paper-plane Font Awesome icon by adding <i class="fa fa-paper-plane"></i> within your submit button element.

Give your form's text input field a class of form-control. Give your form's submit button the classes btn btn-primary. Also give this button the Font Awesome icon of fa-paper-plane.

All textual <input>, <textarea>, and <select> elements with the class .form-control have a width of 100%.