// Array para almacenar las rutas de las imágenes
const imagenes = [];

// Función para cargar las imágenes desde la carpeta
function cargarImagenes() {
  const galeria = document.getElementById('galeria');
  
  // Cambia 'carpeta_imagenes/' por la ruta de tu carpeta de imágenes
  fetch('./img/')
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, 'text/html');
      const links = Array.from(htmlDocument.links).map(link => link.href);
      
      links.forEach(link => {
        // Filtra solo los archivos de imagen (puedes agregar más extensiones si es necesario)
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(link)) {
          imagenes.push(link);
          const imgElement = document.createElement('img');
          imgElement.src = link;
          imgElement.alt = 'Imagen';
          imgElement.classList.add('h-48','rounded-md','w-full', 'shadow-md');
          galeria.appendChild(imgElement);
        }
      });
    })
    .catch(error => console.error('Error al cargar las imágenes:', error));
}

// Llama a la función para cargar las imágenes cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarImagenes);
