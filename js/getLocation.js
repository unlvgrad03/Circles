var x = document.getElementById("map");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("Getting Coords")
    } else {
        console.log( "Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    var cords = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;
    console.log(cords)
    document.getElementById("homeLat").value = position.coords.latitude
    document.getElementById("homeLng").value = position.coords.longitude

}
