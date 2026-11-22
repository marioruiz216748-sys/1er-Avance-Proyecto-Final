// Mensaje de demostración para el formulario de Login.
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("message").textContent =
            "Formulario enviado. La autenticación real requiere un servidor.";
    });
}

// Mensaje de demostración para el formulario de Registro.
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("message").textContent =
            "Registro de demostración. Para guardar usuarios se necesita un servidor.";
    });
}
