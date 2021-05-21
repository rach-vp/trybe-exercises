-- Exercise 3: Using INNER JOIN, create a query that returns the movies and their rating in descending order.
SELECT
  m.title as title,
  bo.rating as rating
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id
ORDER BY
  bo.rating DESC;