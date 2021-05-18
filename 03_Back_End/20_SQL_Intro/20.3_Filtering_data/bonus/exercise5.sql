-- Exercise 5: Write a query to show all info from all projects with more than 500 hours.
SELECT
  *
FROM
  Scientists.Projects
WHERE
  hours > 500;