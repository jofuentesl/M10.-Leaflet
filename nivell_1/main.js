//codi pel primer mapa nivell 1
var map = L.map('map').setView([41.387010, 2.170052], 25);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
                                                                    

//Codi pel segon mapa nivell 1
var map2 = L.map('map2').setView([41.386929, 2.165960], 25);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',*/
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map2);

L.marker([41.386929, 2.165960]).addTo(map2)
.openPopup();

//codi pel 3 mapa nivell 1
var map3 = L.map('map3').setView([41.386929, 2.165960], 25);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map3);
L.marker([41.386929, 2.165960]).bindPopup("<b>Restaurant Centfocs</b></br>Restaurante mediterraneo</br>Carrer Balmes, 16, 08007 Barcelona").addTo(map3).openPopup();

