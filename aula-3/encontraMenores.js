const listaLivros = require('./array');

function encontraMenores(pivo, arr) {
  let menores = 0;

  for (let atual = 0; atual < arr.length; atual++) {
    let produtoAtual = arr[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }

  trocaLugar(arr, arr.indexOf(pivo), menores);
  return arr;
}

function trocaLugar(arr, de, para) {
  const elem1 = arr[de];
  const elem2 = arr[para];

  arr[para] = elem1;
  arr[de] = elem2;
}

function divideNoPivo(arr) {
  let pivo = arr[Math.floor(arr.length / 2)];
  encontraMenores(pivo, arr);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < arr.length; analisando++) {
    let atual = arr[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(arr, analisando, valoresMenores)
      valoresMenores++;
    }
  }

  return arr;
}

console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;