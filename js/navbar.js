document.addEventListener("DOMContentLoaded", () => {
  fetch("html/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
