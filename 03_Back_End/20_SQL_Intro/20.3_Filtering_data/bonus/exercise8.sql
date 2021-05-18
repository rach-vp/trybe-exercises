-- Exercise 8: Write a query to show the name of all projects which code contains the letter "H"
SELECT
  Name
FROM
  scientists.projects
WHERE
  Name NOT LIKE '%h%';