  const wrapper = document.querySelector('.sketchfab-circle-wrapper');
  let mouseX = 0;
  let mouseY = 0;
  let rotationX = 0;
  let rotationY = 0;

  document.addEventListener('mousemove', e => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    mouseX = (e.clientX - halfWidth) / halfWidth; // -1 a 1
    mouseY = (e.clientY - halfHeight) / halfHeight; // -1 a 1
  });

  function animate3D() {
    console.log (mouseX, mouseY);
    rotationX += (mouseY * 0.05 - rotationX) * 0.1; // suavizado
    rotationY += (mouseX * 0.05 - rotationY) * 0.1;
    wrapper.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    requestAnimationFrame(animate3D);
  }
  animate3D();