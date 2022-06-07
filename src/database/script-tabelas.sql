create database peaky_blinders;

use peaky_blinders;

create table personagem (
id_personagem int primary key auto_increment,
nome_personagem varchar(45));

create table usuario (
id_usuario int primary key auto_increment,
nome_usuario varchar(45),
cpf_usuario varchar(45),
email_usuario varchar(45) unique,
cep_usuario varchar(45),
senha_usuario varchar(45),
fk_personagem int,
foreign key (fk_personagem) references personagem (id_personagem) );

create table comentario (
id_comentario int primary key auto_increment,
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
comentario_usuario varchar(250) );

insert into personagem (id_personagem,nome_personagem)
	values (null,'Arthur Shelby'),
		   (null,'Thomas Shelby'),
           (null,'John Shelby'),
           (null,'Finn Shelby'),
           (null,'Polly Shelby'),
           (null,'Ada Shelby'),
           (null,'Alfie Solomons'),
           (null,'Michael Shelby'),
           (null,'Lizzie Shelby');
           
         select * from comentario;
         select * from usuario;


         /* comando pra votacao */


select nome_personagem,count(fk_personagem) as quantidade_votos from usuario      /* 5 maiores */
join personagem on id_personagem = fk_personagem group by fk_personagem order by count(fk_personagem) desc limit 5;

select nome_personagem,count(fk_personagem) from usuario join personagem on id_personagem = fk_personagem 
group by fk_personagem order by fk_personagem desc limit 1;   /* maior */

         
         
         
         