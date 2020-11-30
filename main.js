//setView([LATITUD, LONGITUD], ZOOM)
let mymap = L.map('mapid').setView([41.3868794, 2.17006783], 17);

// Tiles de openStreetMap pq és opensource
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);