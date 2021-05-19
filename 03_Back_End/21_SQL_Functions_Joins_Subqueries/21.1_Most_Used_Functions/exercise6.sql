-- Exercise 6: Write a query to show the amount of people that work as programmers (IT_PROG).
SELECT
  COUNT(*)
FROM
  hr.employees
WHERE
  job_id = 'IT_PROG';