-- Exercise 18: Write a query that show the following the following information of each employee:
-- name, last name, time of service (days)
SELECT
  first_name as `name`,
  last_name as `last name`,
  DATEDIFF(CURRENT_DATE(), hire_date) as `time of service (days)`
FROM
  hr.employees;