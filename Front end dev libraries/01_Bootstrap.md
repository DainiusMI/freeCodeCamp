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
