-- Exercise 7: Write a query to show the name and the code of all projects which name doesn't begins with the letter "A"
SELECT
  Name,
  `Code`
FROM
  scientists.projects
WHERE
  Name NOT LIKE "A%";