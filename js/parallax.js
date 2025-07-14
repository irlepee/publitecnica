window.addEventListener('scroll', function() {
    // Desactiva parallax en móviles
    if (window.innerWidth < 700) return;

    const parallax = document.querySelector('.parallax');
    if (parallax) {
        let offset = window.scrollY * .5;
        parallax.style.backgroundPosition = `center ${offset}px`;
    }

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