const carros = ["Palio", "Jetta", "Marea", "Onix"];

console.log(carros.push("Uno")); //ADICIONA CARRO NOVO À LISTA

let array = ["Palio", "Jetta", "Marea", "Onix", "Uno"];
carros.splice(3, 1); //Escolhe qual elemento remover da Array

console.log(carros);//MOSTRA A LISTA DE CARROS

console.log(carros.length);//MOSTRA O NÚMERO TOTAL DE CARROS NA LISTA

let nome = prompt ("Bom dia! Qual o seu nome?")
let pesquisa = prompt (`Qual o carro que você deseja alugar? Temos as seguintes opções: Palio, Jetta, Marea ou Uno`)//ATENDIMENTO AO CLIENTE

switch (pesquisa) {
  case "Palio":
    console.log(`Caro ${nome}, o Palio está por 75 reais por dia!`)
    break;
    case "Jetta":
    console.log(`Caro ${nome}, o Jetta está por 100 reais a diária.`)
    break;
  case "Marea":
    console.log(`Caro ${nome}, o Marea está por 40 reais por dia!`)
    break;
  case "Uno":
    console.log(`Caro ${nome}, o Uno está por 80 reais a diária.`)
    break;
  default:
    console.log(`Caro ${nome}, não possuímos este modelo de veículo para aluguel.`)
    break;
}
//OPÇÕES DE CARROS
