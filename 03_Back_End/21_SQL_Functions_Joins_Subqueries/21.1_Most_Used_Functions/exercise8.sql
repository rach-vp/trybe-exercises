-- Exercise 8: Using the previous query, make some changes in order to show only the amount of money required to cover the pay sheet of the programmers.
SELECT
  job_id,
  SUM(salary) AS sum_salary
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id = 'IT_PROG';