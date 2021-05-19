-- Exercise 3: Write a query that show the medium salary of each job_id, sorting by average in descending order.
SELECT
  job_id,
  AVG(salary)
FROM
  hr.employees
GROUP BY
  job_id
ORDER BY
  AVG(salary) DESC;