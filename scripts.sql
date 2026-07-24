-- CREATE database
CREATE DATABASE FastTrack;

-- CREATE tables
       -- Product table
CREATE TABLE Items (
                       item_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                       item_name VARCHAR(255),
                       item_price DECIMAL(2),
                       item_qty SMALLINT,
                       item_desc VARCHAR(255),
                       item_img VARCHAR(255)
);
-- Cart table
CREATE TABLE Cart (
                      cart_id GENERATED ALWAYS AS IDENTITY PRIMARY KEY
);
-- Card table
CREATE TABLE Card (
                      card_id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                      card_number INT,
                      card_ccv SMALLINT,
);
-- Client table
CREATE TABLE Client (
                        client_id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                        client_name VARCHAR(255),
                        client_email VARCHAR(255),
                        client_password VARCHAR(255)
);

-- WRITE to Product table
INSERT INTO Items (item_name, item_price, item_qty, item_desc, item_img)
VALUES ('Bananas', 1.50, 10, 'Fresh bananas', 'https://ww-static-prod.s3.amazonaws.com/wp-content/uploads/2019/02/bananas-sp.jpg');