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

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son: " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick)
