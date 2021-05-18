-- Exercise 4: Write a query to show all the scientists (numerical values) which projects are "AeH3", "Ast3", "Che1".
USE `Scientists`;
SELECT
  scientist
FROM
  `assignedto`
WHERE
  project IN ('AeH3', 'Ast3', 'Che1');