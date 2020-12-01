// EXERCICI 2

//Fase 1: Mostrar latitud i longitud a cada click.
let mymap = L.map('mapid2').setView([41.3868794, 2.17006783], 18);

const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//Fase 2: a cada click posa un marcador amb les coordenades
let marker = null;
// primer comproba si hi ha algun marcador. Si hi és, l'esborra.
function onMapClick(e) {
    if (marker !== null) {
        mymap.removeLayer(marker);
    }
    marker = new L.marker([e.latlng.lat, e.latlng.lng]);
    mymap.addLayer(marker);
    marker.bindPopup(`Mis coordenadas son:<br><b>Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}</b>`).openPopup();
};

mymap.on('click', onMapClick);