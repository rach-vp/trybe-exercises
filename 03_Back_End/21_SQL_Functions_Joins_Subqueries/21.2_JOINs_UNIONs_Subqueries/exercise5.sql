-- Exercise 5: Using RIGHT JOIN, create a query that returns all thedata from the movies, evene if they aren't in exibition and, additionally the theater that exibits them.
-- Theaters names must be sorted in ascending order.
SELECT
  m.title as movie,
  m.year as realease_year,
  t.name as theater,
  t.location as location
FROM
  pixar.theater t
  RIGHT JOIN pixar.movies m ON t.id = m.theater_id
ORDER BY
  t.name ASC;