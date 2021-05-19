-- Exercise 2: Write a query to show the difference between the greatest and lowest salary.
SELECT
  MAX(salary) - MIN(salary)
FROM
  hr.employees;