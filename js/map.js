var map = L.map('map').setView([25.7922, -108.9924], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([25.7922, -108.9924]).addTo(map)
    .bindPopup('PUBLI-TÉCNICA')
    .openPopup();