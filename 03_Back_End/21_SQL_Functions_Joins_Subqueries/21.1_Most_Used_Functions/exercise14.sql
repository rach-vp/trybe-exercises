-- Exercise 14: Write a query to show the information of each employee:
-- id, first name and day of hiring (only the day!)
SELECT
  employee_id as id,
  first_name as `first name`,
  DAY(hire_date) as `day of hiring`
FROM
  hr.employees;