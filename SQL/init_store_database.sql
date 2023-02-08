CREATE DATABASE store;

CREATE TABLE store.reptiles (
  id  INT AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  regularPrice DECIMAL(7,2),
  price DECIMAL(7,2) NOT NULL,
  age ENUM("Cria","Juvenil","Adulta") DEFAULT "Cria"  ,
  description varchar(256),
  genre ENUM("M","H") DEFAULT "M",

  PRIMARY KEY(id)
);

CREATE TABLE store.geneticas(
  id INT AUTO_INCREMENT,
  genName varchar(64) NOT NULL,
  tipo ENUM("Recesivo","Dominante","Codominante","Supercodominante","Otro") NOT NULL,
  color char(6),
  PRIMARY KEY(id)
);

CREATE TABLE store.reptiles_geneticas (
  reptileID INT,
  geneticID INT,
  FOREIGN KEY(reptileID) REFERENCES store.reptiles(id),
  FOREIGN KEY(geneticID) REFERENCES store.geneticas(id) ,
  UNIQUE (reptileID,geneticID)
);

CREATE TABLE store.fotos_reptiles(
  id INT AUTO_INCREMENT,
  img MEDIUMBLOB NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(id) REFERENCES store.reptiles(id)
);

CREATE USER 'storeAdmin'@'localhost' IDENTIFIED BY 'test';
GRANT ALL PRIVILEGES ON store.* TO 'storeAdmin'@'localhost';
