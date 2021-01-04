# 5.1 - DOM and Selectors

## Exercises

It's time to apply your knowledge in handling HTML elements!

1. Next, you're going to see a piece of ``HTML`` and ``CSS`` code
2. Create a file ``HTML`` in your directory and copy and paste the code
3. Read the instructions written in a comment inside the tag ``<script>``
4. Don't forget to commit after each exercise

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>

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
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    <div class="main-content">
      <div class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </div>
    </div>
    <script>
        /*
        Here you're going to modify the elements existing using only the functions:
          - document.getElementById()
          - document.getElementsByClassName()
          - document.getElementsByTagName()
        1. Create a function that changes the inner text of <p> tag to a description of how you see yourself two years from now. (Don't take too much time thinking of the text but do it on the exercise)
        2. Create a function that changes the color of the yellow sqaure to Trybe green (rgb(76,164,109))
        3. Create a function that changes the color of the red sqaure to white
        4. Createa a function that corrects the inner text of <h1> tag
        5. Create a function that modifies all inner text of <p> tag to upper case
        6. Create a function that shows the content of all <p> tags on the console
        */
    </script>
  </body>
</html>
```
