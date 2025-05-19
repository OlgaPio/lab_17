// Mostrar mensaje de bienvenida al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    button.textContent = "Haz clic aquí";
    button.style.display = "block";
    button.style.margin = "20px auto";
    document.body.appendChild(button);
    
    button.addEventListener("click", function() {
        alert("¡Bienvenido a mi página!");
    });
});

// Validación de formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
