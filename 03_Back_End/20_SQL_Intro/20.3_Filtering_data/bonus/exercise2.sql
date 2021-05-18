-- Exercise 2: Write a query to show the name of all projects which the code begins with letter "A".
-- Order the results alphabetically.
USE `Scientists`;
SELECT
  name
from
  `projects`
WHERE
  name LIKE "A%"
ORDER BY
  name ASC ';