# Notifications.css
Small **CSS**/**SASS** framework to dinamically create a notification tiles

> Use the SASS file for deeper personalization

## Installation
You can include [this file](https://github.com/Rawnly/notifications.css/blob/master/notifications.css) or use the **RawGit CDN** below.

```html
  <link rel="stylesheet" href="  https://rawgit.com/Rawnly/notifications.css/master/notifications.css">
```

## Usage

There are starter class `.tile` and `.notification` the difference is the **position**, on `.tile` the position is **absolute** and on `.notification` is fixed.

See the [example doc](docs/index.html) for more examples.


### Types
There are 4 default styles,

- info
- success
- alert
- error

You can also animate them with `.fl`, who gives an awsome floating animation!

### Positioning
You can put tiles everywere, there are 4 main classes about positioning,

- top
  * left
  * right

- mid
  * top
  * left
  * right
  * bottom

- bottom
  * left
  * right

- center

## Example code

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title> My Home </title>
      <link rel="stylesheet" href="path/to/notification.css">
    </head>
    <body>

      <!-- Message Notification -->
      <span id="message" class="notification info bottom right">
        Hey you have a message!
      </span>

      <script>
        $('#message').slideToggle()
      </script>
    </body>
  </html>
```
