let nome = prompt ("Qual o seu nome?")
const paciente = prompt (`Olá, ${nome}! Quais são os sintomas que você está apresentando?`)

if (paciente == "febre, dor de cabeça e espirro frequente") {
  console.log (`${nome}, de acordo com os seus sintomas, você está com virose`)
} 

else if (paciente == "manchas vermelhas ao redor do corpo, febre, dor atrás dos olhos") {
  console.log (`${nome}, de acordo com os seus sintomas, você está com dengue`)
}

else if (paciente == "tosse seca frequente por mais de 3 semanas, dores no peito, dificuldade para respirar, febre e emagrecimento") {
  console.log (`${nome}, de acordo com os seus sintomas, você está com tuberculose`)
}

 else{ 
  console.log (`Não há correspondente com os sintomas descritos. Prezado ${nome}, recomendamos que procure a unidade de saúde mais próxima de sua casa para um diagnóstico presencial!`)
}
