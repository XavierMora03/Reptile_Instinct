CREATE DATABASE store;

BACKUP DATABASE store
  TO "~/bakdb/";

CREATE TABLE store.reptiles (
  id  INT   ,
  name varchar(64),
  regularPrice DECIMAL(7,2),
  price DECIMAL(7,2),

  PRIMARY KEY(id)
);
