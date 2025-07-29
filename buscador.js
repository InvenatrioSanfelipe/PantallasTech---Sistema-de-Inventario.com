function mostrarSeccion(id) {
  // Oculta todas las secciones principales
  document.querySelectorAll('.marca, .brand-section').forEach(function(sec) {
    sec.style.display = 'none';
  });
  // Muestra la sección seleccionada
  var s = document.getElementById(id);
  if (s) s.style.display = '';
}

document.getElementById('buscador').addEventListener('input', function() {
  const filtro = this.value.toLowerCase();
  // Incluye todas las secciones principales y de pantallas
  document.querySelectorAll('.marca, .brand-section').forEach(function(seccion) {
    let seccionVisible = false;
    // Busca en productos y tarjetas
    seccion.querySelectorAll('.producto, .product-card').forEach(function(prod) {
      const texto = prod.textContent.toLowerCase();
      if (texto.includes(filtro)) {
        prod.style.display = '';
        seccionVisible = true;
      } else {
        prod.style.display = 'none';
      }
    });
    seccion.style.display = seccionVisible || filtro === '' ? '' : 'none';
  });
});
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
  if(e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C' || e.key === 'Shift')) {
    return false; // bloquea Ctrl+U, Ctrl+S, Ctrl+C y Shift
  }
}
