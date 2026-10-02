// ReferenceError
try {
  console.log(varivelQueNaoExiste);
} catch (e) {
  console.log("ReferenceError:", e.message);
}

// TypeError
try {
  const numero = 42;
  numero.toUpperCase();
} catch (e) {
  console.log("TypeError:", e.message);
}

// SyntaxError
try {
  JSON.parse("{nome: sem aspas}");
} catch (e) {
  console.log("SyntaxError:", e.message);
}
