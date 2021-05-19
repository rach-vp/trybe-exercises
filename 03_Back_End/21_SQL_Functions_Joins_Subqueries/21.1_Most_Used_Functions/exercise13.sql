-- Exercise 13: Write a query to show the following information of each employee.
-- id, first name and year of hiring.
SELECT
  employee_id as id,
  first_name as `first name`,
  YEAR(hire_date) as `year of hiring`
FROM
  hr.employees;