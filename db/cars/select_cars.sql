SELECT   c.car_id,c.make,c.model,c.price,c.mileage,c.img FROM cars c
JOIN buyers b ON c.buyer_id = b.buyer_id
WHERE c.buyer_id =$1;