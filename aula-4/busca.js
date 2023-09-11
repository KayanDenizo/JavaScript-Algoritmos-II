//Busca binária
// Ela vai dividir em dois e buscar em uma das duas
const listaLivros = require('./arrayOrdenado');

function busca(arr, de, ate, valorBuscado) {
  const meio = Math.floor((de + ate) / 2);
  const atual = arr[meio];

  if(de > ate) {
    return -1;
    //Se o JS n encontrar nada ele diminui um indice
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return busca(arr, de, meio - 1, valorBuscado)
  }

  if (valorBuscado > atual.preco) {
    return busca(arr, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));