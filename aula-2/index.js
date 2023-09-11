const listaLivros = require('./array');

function mergeSort (arr, nivelAninhamento = 0) {

  console.log(`Nivel de aninhamento: ${nivelAninhamento}`);
  console.log(arr);

  if(arr.length > 1) {
    const meio = Math.floor(arr.length / 2); //floor arredonda um número para baixo
    const parte1 = mergeSort(arr.slice(0, meio), nivelAninhamento++);
    const parte2 = mergeSort(arr.slice(meio, arr.length), nivelAninhamento++);
    //Chamando a funcao na "parte1" e "parte2", a funcao vai ficar se chamando ate o minimo possível
    arr = ordena(parte1, parte2);
  }

  return arr;
}

function ordena (parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = []; //Criacao do array que vai ter o resultado final

  while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1];
    let produtoAtualParte2 = parte2[posicaoAtualParte2];

    if(produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1); //O metodo push joga o elemento para o final da lista
      posicaoAtualParte1++; //Implementa
    }else{
      resultado.push(produtoAtualParte2);
      posicaoAtualParte2++;
    }
  }

  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1) //O "?" significa o "true"
    : parte2.slice(posicaoAtualParte2)); // O ":" significa se der "false"
}

console.log(mergeSort(listaLivros));