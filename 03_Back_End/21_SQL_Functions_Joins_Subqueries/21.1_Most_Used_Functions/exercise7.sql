-- Exercise 7: Write a query to show the amount of money required to make the payment of each job (job_id).
SELECT
  job_id,
  SUM(salary) AS sum_salary
FROM
  hr.employees
GROUP BY
  job_id;