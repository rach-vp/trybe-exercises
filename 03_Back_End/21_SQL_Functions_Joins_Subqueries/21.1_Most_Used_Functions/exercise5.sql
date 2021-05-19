-- Exercise 5: Write a query that show 4 information:
-- the greatest salary, the lowest salary, the sum of all salaries and the average of all salaries.
-- Each value must be formatted to have two decimal places.
SELECT
  ROUND(MAX(salary), 2) as greatest_salary,
  ROUND(MIN(salary), 2) as lowest_salary,
  ROUND(SUM(salary), 2) as sum_salaries,
  ROUND(AVG(salary), 2) as salaty_avg
FROM
  hr.employees;