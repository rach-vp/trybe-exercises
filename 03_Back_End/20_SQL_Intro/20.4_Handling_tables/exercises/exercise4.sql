-- Exercise 4: The title of the movie 'Ratatouille' is mistakenly written in table Movies, besides it was released in 2007 not in 2010.
-- Fix these information.
UPDATE
  pixar.movies
SET
  title = 'Ratatouille',
  year = 2007
WHERE
  title = 'ratatui';