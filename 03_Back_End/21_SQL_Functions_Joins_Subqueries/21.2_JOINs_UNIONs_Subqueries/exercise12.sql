-- Exercise 12: Create two queries, one using SUBQUERY and other using INNER JOIN, that returns the title of the movies which earned more than 500 millions and have length greater than 110 minutes.
-- SUBQUERY (query cost: 2.63)
SELECT
  *
FROM
  pixar.movies m
WHERE
  m.id IN (
    SELECT
      bo.movie_id
    FROM
      pixar.boxoffice bo
    WHERE
      bo.domestic_sales + bo.international_sales > 500000000
  )
  AND m.length_minutes > 110;
--INNER JOIN (query cost: 2.63)
SELECT
  *
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id
WHERE
  bo.domestic_sales + bo.international_sales > 500000000
  AND m.length_minutes > 110;