-- Exercise 7: Write a query to show the amount of sales done between 15/04/2018 and 30/04/2019.
USE `PecasFornecedores`;
SELECT
  COUNT(*)
FROM
  `vendas`
WHERE
  DATE(order_date) BETWEEN '2018-04-15'
  AND '2019-04-30';