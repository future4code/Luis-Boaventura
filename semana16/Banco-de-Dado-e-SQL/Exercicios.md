CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
 
-- AULA 45
/* Exercicio 1
a) Varchar ( 255) - atribui valor de string onde o 255 é a quantidade de caracteres permitidos
Primary key é uma chave unica
Date atribui o valor de data YYYYMMDD
Not null representa que ao atribuir o valor ele nao é null
b) O show database da a informaçao do banco de dados nome e information schemma
O show table mostra SHOW TABLE mostra as tabelas existentes no banco de dados.
c) O describe vai lhe fornecer todos os valores que precisam ser inseridos na tabela, se a informaçao 
é null se existe uma key, e qual é e quais sao os campos da tabela.*/

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);