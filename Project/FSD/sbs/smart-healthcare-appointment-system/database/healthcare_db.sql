-- healthcare_db.sql
-- Optional: use this if you want to connect to a real MySQL database later
-- instead of the in-memory data.js file used in the backend by default.

CREATE DATABASE IF NOT EXISTS healthcare_db;
USE healthcare_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('patient', 'doctor', 'admin') NOT NULL,
    specialization VARCHAR(100),
    age INT,
    gender VARCHAR(20)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(20) NOT NULL,
    status ENUM('Pending', 'Confirmed', 'Cancelled') DEFAULT 'Pending',
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES users(id)
);

-- Sample data
INSERT INTO users (name, email, password, role, specialization) VALUES
('Dr. Aisha Khan', 'aisha@hospital.com', '123456', 'doctor', 'Cardiologist'),
('Dr. Rohan Mehta', 'rohan@hospital.com', '123456', 'doctor', 'Dermatologist'),
('Dr. Neha Verma', 'neha@hospital.com', '123456', 'doctor', 'Pediatrician'),
('Dr. Karan Patel', 'karan@hospital.com', '123456', 'doctor', 'Orthopedic Surgeon'),
('Dr. Sneha Iyer', 'sneha@hospital.com', '123456', 'doctor', 'Neurologist'),
('Dr. Vikram Rao', 'vikram@hospital.com', '123456', 'doctor', 'General Physician');

INSERT INTO users (name, email, password, role, age, gender) VALUES
('Priya Sharma', 'priya@gmail.com', '123456', 'patient', 28, 'Female');

INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@hospital.com', 'admin123', 'admin');
