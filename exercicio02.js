function dividir(a, b) {
  return a / b;
}

const resultado = dividir(10, 0);
console.log("Exemplo: 10 / 0 =", resultado);
console.log("Nenhuma exceção foi lançada. O resultado é Infinity (erro silencioso).");
