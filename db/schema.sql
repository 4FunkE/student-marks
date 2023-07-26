DROP DATABASE IF EXISTS school_db;
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE teachers (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    emails VARCHAR(50) NOT NULL,
    passwords VARCHAR(50) NOT NULL,
    course VARCHAR(100)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  teachers_id INT,
  course_details TEXT,
  FOREIGN KEY (teachers_id)
  REFERENCES teachers(id)
  ON DELETE SET NULL
);
