-- Exercise 10: Using INNER JOIN, select all the information from movies which are in exibition with rating greater than 8.
SELECT
  *
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id
WHERE
  bo.rating > 8
  AND m.theater_id IS NOT NULL;