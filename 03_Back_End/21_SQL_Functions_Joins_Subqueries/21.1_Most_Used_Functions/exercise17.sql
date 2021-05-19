-- Exercise 17: Write a query that show the last name and hiring date of all employees hired in July 1987.
SELECT
  last_name,
  hire_Date
FROM
  hr.employees
WHERE
  (
    MONTH(HIRE_DATE) = 7
    and YEAR(HIRE_DATE) = 1987
  );