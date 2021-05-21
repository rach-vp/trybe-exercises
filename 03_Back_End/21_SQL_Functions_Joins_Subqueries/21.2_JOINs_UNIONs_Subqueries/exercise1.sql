-- Exercise 1: Using INNER JOIN, find domestic sales and international sales of each movie
SELECT
  *
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id;