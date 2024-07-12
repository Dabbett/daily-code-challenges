--find customers with last names that start with ey or li
SELECT * 
FROM customers
WHERE last_name REGEXP '^ey|li'
--find customers where first name includes ru or bu
SELECT *
FROM customers
WHERE first_name REGEXP 'ru|bu'
--find customers that doesnt have a phone number on file
SELECT *
from customers
WHERE phone IS NULL
-- get users that are adults
SELECT * 
FROM users
WHERE age >= 18
--- find customers that are not adults
SELECT * 
FROM users
WHERE age < 18