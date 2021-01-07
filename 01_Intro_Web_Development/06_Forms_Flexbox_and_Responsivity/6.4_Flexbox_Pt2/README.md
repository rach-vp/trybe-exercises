# 6.4 - Flexbox Pt2

## Now practice

To solve the exercise, create an HTML and CSS file, copy and paste the code below and follow the instructions of each subheading.

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <div class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </div>
    </header>

  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}
```

## Part 1

1. Add a ``flexbox`` property that defines the size of ``268px`` to the image container and ``500px`` to the menu container.
2. Add a ``flexbox`` property that modifies the order in which the logo and menu items shows on screen.
3. Add a ``flexbox`` property that modifies the default size of the menu container when the page width is bigger than ``768px``.
4. Use the property ``align-self`` on the right element in order to the page ``header`` has the following behaviour:

![Header example](exercicio-4.jpeg)

## Part 2

Let's continue practising and construct the ``main`` part of the page. Copy and paste the following HTML and CSS codes.

```html
    <main class="main-container">
      <div class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assitidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </div>

      <aside class="aside-container">
        <h3>Últimas notícias</h3>

        <h4>Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

        <h4>Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

        <h4>Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
      </aside>
    </main>
```

```css
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
```

1. Apply a base of ``350px`` to your container aside container.
2. Apply an alignment to centralize it and another to expand it.
3. Add a property that makes your movie container to have a base of ``700px`` and another base of ``16%`` to its ``div`` tags.
4. Apply a property with a value of 10 to expand the movie container.
5. Add a property with a value of 1 that makes its ``div`` tags in order to occupies all blank space.
