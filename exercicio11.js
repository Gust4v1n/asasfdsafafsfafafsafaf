function testeDebug(x) {
  const y = x * 2;
  debugger;
  return y;
}

testeDebug(5);

/*
Ao executar este código no navegador com as ferramentas de desenvolvedor abertas,
a execução pausa automaticamente na linha com 'debugger'.
Você pode visualizar o valor de x (5) e y (10) nos painéis de variáveis,
permitindo inspecionar o estado do programa naquele ponto específico.
*/
