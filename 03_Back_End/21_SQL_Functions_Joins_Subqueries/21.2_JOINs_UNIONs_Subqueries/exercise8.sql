-- Exercise 8: Using EXISTS, select the name and location of the theaters which there are movies in exibition.
SELECT
  t.name as name,
  t.location as location
FROM
  pixar.theater t
WHERE
  EXISTS (
    SELECT
      *
    FROM
      pixar.movies m
    WHERE
      m.theater_id = t.id
  );