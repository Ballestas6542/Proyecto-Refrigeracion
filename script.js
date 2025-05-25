document.getElementById('contact-form').addEventListener('submit', function(event) {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;

    if (!nombre || !apellido || !correo) {
        alert('Por favor, completa todos los campos obligatorios.');
        event.preventDefault();
    }

    });