//This example creates circles on the map, representing populations in North America. 
// First, create an object containing LatLng and population for each city.
function initMap(event) {
    event.preventDefault();
    var home = document.getElementById('home').value;
    var farm_durango = document.getElementById('farm_durango').value;
    var grandteton_durango = document.getElementById('grandteton_durango').value;
    var elkhorn_durango = document.getElementById('elkhorn_durango').value;
    var LAS = document.getElementById('LAS').value;
    var citymap = {};

    console.log(home);
    citymap['home'] = {
        center: {
            lat: 36.307272,
            lng: -115.282843
        },
        miles: home
    };
    citymap['farm_durango'] = {
        center: {
            lat: 36.3013,
            lng: -115.2827
        },
        miles: farm_durango
    };
    citymap['grandteton_durango'] = {
        center: {
            lat: 36.3065,
            lng: -115.2787
        },
        miles: grandteton_durango
    };
    citymap['elkhorn_durango'] = {
        center: {
            lat: 36.2916,
            lng: -115.2878
        },
        miles: elkhorn_durango
    };
    citymap['LAS'] = {
        center: {
            lat: 36.084282,
            lng: -115.153739
        },
        miles: LAS
    };
    citymap['Work'] = {
        center: {
            lat: 36.066282,
            lng: -115.212689
        },
        miles: 3.5
    };

    console.log('Hello World!!');
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 36.307272,
            lng: -115.282843,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    }); /* Construct the circle for each value in citymap. // Note: We scale the area of the circle based on the population.*/
    for (var city in citymap) { /*Add the circle for this city to the map.*/
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.0,
            map: map,
            center: citymap[city].center,
            radius: (citymap[city].miles) * 1609
        });
    };
};


$(document).ready(function(){
$(".locationButton").click(function(){
    $(".locationInputs").toggle();
});
});