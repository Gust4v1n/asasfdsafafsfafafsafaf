function safeParse(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } catch (erro) {
    return null;
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));     // null
