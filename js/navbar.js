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
    });
});
