-- Exercise 1: Write a query to show all the info of all scientists that have the letter "e" in their names.
USE `Scientists`;
SELECT
  *
FROM
  `scientists`
WHERE
  name LIKE "%e%";