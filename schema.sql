DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  quantitiy integer NOT NULL,
  description varchar(50) NOT NULL
  PRIMARY KEY (ID)
)
