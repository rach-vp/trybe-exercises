-- Exercise 14: Write a query to show the information of each employee:
-- id, first name and month of hiring
SELECT
  employee_id as id,
  first_name as `first name`,
  MONTH(hire_date) as `month of hiring`
FROM
  hr.employees;