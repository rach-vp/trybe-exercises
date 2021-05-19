-- Exercise 11: Write a query that updates the column phone_number, so that phone numbers starting with 515 should onw start with 777.
UPDATE
  hr.employees
SET
  phone_number = REPLACE(phone_number, 515, 777)
WHERE
  LEFT(phone_number, 3) = 515;