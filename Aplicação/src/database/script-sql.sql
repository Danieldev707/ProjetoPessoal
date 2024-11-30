CREATE DATABASE djavan;

USE djavan;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(25)
);

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    pontos INT, 
    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE completeMusica (
    idComplete INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    pontos INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

SELECT * FROM completeMusica;


SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM completeMusica;
