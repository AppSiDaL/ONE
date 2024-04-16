const encriptButton = document.getElementById("encript-button");
const desencriptButton = document.getElementById("desencript-button");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const existResults = document.getElementById("exist-results");
const noResults = document.getElementById("no-results");
const encriptacion = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
encriptButton.addEventListener("click", () => {
  const texto = input.value.toLowerCase();

  function encriptar(nuevoTexto) {
    // Se usa un For loop en la matriz
    for (let i = 0; i < encriptacion.length; i++) {
      if (nuevoTexto.includes(encriptacion[i][0])) {
        nuevoTexto = nuevoTexto.replaceAll(
          encriptacion[i][0],
          encriptacion[i][1]
        );
      }
    }
    return nuevoTexto;
  }

  const textoEncriptado = encriptar(texto);

  output.innerHTML = textoEncriptado;
  output.classList.add("textoEncriptadoStyle");
  output.style.wordBreak = "break-word";
  noResults.style.display = "none";
  existResults.style.display = "block";

  copyButton.style.display = "block";
});

desencriptButton.addEventListener("click", () => {
  const texto = input.value.toLowerCase();

  function desencriptar(mensajeEncriptado) {
    for (let i = 0; i < encriptacion.length; i++) {
      if (mensajeEncriptado.includes(encriptacion[i][1])) {
        mensajeEncriptado = mensajeEncriptado.replaceAll(
          encriptacion[i][1],
          encriptacion[i][0]
        );
      }
    }
    return mensajeEncriptado;
  }

  const textoDesencriptado = desencriptar(texto);

  output.innerHTML = textoDesencriptado;
  output.classList.add("textoEncriptadoStyle");
  output.classList.add("textoEncriptadoStyle");
  output.style.wordBreak = "break-word";
  noResults.style.display = "none";
  existResults.style.display = "block";
  copyButton.style.display = "block";
});

copyButton.addEventListener("click", () => {
  const text = output.innerHTML;
  console.log(text);
  window.navigator.clipboard.writeText(text);
});
