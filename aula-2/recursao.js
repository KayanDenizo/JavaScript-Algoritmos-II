function dorme(milisegundos) {
  return new Promise(resolve => setTimeout(resolve, milisegundos));
}

async function incrementaNumero(numero) {
  console.log(numero)
  await dorme(2000)

  if(numero === 10) {
    return 'Finalizou'
  }
  return incrementaNumero(numero + 1)
}

incrementaNumero(1);

