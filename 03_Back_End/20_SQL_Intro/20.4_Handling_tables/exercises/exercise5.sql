-- Exercise 5: Insert the ratings below in the table BoxOffice.
-- Remember that the column is a foreign key relative to the column id in table Movies.
INSERT INTO
  pixar.boxoffice(
    movie_id,
    rating,
    domestic_sales,
    international_sales
  )
VALUES
  (8, 8.5, 300000000, 250000000),
  (10, 7.4, 460000000, 510000000),
  (11, 9.9, 290000000, 280000000);