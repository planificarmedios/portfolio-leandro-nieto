// Aplicar fondo dinámico a las cards
document.querySelectorAll('.portfolio-wrap').forEach(wrap => {
  const bg = wrap.getAttribute('data-background');
  if (bg) wrap.style.backgroundImage = bg;
});

// Modal dinámico
const modelViewerModal = document.getElementById('modelViewerModal');

modelViewerModal.addEventListener('show.bs.modal', function(event) {
  const button = event.relatedTarget; // El <a> que abrió el modal
  const modelPath = button.getAttribute('data-model');
  const bg = button.getAttribute('data-background');

  const viewer = document.getElementById('modalModelViewer');
  const modalBg = document.getElementById('modal-background');
  console.log('Model Path:', modelPath);
  console.log('Background Image:', bg);

  viewer.setAttribute('src', modelPath);
  if (bg) modalBg.style.backgroundImage = bg;
});

const butterflyModel = document.getElementById('butterflyModel'); // O ID específico

butterflyModel.addEventListener('load', () => {
  const model = butterflyModel.model; // esto devuelve ModelViewerGLTFInstance
  if (!model) return console.warn('Modelo no disponible');

  console.log('Modelo completo:', model);

  // Recorremos los nodos de la escena
  model.sceneGraph.traverse((node) => {
    if (node.position) {
      console.log(node.name, node.position.x, node.position.y, node.position.z);
    }
  });

  // Cambiar posición del modelo completo
  if (model.scene.position) {
    model.scene.position.set(0, 1, 0); 
  }
});