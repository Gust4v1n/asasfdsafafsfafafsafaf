function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

externo(4);

/*

▶ (global)
  ▶ externo
    ▶ interno

Explicação:
- (global): contexto global do programa
- externo: função que foi chamada primeira
- interno: função chamada por externo (no topo da pilha)

Quando interno() terminar, ela é removida da pilha e retorna para externo().
Quando externo() terminar, ela é removida e retorna para (global).
*/
