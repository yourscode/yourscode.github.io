CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang ;
CREATE TABLE book(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    price DECIMAL(10,2),
    pubDate DATETIME
)
INSERT INTO book VALUES(null,"PHP",10,"2010-10-20");
INSERT INTO book VALUES(null,"CSS",50,"2016-01-02");
INSERT INTO book VALUES(null,"Python",70,"2019-07-12");
INSERT INTO book VALUES(null,"JavaScript",90,"2017-11-07");