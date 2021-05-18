-- Exercise 3: Write a query to show the code and the name of all projects that have in its code the number 3.
-- Order the results alphabetically.
USE `Scientists`;
SELECT
  code,
  name
FROM
  `projects`
WHERE
  code LIKE "%3%"
ORDER BY
  name ASC;