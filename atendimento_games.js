let nome = prompt ("Qual o seu nome?")
let pesquisa = prompt (`Olá, ${nome}! Qual o jogo que você deseja saber o preço?`);

switch (pesquisa) {
  case "Stardew Valley":
    console.log(`Olá, ${nome}! Stardew Valley custa R$12,00`)
    break;
  case "Ghost of Tsushima: Edição do Diretor":
    console.log(`Olá, ${nome}! Ghost of Tsushima: Edição do Diretor custa R$250,00`)
    break;
  case "Red Dead Redemption 2":
    console.log(`Olá, ${nome}! Red Dead Redepmtion 2 custa R$200,00`)
}
