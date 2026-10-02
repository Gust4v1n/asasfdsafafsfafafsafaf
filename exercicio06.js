function safeParse(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    } else {
      throw erro;
    }
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));     // null
