-- Exercise 9: Using EXISTS, select the name and location of the theaters which doesn't have movies in exibition.
SELECT
  t.name as name,
  t.location as location
FROM
  pixar.theater t
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      pixar.movies m
    WHERE
      m.theater_id = t.id
  );