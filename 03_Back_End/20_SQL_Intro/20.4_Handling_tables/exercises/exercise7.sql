-- Exercise 7: Delete from table Movies all the movies directed by 'Andrew Staton'
-- DELETE FROM
--   pixar.movies
-- WHERE
--   director = 'Andrew Staton';
SELECT
  id
FROM
  pixar.movies
WHERE
  director = 'Andrew Staton';
--Returns 2 and 9
DELETE FROM
  pixar.boxoffice
WHERE
  movie_id IN (2, 9);
DELETE FROM
  pixar.movies
WHERE
  director = 'Andrew Staton';