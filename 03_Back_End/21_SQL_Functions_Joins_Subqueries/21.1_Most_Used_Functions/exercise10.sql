-- Exercise 10: Write a query to show the salarial average and the amount of employees form all departments with more than 10 employees.
SELECT
  department_id,
  AVG(salary) as avg_salary,
  COUNT(employee_id) as `total_employees`
FROM
  hr.employees
GROUP BY
  department_id
HAVING
  `total_employees` > 10;