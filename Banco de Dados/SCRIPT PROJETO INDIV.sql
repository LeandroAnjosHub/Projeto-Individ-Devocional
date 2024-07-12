CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE emocoes (
	idEmocao INT PRIMARY KEY AUTO_INCREMENT,
	emocao VARCHAR(30),
	CONSTRAINT chk_emocao CHECK (emocao IN ('felicidade', 'tristeza', 'raiva', 'ansiedade', 'medo'))	
);

CREATE TABLE anotacao (
	idAnotacao INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(30),
    descricao VARCHAR(500),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

create table quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	qtdAcertos INT,
    qtdErros INT,
    fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


create table usuarioEmocao (
	idUsuEmocao INT AUTO_INCREMENT,
	fkUsuario int,
    fkEmocao int,
    foreign key (fkUsuario) references usuario (idUsuario),
    foreign key (fkEmocao) references emocoes (idEmocao),
    primary key (idUsuEMocao, fkUsuario, fkEmocao)
);

 select * from usuario;
 select * from emocoes;
 select * from anotacao;
 select * from quiz;
 select * from usuarioEmocao;
 
 INSERT INTO usuarioEmocao VALUES (default, 6, (SELECT idEmocao FROM emocoes WHERE emocoes.emocao
        LIKE 'emocao' order by idEmocao desc limit 1));
        
        INSERT INTO quiz VALUES (default, '12', '3', 1);
 
SELECT usuario.nome, quiz.qtdAcertos FROM quiz
  JOIN usuario on idUsuario = fkUsuario;
  
SELECT emocoes.emocao, usuario.idUsuario, usuario.nome FROM usuarioEmocao
   JOIN emocoes ON idEmocao = fkEmocao JOIN usuario
     ON idUsuario = fkUsuario;
     
SELECT emocoes.emocao, usuario.idUsuario, usuario.nome FROM usuarioEmocao
   JOIN emocoes ON idEmocao = fkEmocao JOIN usuario
     ON idUsuario = fkUsuario WHERE idUsuario = 8;     
     
SELECT anotacao.titulo, anotacao.descricao, usuario.nome FROM anotacao
  JOIN usuario ON idUsuario = fkUsuario;
  
SELECT nome, qtdAcertos FROM quiz JOIN 
      usuario ON idUsuario = fkUsuario;
      
select nome, qtdAcertos FROM quiz
  JOIN usuario ON idUsuario = fkUsuario WHERE idUsuario = 8; 
 
SELECT nome, qtdAcertos FROM quiz JOIN 
      usuario ON idUsuario = fkUsuario WHERE idUsuario = 7;
      
SELECT nome, emocao FROM usuarioEmocao 
  JOIN emocoes on idEmocao = fkEmocao 
    JOIN usuario ON idUsuario = fkUsuario WHERE idUsuario = 4;
    
SELECT usuario.nome, emocoes.emocao 
    FROM usuarioEmocao 
    JOIN emocoes ON idEmocao = fkEmocao
    JOIN usuario ON idUsuario = fkUsuario
    WHERE idUsuario = 4;
    
SELECT qtdAcertos FROM quiz WHERE qtdAcertos >= 7;

SELECT max(qtdAcertos), min(qtdAcertos) from quiz
  JOIN usuario on idUsuario = fkUsuario WHERE idUsuario = 2;
  
SELECT usuario.nome, max(qtdAcertos) FROM usuario
 JOIN quiz on idUsuario = fkUsuario GROUP BY nome ORDER BY max(qtdAcertos) DESC;
  
            