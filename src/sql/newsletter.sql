CREATE DATABASE newsletter_portal;

USE newsletter_portal;

CREATE TABLE newsletter (
  id_place INT NOT NULL PRIMARY KEY,
  name VARCHAR(80),
  address VARCHAR(100),
  id_table INT NOT NULL,
  date DATETIME,
  votes INT NOT NULL
);

INSERT INTO newsletter (id_place, name, address, id_table, date, votes);

SELECT * FROM newsletter;