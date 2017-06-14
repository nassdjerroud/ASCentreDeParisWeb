// Initialisation de la carte
function myMap() {
	 // Coordonnées du local
	 var myLatlng = new google.maps.LatLng(48.8695866, 2.34850449999999);
	// Options
	var mapProp= {
    center:myLatlng,
    zoom:16,
	};
	// Création de la map
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	// Création du marker sur le local
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title:"Local du club!"
	});

  marker.setMap(map);
}