-- Exercise 5: Write a query to show the amount of providers that contains the letter F in their codes
USE `PecasFornecedores`;
SELECT
  COUNT(*) as Amount
FROM
  `fornecedores`
WHERE
  code LIKE "%F%";