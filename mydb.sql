CREATE DATABASE store;

BACKUP DATABASE store
  TO "~/bakdb/";

CREATE TABLE store.reptiles (
  id  INT   ,
  name varchar(64),
  regularPrice DECIMAL(7,2),
  price DECIMAL(7,2),
  age ENUM("Cria","Juvenil","Adulta"),
  descrption varchar(256),
  genre ENUM("M","H"),

  PRIMARY KEY(id)
);

CREATE TABLE store.geneticas(
  id INT,
  genName varchar(64),
  tipo ENUM("Recesivo","Dominante","Co-dominante","Heterocigoto","Otro"),
  color char(6),
  PRIMARY KEY(id)
);

CREATE TABLE store.reptiles-geneticas (
  reptileID INT,
  geneticID INT,
  FOREIGN KEY(reptileID) REFERENCES store.reptiles(id),
  FOREIGN KEY(geneticID) REFERENCES store.geneticas(id) 
);

ALTER TABLE store.reptiles-geneticas
ADD CONSTRAIN UNIQUE (reptileID,geneticID);

CREATE TABLE store.fotos-reptiles(
  id INT,
  img MEDIUMBLOB,
  FOREIGN KEY(id) REFERENCES store.reptiles(id)
);
