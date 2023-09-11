function ola() {
  function mundo () {
    console.trace('Ola Mundo');
  }
  mundo();
}

ola();

//O "trace" é bom de utilizar pois mostra todo o restreamento do código e das funções
//É bom para encontrarmos bugs e atua de mãos dadas com o interpretador
// A pilha de chamadas trabalha com a estrutura de dados conhecida como pilha, que tem como regra que "o último a entrar é o primeiro a sair" - uma sigla conhecida na programação como LIFO, last-in-first-out.
