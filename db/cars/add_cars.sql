INSERT INTO cars(make,model,price,mileage,img,buyer_id)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;

