-- Exercise 2: 'Procurando Nemo' critically acclaimed! It was rated in 6.8, earned 450 millions in the domestical market and 370 millions in international.
-- Add these information to table BoxOffice
INSERT INTO
  pixar.boxoffice(
    movie_id,
    rating,
    domestic_sales,
    international_sales
  )
VALUES
  (9, 6.8, 450000000, 370000000);