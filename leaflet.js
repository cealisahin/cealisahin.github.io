/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).
 Just put the script tag below the map div.
 The source code below is the example from the leaflet start page.
 */

var map = L.map('map').setView([39.16, 35.66], 6);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var markers = L.markerClusterGroup();
		
for (var i = 0; i < addressPoints.length; i++) {
	var a = addressPoints[i];
	var title = a[2];
	var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
	marker.bindPopup(title);
	markers.addLayer(marker);
}

map.addLayer(markers);