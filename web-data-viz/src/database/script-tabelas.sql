
CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
    senha VARCHAR(45),
);

CREATE TABLE emocoes (
	idEmocao INT PRIMARY KEY AUTO_INCREMENT,
	emocao VARCHAR(30)
);

CREATE TABLE anotacao (
	idAnotacao INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(500),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

create table quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	qtdAcertos VARCHAR(45),
    fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


create table usuarioEmocao (
	idUsuEmocao INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario int,
    fkEmocao int,
    foreign key (fkUsuario) references usuario (idUsuario),
    foreign key (fkEmocao) references emocoes (idEmocao)
);

insert into usuario values 
(1, 'Leandro', 'leandroqa0906@gmail.com', 'Lehgamer0308@', 49053476882);

insert into emocoes values 
(default, 'felicidade');

insert into anotacao values
(default, 'Amém', 1);

insert into quiz values 
(default, 10, 0, 1);

insert into usuarioEmocao values 
(default, 1, 1);

-- select * from usuario;
-- select * from emocoes;
-- select * from anotacao;
-- select * from quiz;
-- select * from usuarioEmocao;

-- select usuario.nome, emocoes.descricao from usuario join
--   emocoes on idUsuario = idEmocao join
--    usuarioEmocao on idUsuario = fkUsuario;
   
   

