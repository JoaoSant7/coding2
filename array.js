//ARRAY

const livros = ["Catecismo da Igreja Católica", "História de uma Alma", "Castelo Interior"];
console.log(livros[1] [0]); //Este código encontra o livro (elemento) a partir do index (posição)

//Segundo colchete pesquisa pela letra do elemento selecionado, considerando o index (posição) da letra

let consulta = livros.indexOf("Castelo Interior")
console.log(consulta) //Este código encontra o index (posição) a partir do livro (elemento)

console.log(livros[1][1]); //Outra forma de pesquisar pela letra do elemento a partir do index

console.log(livros.pop()); //remove o último elemento e mostra o elemento removido

console.log(livros.push("Confissões")); //adiciona elementos no final da array e mosta a quantidade do array

console.log(livros); //mostra todos os elementos do const, neste caso, os livros

//Elementos: valores que ficam agrupados dentro do array
//Cada elemento da array está em uma posição; esta posição é o INDEX -> 0, 1, 2, 3 ...
