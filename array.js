const livros = ["Catecismo da Igreja Católica", "História de uma Alma", "Castelo Interior", "A Oração", "Sobre a Mentira", "Ofício de Nossa Senhora"];
console.log(livros[1] [0]); //Este código encontra o livro (elemento) a partir do index (posição)

//Segundo colchete pesquisa pela letra do elemento selecionado, considerando o index (posição) da letra

let consulta = livros.indexOf("Castelo Interior")
console.log(consulta) //Este código encontra o index (posição) a partir do livro (elemento)

console.log(livros[1][1]); //Outra forma de pesquisar pela letra do elemento a partir do index

//console.log(livros.pop());
//remove o último elemento e mostra o elemento removido

//console.log(livros.push(""));
//adiciona elementos no final da array e mosta a quantidade do array

console.log(livros);

console.log(livros.sort()); //coloca em ordem alfabética

console.log(livros.length); //conta os elementos

const atualizandoLivro = livros.splice(1, 1, "Romance genérico")
console.log(atualizandoLivro)
console.log(livros)
//O primeiro zero é o index (posição) e o segundo zero é a quantidade. Atualiza o livro e a linha de cima retorna o elemento que saiu

//console.log(livros.shift());
//remove o primeiro elemento e retorna o elemento

//console.log(livros.unshift("vue.js"));
//adiciona um ou mais elementos no início de um array e retorna esses elementos



//Elementos: valores que ficam agrupados dentro do array
//Cada elemento da array está em uma posição; esta posição é o INDEX -> 0, 1, 2, 3 ...

