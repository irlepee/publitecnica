window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let offset = window.scrollY * .5; // Ajusta el factor para más o menos movimiento
    parallax.style.backgroundPosition = `center ${offset}px`;

    const parallax2 = document.querySelector('.parallax2');
    if (parallax2) {
        const sectionTop = parallax2.offsetTop;
        let relativeScroll = window.scrollY - sectionTop;
        if (relativeScroll > 0) {
            parallax2.style.backgroundPosition = `center ${relativeScroll * 0.5}px`;
        } else {
            parallax2.style.backgroundPosition = 'center 0px';
        }
    }

    const parallax3 = document.querySelector('.parallax3');
    if (parallax3) {
        const sectionTop = parallax3.offsetTop;
        let relativeScroll = window.scrollY - sectionTop;
        if (relativeScroll > 0) {
            parallax3.style.backgroundPosition = `center ${relativeScroll * 0.5}px`;
        } else {
            parallax3.style.backgroundPosition = 'center 0px';
        }
    }
});