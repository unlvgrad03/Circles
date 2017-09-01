//This example creates circles on the map, representing populations in North America. 
// First, create an object containing LatLng and population for each city.
function initMap(event) {
    event.preventDefault();
    var homeMiles = Number(document.getElementById('homeMiles').value);
    var homeLat = Number(document.getElementById('homeLat').value);
    var homeLng = Number(document.getElementById('homeLng').value);
    var aMiles = Number(document.getElementById('aMiles').value);
    var aLat = Number(document.getElementById('aLat').value);
    var aLng = Number(document.getElementById('aLng').value);
    var bMiles = Number(document.getElementById('bMiles').value);
    var bLat = Number(document.getElementById('bLat').value);
    var bLng = Number(document.getElementById('bLng').value);
    var citymap = {};
    citymap['home'] = {
        color: "red",
        center: {
            lat: homeLat,
            lng: homeLng
        },
        miles: homeMiles
    };
    citymap['a'] = {
        color: "blue",

        center: {
            lat: aLat,
            lng: aLng
        },
        miles: aMiles
    };
    citymap['b'] = {
        color: "green",

        center: {
            lat: bLat,
            lng: bLng
        },
        miles: bMiles
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: homeLat,
            lng: homeLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    }); /* Construct the circle for each value in citymap. // Note: We scale the area of the circle based on the population.*/
    for (var city in citymap) { /*Add the circle for this city to the map.*/
        var cityCircle = new google.maps.Circle({
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.0,
            map: map,
            strokeColor: citymap[city].color,
            center: citymap[city].center,
            radius: (citymap[city].miles) * 1609
        });
    };
};


$(document).ready(function() {
    $(".locationButton").click(function() {
        $(".locationInputs").toggle();
    });
});