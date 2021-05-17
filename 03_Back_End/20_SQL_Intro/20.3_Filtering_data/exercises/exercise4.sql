-- Exercise 4: Write a query to show all the info from providers which are Limited (LTDA). Sort the results in alphabetically descending order.
USE `PecasFornecedores`;
SELECT
  *
FROM
  `fornecedores`
WHERE
  name LIKE "%LTDA"
ORDER BY
  name DESC;