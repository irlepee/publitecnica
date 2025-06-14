window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let offset = window.scrollY * .5; // Ajusta el factor para más o menos movimiento
    parallax.style.backgroundPosition = `center ${offset}px`;
});