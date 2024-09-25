/*rotulo = "atividade"
const nome = "John"
let idade = "21"
console.log ('Me chamo John. Tenho 21 anos');/*/

/*const nome = "Casa Amarela"
const cidade = "Recife"
console.log ('Casa Amarela se localiza em Recife');/*/

/*const numero1 = 40;
const numero2 = 2;
let soma = 40 + 2;
let subtração = 40 - 2;
let multiplicação = 70 * 33;
let divisão = 70 / 33;/*/

/*function areaRetangulo(base, altura) {
    return base * altura;
}

const base = 12;
const altura = 40;
console.log("Área do retângulo:", areaRetangulo(base, altura));/*/

/*function calcularMedia(num1, num2, num3) {
    const soma = num1 + num2 + num3;
    const media = soma / 3;
    return media;
}
const numero1 = 10;
const numero2 = 7;
const numero3 = 5;

const media = calcularMedia (numero1, numero2, numero3);
console.log("Média igual a", media);/*/

/*var valor = (200);
var percentualdesconto = (50);
var valorfinal = valorfinal = valor - ( valor * (percentualdesconto / 100));
console.log (`"O valor final do desconto é" ${valorfinal}$`);/*/

function calcularImpostoDeRenda(rendaAnual) {
    let imposto = 0;

    if (rendaAnual <= 22847.76) {
        imposto = 0; // Isento
    } else if (rendaAnual <= 33919.80) {
        imposto = (rendaAnual * 0.075) - 1713.58;
    } else if (rendaAnual <= 45012.60) {
        imposto = (rendaAnual * 0.15) - 4257.57;
    } else if (rendaAnual <= 55976.16) {
        imposto = (rendaAnual * 0.225) - 7633.51;
    } else {
        imposto = (rendaAnual * 0.275) - 10432.32;
    }

    return imposto > 0 ? imposto : 0;
}

const renda = 100000;
const impostoDevido = calcularImpostoDeRenda(renda);
console.log(`Imposto de Renda a pagar: R$ ${impostoDevido.toFixed(2)}`);

