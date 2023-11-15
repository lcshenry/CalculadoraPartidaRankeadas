// Calculadora de Partidas Rankeadas

// Crie uma função que recebe como parâmetro a quantidade de vitorias e derrotas de um jogador, depois disso retorne o resultado para uma variavel, o saldo de rankeadas deve ser feito através do calculo (vitorias - derrotas).

let saldoVitorias = 0;
let nivel = "";
let saldo;


main(10,5);
function main(a, b){ 
  calcularRanking(a, b) 
}

function calcularRanking(vitorias, derrotas){
  let a = vitorias;
  let b = derrotas;
  let ranking = a - b;

  if (ranking <= 10){
    nivel = "Ferro";
    saldo = saldoVitorias + ranking;

  } else if(ranking >= 11 && ranking <= 20){
      nivel = "Bronze";
      saldo = saldoVitorias + ranking;

  } else if(ranking >= 21 && ranking <= 50){
      nivel = "Prata";
      saldo = saldoVitorias + ranking;

  } else if(ranking >= 51 && ranking <= 80){
      nivel = "Ouro";
      saldo = saldoVitorias + ranking;

  } else if(ranking >= 81 && ranking <= 90){
    nivel = "Diamante";
    saldo = saldoVitorias + ranking;

} else if(ranking >= 91 && ranking <= 100){
  nivel = "Lendario";
  saldo = saldoVitorias + ranking;

} else if(ranking > 101){
  nivel = "Imortal";
  saldo = saldoVitorias + ranking;

}
}

console.log(`O heroi tem de saldo de vitorias: ${saldo} e está no nivel ${nivel}`);



// Se vitorias for menor do que 10 = Ferro
// Se vitorias for entre 11 e 20 = Bronze
// Se vitorias for entre 21 e 50 = Prata
// Se vitorias for entre 51 e 80 = Ouro
// Se vitorias for entre 81 e 90 = Diamante
// Se vitorias for entre 91 e 100 = Lendario
// Se vitorias for maior ou igual 101 = Imortal

// Ao final deve se exibir uma mensagem: 
// "O heroi tem de saldo ${saldoVitorias} está no nivel  ${nivel}"

