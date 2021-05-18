-- Exercise 6: Delete from table Movies the movie 'WALL-E'.
-- Remember that a relation with table BoxOffice exists.
SET
  @id = (
    SELECT
      id
    FROM
      pixar.movies
    WHERE
      title = 'WALL-E'
  );
DELETE FROM
  pixar.boxoffice
WHERE
  movie_id = @id;
DELETE FROM
  pixar.movies
WHERE
  id = @id;