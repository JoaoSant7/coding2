//No JavaScript, o switch é uma estrutura de controle que permite executar diferentes partes de código com base no valor de uma expressão. O default é uma cláusula opcional que pode ser usada para lidar com casos que não correspondem a nenhum dos case especificados.

//Aqui está um exemplo básico:

let fruit = 'banana';

switch (fruit) {
    case 'apple':
        console.log('Apple selected');
        break;
    case 'orange':
        console.log('Orange selected');
        break;
    default: //Default serve para casos onde não há correspondente
    
        console.log('No fruit selected');
        break;
}

//Nesse exemplo, como fruit é 'banana', a saída será "No fruit selected", pois não há um case correspondente. O default atua como uma opção de "fallback" quando nenhuma das outras condições é atendida.
