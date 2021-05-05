//Creem el marcador personalitzat
const fontAwesomeIcon = L.divIcon({
  html: '<i class="fa fa-map-marker fa-4x"></i>',
  iconSize: [10, 10],
  className: 'myDivIcon'
});


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

let marker = L.marker();
let popup = L.popup();
function onMapClick(e) {
  //declarem les variables per la ubicació
    let lat  = e.latlng.lat;
    let lng  = e.latlng.lng;
    //comprovem si existeix una marca
    if(marker) {
      map.removeLayer(marker);
    }
    //col·loquem la nova marca personalitzada
    marker = new L.marker([lat, lng],{ icon:  fontAwesomeIcon}, 19).addTo(map).bindPopup('Nuevo marcador<br>Latitud: ' + lat +'<br>Longitud: '+ lng).openPopup();
    //actualitzem la ubicació
    map.flyTo([lat, lng],19)
}

map.on('click', onMapClick);
