-- Exercise 4: Write a query to show the amount of money required to pay all employees.
SELECT
  SUM(salary) as total_cash
FROM
  hr.employees;