const temaBtn = document.getElementById("temaBtn");
const body = document.body;

temaBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Cambia el texto del botón
  if (body.classList.contains("dark-mode")) {
    temaBtn.textContent = "Modo Claro";
  } else {
    temaBtn.textContent = "Cambiar Tema";
  }
});
