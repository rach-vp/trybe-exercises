# 5.2 - Working with Elements

## Exercises

Before beginning, create a HTML file in your directory and copy and paste the code below:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      div {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

The aim of these exercises is practising what you've just learned about DOM. Therefore, you must do the exercises only using JavaScript code.

1. Add a ``h1`` tag with the inner text ``Exercício 5.2 - JavaScript DOM`` as a child of the ``body`` tag
2. Add a ``div`` tag with the class ``main-content`` as child of the ``body`` tag
3. Add a ``div`` tag with the class ``center-content`` as child of the ``div`` tag created in step 2
4. Add a ``p`` tag as child of the ``div`` tag created in step 3 and put some inner text
5. Add a ``div`` tag with the class ``left-content`` as a child of the ``div`` created in step 2
6. Add a ``div`` tag with the class ``right-content`` as a child of the ``div`` created in step 2
7. Add an image with its source set to the value ``https://picsum.photos/200`` and class ``small-image``. This element must be a child of ``div`` created in step 5
8. Add an unordered list with its values from 1 to 10 written in the list items. This list must be a child of ``div`` tag created in step 6
9. Add three ``h3`` tags, all being children of ``div`` tag created in step 2

Now that you've created lots of stuff, let's remove and change some of them:

1. Add the class ``title`` to the ``h1`` tag
2. Add the class ``description`` to the three ``h3`` tags
3. Remove the ``div`` created in step 5
4. Centralize the ``div`` tag created in step 6
5. Switch the background-colour of the parent element of the ``div`` tag created in step 3 to green
6. Remove the last 2 elements of the unordered list
