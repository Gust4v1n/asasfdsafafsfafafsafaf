
function validarNumero(entrada) {
  if (typeof entrada !== 'number') {
    console.log(`Erro: esperado número, recebido ${typeof entrada}`);
    return null;
  }
  console.log(`Número válido: ${entrada}`);
  return entrada;
}

validarNumero(42);
validarNumero("abc");
