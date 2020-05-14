INSERT INTO buyers(username,  hashed_password)
VALUES
($1, $2)
RETURNING *;
