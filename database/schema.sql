-- Example schema for TrustLens
CREATE DATABASE IF NOT EXISTS trustlens;
USE trustlens;

CREATE TABLE IF NOT EXISTS websites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(2083) NOT NULL,
  trust_score INT DEFAULT 0,
  checks JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
