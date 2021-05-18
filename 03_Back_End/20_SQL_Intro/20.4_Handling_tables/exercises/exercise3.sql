-- Exercise 3: The director of the movie "Procurando Nemo" is incorrect.
-- This movie was directed by Andrew Staton.
-- Fix this information.
UPDATE
  pixar.movies
SET
  director = 'Andrew Staton'
WHERE
  title = 'Procurando Nemo';