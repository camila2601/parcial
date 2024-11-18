function mostrarFormulario() {
    const formulario = document.getElementById("formRegistro");
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}