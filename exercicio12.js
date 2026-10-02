function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

externo(4);

/*
Step Over: Executa a próxima linha inteira sem entrar em funções.
Ao usar Step Over na linha "return interno(n) + 1", a função interno(n) 
é executada completamente e você pula diretamente para o resultado, sem ver
os detalhes internos de como m * 3 foi calculado.

Step Into: Entra dentro da função que está sendo chamada.
Ao usar Step Into na linha "return interno(n) + 1", você entra dentro da 
função interno(), permitindo ver cada linha executada dentro dela.

Step Out: Sai da função atual e retorna ao chamador.
Ao usar Step Out dentro de interno(), você sai da função e retorna para
externo(), pulando as linhas restantes de interno().

No cenário com externo() e interno(): se usar Step Into em "interno(n)",
verá cada linha de interno(). Com Step Out de dentro de interno(), 
retorna para externo() para completar a soma com +1.
*/
