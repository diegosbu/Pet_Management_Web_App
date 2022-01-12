CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username varchar(255) UNIQUE NOT NULL,
    passwrd varchar(255) NOT NULL
);