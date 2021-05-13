USE Piecesproviders;
SELECT
  *
FROM
  Provides
ORDER BY
  `price` DESC
LIMIT
  4 OFFSET 3;