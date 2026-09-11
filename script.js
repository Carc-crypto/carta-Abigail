const btnSorpresa = document.getElementById('btn-sorpresa');
const cartaSecreta = document.getElementById('carta-secreta');

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-volador');
    corazon.innerText = '💖'; 
    corazon.style.left = Math.random() * 100 + 'vw';
    
    const tamano = Math.random() * 20 + 15;
    corazon.style.fontSize = `${tamano}px`;

    const duracion = Math.random() * 3 + 2;
    corazon.style.animationDuration = `${duracion}s`;

    corazon.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

btnSorpresa.addEventListener('click', () => {
    cartaSecreta.classList.remove('oculta');
    
    btnSorpresa.innerText = '¡Te amo muchísimo! 🌸';
    
    for (let i = 0; i < 30; i++) {
        setTimeout(crearCorazon, i * 50);
    }

    setInterval(crearCorazon, 300);
});
