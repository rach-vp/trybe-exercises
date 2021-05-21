-- Exercise 11: Using SELF JOIN, select the titles and length from the movies which have the same director.
SELECT
  DISTINCT m1.title,
  m1.length_minutes
FROM
  pixar.movies m1,
  pixar.movies m2
WHERE
  m1.director = m2.director
  AND m1.title <> m2.title;