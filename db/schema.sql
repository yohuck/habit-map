DROP DATABASE IF EXISTS habitTracker_db;
CREATE DATABASE habitTracker_db;

-- USE habitTracker_db;

-- CREATE TABLE user (
--     id INT NOT NULL,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     age INT NOT NULL,
--     time_zone DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
--     profile_picture,
--     phone_number VARCHAR(255) NOT NULL,
-- );

-- CREATE TABLE goals (
--     id INT NOT NULL,
--     category_id INT NOT NULL,
--     goal_description TEXT NOT NULL,
--     deadline_date DATETIME DEFAULT FUTURE_TIMESTAMP
--     FOREIGN KEY (user_id) REFERENCES
-- );

-- CREATE TABLE enrties (
--     id INT NOT null,
--     associated_goal TEXT NOT NULL,
--     notes TEXT NOT NULL,
--     time CURRENT_TIMESTAMP NOT NULL,
--     input boolean NOT NULL,
-- );

-- CREATE TABLE reminders (
--     id INT NOT NULL,
--     time CURRENT_TIMESTAMP,
--     copy INT NOT NULL,
--     FOREIGN KEY (goals_id),
--     FOREIGN KEY (user_id),
--     delivery_type (phone_number) IN NOT NULL,
-- )
