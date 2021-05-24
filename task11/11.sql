SELECT DATEDIFF(CURDATE(), MIN(CREATED_AT))
AS days_number
FROM discount.products