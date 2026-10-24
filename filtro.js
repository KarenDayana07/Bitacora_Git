const entrada = document.getElementById('filtro');
const filas = document.querySelectorAll('#tabla-traza tbody tr');
const estado = document.getElementById('estado-filtro');

entrada.addEventListener('input', () => {
  const texto = entrada.value.trim().toLowerCase();
  let visibles = 0;
  filas.forEach((fila) => {
    const coincide = fila.textContent.toLowerCase().includes(texto);
    fila.hidden = !coincide;
    if (coincide) visibles++;
  });
  estado.textContent = texto
    ? `Se muestran ${visibles} de ${filas.length} actividades.`
    : '';
});
