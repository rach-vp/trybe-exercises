-- Exercise 8: Update to 9.0, in table boxoffice, the rating of all movies that earned more than 400 millions in domestic sales.
UPDATE
  pixar.boxoffice
SET
  rating = 9.0
WHERE
  domestic_sales > 400000000;