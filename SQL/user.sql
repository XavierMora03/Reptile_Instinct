
CREATE USER 'storeAdmin'@'localhost' IDENTIFIED BY 'test';
GRANT ALL PRIVILEGES ON store.* TO 'storeAdmin'@'localhost';
