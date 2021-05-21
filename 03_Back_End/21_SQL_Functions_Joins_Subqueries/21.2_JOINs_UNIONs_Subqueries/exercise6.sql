-- Exercise 6:  Create two queries, one using SUBQUERY and other using INNER JOIN, that returns the title of the movies which its rating is greater than 7.5
-- SUBQUERY (query cost: 4.37)
SELECT
  title
FROM
  pixar.movies m
WHERE
  m.id IN (
    SELECT
      bo.movie_id
    FROM
      pixar.boxoffice bo
    WHERE
      bo.rating > 7.5
  );
-- INNER JOIN (query cost: 2.63)
SELECT
  title
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id
WHERE
  bo.rating > 7.5;