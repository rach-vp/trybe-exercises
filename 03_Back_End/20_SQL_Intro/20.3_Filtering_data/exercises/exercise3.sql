-- Exercise 3: Write a query to show pieces, prices and providers of all providings in which the provider's code contains the leter "N"
USE `PecasFornecedores`;
SELECT
  peca,
  preco,
  fornecedor
FROM
  `fornecimentos`
WHERE
  fornecedor like "%N%";