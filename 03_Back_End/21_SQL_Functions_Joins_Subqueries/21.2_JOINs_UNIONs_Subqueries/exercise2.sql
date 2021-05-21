-- Exercise 2: Using INNER JOIN, make a query that returns the amount of sales for each movie that has international sales greater than domestic sales.
SELECT
  m.title as title,
  bo.international_sales as international_sales,
  bo.domestic_sales as domestic_sales
FROM
  pixar.movies m
  INNER JOIN pixar.boxoffice bo ON m.id = bo.movie_id
WHERE
  bo.international_sales > bo.domestic_sales;