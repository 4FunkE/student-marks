DROP DATABASE IF EXISTS studentmark_db;
CREATE DATABASE studentmark_db;

USE studentmark_db;

CREATE TABLE teachers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    course_id INT
);

CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    course_id INT
);

CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  teachers_id INT,
  students_id INT,
  course_details TEXT,
  FOREIGN KEY (teachers_id)
  REFERENCES teachers(id)
  ON DELETE SET NULL,
  FOREIGN KEY (students_id) REFERENCES students(id) ON DELETE SET NULL
);


