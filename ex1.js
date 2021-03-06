// EXERCICI 1

//Fase 1: setView([LATITUD, LONGITUD], ZOOM) 
let mymap = L.map('mapid').setView([41.3868794, 2.17006783], 17);

//Fase 2: Tiles de openStreetMap pq és opensource 
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//Fase 3: Afegeix un marcador (Estil per defecte) a les coordenades indicades (C/Balmes n16) 
let marker = L.marker([41.386939819411694, 2.166012854408137]).addTo(mymap);

//Fase 4: Crea un popUp amb informació
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();