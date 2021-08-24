/*
Exercicio 1 - 

O SQL é um banco relacional e permite realizar queires complexas mais rapidamente do que bancos não relacionais. Uma das coisas que permite isso é o fato das tabelas serem muito bem definidas e com regras bem rigidas. Só que, às vezes, a gente pode errar ao começar modelando uma tabela: confundir o tipo de alguma coluna; esquecer de representar alguma informação e outras coisas. É por isso que é possível alterar as regras definidas por uma tabela. 
O comando que faz isso é o ALTER. O comando abaixo adiciona uma coluna na tabela de Actor para representar o sabor de sorvete favorito da celebridade

*/

```ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";```

/*
Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder
*/