const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(arr, esquerda, direita) {

  if (arr.length > 1) {
    let indiceAtual = particiona(arr, esquerda, direita);
    if(esquerda < indiceAtual - 1){
      quickSort(arr, esquerda, indiceAtual - 1);
    }
    if(indiceAtual < direita) {
      quickSort(arr, indiceAtual, direita);
    }
  }
  return arr;
}

function particiona(arr, esquerda, direita) {
  console.log('array', arr)
  console.log('esquerda, direita', esquerda, direita)
  let pivo = arr[Math.floor((esquerda + direita) / 2)];
  //esquerda = 0 || direita = 10 || 0 + 10 / 2 = 5 que arredondando vira "6"
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) {
    while (arr[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }
    while (arr[atualDireita].preco > pivo.preco) {
      atualDireita--;
    }

    if (atualEsquerda <= atualDireita) {
      trocaLugar(arr, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));