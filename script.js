// Simulación de carga de un archivo JSON
fetch("assets/data/ejemplo.json")
  .then((res) => res.json())
  .then((data) => console.log("Datos JSON cargados:", data))
  .catch((err) => console.error("Error al cargar JSON", err));
