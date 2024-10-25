CREATE DATABASE T32;
USE T32;

CREATE TABLE empregados (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	setor VARCHAR(100) NOT NULL,
	salario DECIMAL(10,2)
);

INSERT INTO empregados (nome, setor, salario) VALUES
	('André Santos', 'Segurança', 2000),
    ('Larissa Silva', 'Limpeza', 1200),
    ('Marlio Ramos', 'Administração', 3000);
    
CREATE TABLE pessoas (
		id INT AUTO_INCREMENT PRIMARY KEY,
		nome VARCHAR(100) NOT NULL,
		data_nascimento DATE,
		cidade VARCHAR(100),
		uf CHAR(2)
);

INSERT INTO pessoas (nome, data_nascimento, cidade, uf) VALUES
	('Reideclildon Paulo', '2002-07-31', 'Recife', 'PE'),
    ('Ronierison Maciel', '1999-03-21', 'Recife', 'PE'),
    ('Pedro Lima', '2004-05-06', 'São Paulo', 'SP');

    
SELECT * FROM empregados;

UPDATE empregados
SET nome = 'Larissa Constant'
WHERE id = 2;

SELECT nome FROM empregados;

SELECT AVG(salario) FROM empregados;
SELECT MAX(salario) FROM empregados;
SELECT MIN(salario) FROM empregados;

SELECT COUNT(nome) FROM empregados;
SELECT setor, COUNT(*) FROM empregados GROUP BY setor;
