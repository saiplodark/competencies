 -- buyers table
 CREATE TABLE buyers(
     buyer_id SERIAL PRIMARY KEY,
     username TEXT,
     hashed_password TEXT,
 );


-- cards table
CREATE TABLE cars(
    car_id SERIAL PRIMARY KEY,
    make VARCHAR(50),
    model TEXT,
    price DECIMAL,
    mileage FLOAT,
    img TEXT,
    buyer_id INT REFERENCES  buyers(buyer_id)
);