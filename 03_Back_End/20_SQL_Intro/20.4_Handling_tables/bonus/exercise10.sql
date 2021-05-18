-- Exercise 10: Delete from table Movies all movies with less than 100 minutes of duration.
SELECT
  id
FROM
  pixar.movies
WHERE
  length_minutes < 100;
-- IDs found: 1, 6, 7, 8, 12
DELETE FROM
  pixar.boxoffice
WHERE
  movie_id IN (1, 6, 7, 8, 12);
DELETE FROM
  pixar.movies
WHERE
  length_minutes < 100;