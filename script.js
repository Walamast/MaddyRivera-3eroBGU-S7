// 1. Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // 2. Seleccionar el elemento
  const envelope = document.getElementById('envelope');

  // 3. Agregar escucha de clic
  envelope.addEventListener('click', () => { 
    // Después de 800ms (duración de la animación), abrimos la página
    setTimeout(() => {
      window.open('investigacion.html', '_blank');
    }, 800);
  });
});

function comprimir(id) {
  const sec = document.getElementById(id);
  if (sec.style.display === 'block') {
    sec.style.display = 'none';
  } else {
    sec.style.display = 'block';
  }
}

window.onscroll = function() {
    const btnArriba = document.getElementById('btnInicio');
  if (document.documentElement.scrollTop > 200) {
    btnArriba.style.display = 'block';
  } else {
    btnArriba.style.display = 'none';
  }
};

function IrArriba() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}