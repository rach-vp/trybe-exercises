-- Exercise 2: Write a query to show the providings that contains the piece with code "2".
-- Organize the files with the providers ordered alphabetically
USE `PecasFornecedores`;
SELECT
  peca,
  fornecedor
FROM
  `fornecimentos`
WHERE
  peca = 2
ORDER BY
  fornecedor;