-- Exercise 4: Using LEFT JOIN, create a query that returns all the data from the theaters, even those  that don't have movies in exibition and, in addition, the data from all the movies that are in exibition in these theaters.
-- Theaters names must be sorted in ascending order.
SELECT
  t.name as theater,
  t.location as location,
  m.title as movie,
  m.year as realease_year
FROM
  pixar.theater t
  LEFT JOIN pixar.movies m ON t.id = m.theater_id
ORDER BY
  t.name ASC;