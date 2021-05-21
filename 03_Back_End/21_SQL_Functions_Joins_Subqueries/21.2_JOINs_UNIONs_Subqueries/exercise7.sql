-- Exercise 7: Create two queries, one using SUBQUERY and other using INNER JOIN, that returns the rating of all movies released after 2009.
-- SUBQUERY (query cost: 2.63)
SELECT
  rating
FROM
  pixar.boxoffice bo
WHERE
  bo.movie_id IN (
    SELECT
      m.id
    FROM
      pixar.movies m
    WHERE
      m.year > 2009
  );
-- INNER JOIN (query cost: 2.63)
SELECT
  bo.rating
FROM
  pixar.boxoffice bo
  INNER JOIN pixar.movies m ON m.id = bo.movie_id
WHERE
  m.year > 2009;