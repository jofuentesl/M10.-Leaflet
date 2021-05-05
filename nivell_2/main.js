//codi pel primer mapa nivell 1
var map = L.map('map').setView([41.387010, 2.170052], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

let popup = L.popup();
let marker = L.marker();
function onMapClick(e) {
  //Declarem les variables per la ubicació
  let lat  = e.latlng.lat;
  let lng  = e.latlng.lng;
  //Activem el popup amb la nova ubicació

  popup
    .setLatLng(e.latlng)
    .setContent("Has pulsado en el mapa en las coordenadas</br> Latitud: " 
    + lat.toString() + "</br>Longitud: " + lng.toString())
    .openOn(map);
    map.setView([lat, lng], 19);
    marker.setLatLng([lat, lng]).addTo(map);
}

map.on('click', onMapClick);
