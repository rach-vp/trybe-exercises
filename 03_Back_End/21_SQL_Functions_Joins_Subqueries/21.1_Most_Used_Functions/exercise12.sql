-- Exercise 12: Write a query that shows the information only of the employees whose first name has 8 or more characters.
SELECT
  *
FROM
  hr.employees
WHERE
  LENGTH(first_name) >= 8;