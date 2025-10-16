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

// Validación visual del formulario
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  let valido = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valido = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "1px solid #cbd5e1";
    }
  });

  if (!valido) {
    e.preventDefault(); // Evita que se envíe el formulario
    alert("Por favor completa todos los campos antes de enviar.");
  }
});
