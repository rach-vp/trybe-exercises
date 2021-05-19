-- Exercise 9: Write a query to show, in descending order, the salarial average of all jobs, except the programmers'.
SELECT
  job_id,
  AVG(salary) as average
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id <> 'IT_PROG'
ORDER BY
  AVG(salary) DESC;