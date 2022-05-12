create database peaky_blinders;

use peaky_blinders;

create table personagem (
id_personagem int primary key auto_increment,
nome_personagem varchar(45),
qtd_votos int );

create table usuario (
id_usuario int primary key auto_increment,
nome_usuario varchar(45),
cpf_usuario varchar(45),
email_usuario varchar(45),
cep_usuario varchar(45),
senha_usuario varchar(45),
fk_personagem int,
foreign key (fk_personagem) references personagem (id_personagem) );

create table comentario (
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
comentario_usuario varchar(200) );