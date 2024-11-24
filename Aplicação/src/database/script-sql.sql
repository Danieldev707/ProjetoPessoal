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
    pontos INT,
    acertos INT,
    erros INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


SELECT * FROM usuario;
SELECT * FROM quiz;
