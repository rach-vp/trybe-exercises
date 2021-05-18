-- Exercise 1: Write a query to show all pieces that begins with "GR"
USE `PecasFornecedores`;
SELECT
  *
FROM
  `Pecas`
WHERE
  name LIKE "GR%";