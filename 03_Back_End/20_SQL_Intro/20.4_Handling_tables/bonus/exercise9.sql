-- Exercise 8: Update to 6.0, in table boxoffice, the rating of all movies that earned less than 300 millions in international sales and more than 200 millions in domestic sales.
UPDATE
  pixar.boxoffice
SET
  rating = 6.0
WHERE
  (
    international_sales < 300000000
    AND domestic_sales > 200000000
  );