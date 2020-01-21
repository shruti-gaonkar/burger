-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create a database called programming_db --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
    id INT NOT NULL auto_increment,
    -- Makes a string column called "burger_name" which cannot contain null --
    burger_name VARCHAR(25) NOT NULL,
    -- Creates a boolean column called "burger_name" which will automatically fill --
    -- with false when a new row is made and the value isn't otherwise defined. --
    devoured BOOLEAN DEFAULT false,
    -- Sets id as this table's primary key which means all data contained within it will be unique --
    PRIMARY KEY (id)
); 