document.addEventListener("DOMContentLoaded", () => {
  fetch("/html/navbar.html")
    .then(res => res.text())
    .then(data => {

      document.getElementById("navbar-container").innerHTML = data;
      
      const navbar = document.querySelector('.navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          navbar.classList.add('solid');
        } else {
          navbar.classList.remove('solid');
        }
      });

      const navlist = document.querySelector('#nav-list');
      const navbarButton = document.getElementById("navbarbutton");
      if (navbarButton && navlist) {
        navbarButton.addEventListener("click", () => {
          navlist.classList.toggle("open");
        });
      }

      const servicioslist = document.querySelector('.submenu')
      const serviciosbtn = document.getElementById('serviciosbtn');
      if (serviciosbtn && servicioslist) {
        navbarButton.addEventListener("click", () => {
          servicioslist.classList.toggle("open1");
        });
      }
    });
});