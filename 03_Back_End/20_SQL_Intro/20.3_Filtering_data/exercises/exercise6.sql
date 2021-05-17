-- Exercise 6: Write a query to show the providingd where pieces cost more than R$15,00 and less than R$40,00.
-- Order the results in ascending order.
USE `PecasFornecedores`;
SELECT
  *
FROM
  `fornecimentos`
WHERE
  preco BETWEEN 15
  and 40
ORDER BY
  preco ASC;