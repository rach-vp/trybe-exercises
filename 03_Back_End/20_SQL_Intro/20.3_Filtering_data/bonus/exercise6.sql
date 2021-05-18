-- Exercise 6: Write a query to show all the info of all projects which hours are greater than 250 and lower than 800.
SELECT
  *
FROM
  Scientists.Projects
WHERE
  hours BETWEEN 250
  and 800;