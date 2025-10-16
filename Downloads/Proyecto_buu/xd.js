const temaBtn = document.getElementById("temaBtn");
const body = document.body;

// Cambiar tema (oscuro / claro)
temaBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Cambiar texto del botón
  if (body.classList.contains("dark-mode")) {
    temaBtn.textContent = "Modo Claro";
  } else {
    temaBtn.textContent = "Cambiar Tema";
  }
});
