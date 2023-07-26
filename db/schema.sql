DROP DATABASE IF EXISTS school_db;
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE teachers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    emails VARCHAR(50) NOT NULL,
    passwords VARCHAR(50) NOT NULL,
    course_id INT
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  teachers_id INT,
  student_id INT,
  course_details TEXT,
  FOREIGN KEY (teachers_id)
  REFERENCES teachers(id)
  ON DELETE SET NULL
);


CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    passwords VARCHAR(50) NOT NULL,
    course_id INT
);
