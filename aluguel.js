const carros = ["Palio", "Jetta", "Marea", "Onix"];

carros.push("Uno");
//ADICIONA CARRO NOVO À LISTA

console.log(carros); // MOSTRA LISTA DE CARROS APÓS A ADIÇÃO

carros.splice(carros.indexOf("Onix"), 1);
//REMOVE O CARRO DE ACORDO COM O INDEX (POSIÇÃO)

console.log(carros);
//MOSTRA À LISTA DE CARROS APÓS A REMOÇÃO

console.log(carros.length);
//MOSTRA O NÚMERO TOTAL DE CARROS DA LISTA

let nome = prompt("Olá, bem vindo à Alu Veículos! Qual o seu nome?");
let pesquisa = prompt(`Fico feliz em poder ajuda-lo, ${nome}! Qual o carro que você deseja alugar? Temos as seguintes opções: ${carros.join(", ")}`);
//JOIN TRANSFORMA A ARRAY DE CARROS EM STRING
//LISTA DE OPÇÕES ATUALIZADA

switch (pesquisa) {
  case "Palio":
    console.log(`Caro ${nome}, o aluguel do Palio está por 75 reais por dia!`);
    break;
  case "Jetta":
    console.log(`Caro ${nome}, o aluguel do Jetta está por 100 reais a diária.`);
    break;
  case "Marea":
    console.log(`Caro ${nome}, o aluguel do Marea está por 40 reais por dia!`);
    break;
  case "Uno":
    console.log(`Caro ${nome}, o aluguel do Uno está por 80 reais a diária.`);
    break;
  default:
    console.log(`Caro ${nome}, não possuímos este modelo de veículo para aluguel.`);
}

