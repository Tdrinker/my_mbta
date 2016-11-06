// AIzaSyD7WllnZywOmp8cv3B9mSzDW7PCK5ZZBy0



var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
    zoom: 13,
    center: me,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var station_list = [
    {station_name: "South Station", lat:42.352271, lng: -71.05524200000001, location: new google.maps.LatLng(42.352271, -71.05524200000001), time_remain:0},
    {station_name: "Andrew", lat: 42.330154, lng: -71.057655, location: new google.maps.LatLng(42.330154, -71.057655), time_remain:0},
    {station_name: "Porter Square", lat: 42.3884, lng: -71.11914899999999, location: new google.maps.LatLng(42.3884, -71.11914899999999),time_remain:0},
    {station_name: "Harvard Square", lat: 42.373362, lng: -71.118956, location: new google.maps.LatLng(42.373362, -71.118956), time_remain:0},
    {station_name: "JFK/UMass", lat: 42.320685, lng: -71.052391, location: new google.maps.LatLng(42.320685, -71.052391), time_remain:0},
    {station_name: "Savin Hill", lat: 42.31129, lng: -71.053331, location: new google.maps.LatLng(42.31129, -71.053331), time_remain:0},
    {station_name: "Park Street", lat: 42.35639457, lng: -71.0624242, location: new google.maps.LatLng(42.35639457, -71.0624242), time_remain:0},
    {station_name: "Broadway", lat: 42.342622, lng: -71.056967, location: new google.maps.LatLng(42.342622, -71.056967), time_remain:0},
    {station_name: "North Quincy", lat: 42.275275, lng: -71.029583, location: new google.maps.LatLng(42.275275, -71.029583), time_remain:0},
    {station_name: "Shawmut", lat: 42.29312583, lng: -71.06573796000001, location: new google.maps.LatLng(42.29312583, -71.06573796000001), time_remain:0},
    {station_name: "Davis", lat: 42.39674, lng: -71.121815, location: new google.maps.LatLng(42.39674, -71.121815), time_remain:0},
    {station_name: "Alewife", lat: 42.395428, lng: -71.142483, location: new google.maps.LatLng(42.395428, -71.142483), time_remain:0},
    {station_name: "Kendall/MIT", lat: 42.36249079, lng: -71.08617653, location: new google.maps.LatLng(42.36249079, -71.08617653), time_remain:0},
    {station_name: "Charlies/MGH", lat: 42.361166, lng: -71.070628, location: new google.maps.LatLng(42.361166, -71.070628), time_remain:0},
    {station_name: "Downtown Crossing", lat: 42.355518, lng: -71.060225, location: new google.maps.LatLng(42.355518, -71.060225), time_remain:0},
    {station_name: "Quincy Center", lat: 42.251809, lng: -71.005409, location: new google.maps.LatLng(42.251809, -71.005409), time_remain:0},
    {station_name: "Quincy Adams", lat: 42.233391, lng: -71.007153, location: new google.maps.LatLng(42.233391, -71.007153), time_remain:0},
    {station_name: "Ashmont", lat: 42.284652, lng: -71.06448899999999, location: new google.maps.LatLng(42.284652, -71.06448899999999), time_remain:0},
    {station_name: "Wollaston", lat: 42.2665139, lng: -71.0203369, location: new google.maps.LatLng(42.2665139, -71.0203369), time_remain:0},
    {station_name: "Fields Corner", lat: 42.300093, lng: -71.061667, location: new google.maps.LatLng(42.300093, -71.061667), time_remain:0},
    {station_name: "Central Square", lat: 42.365486, lng: -71.103802, location: new google.maps.LatLng(42.365486, -71.103802), time_remain:0},
    {station_name: "Braintree", lat: 42.2078543, lng: -71.0011385, location: new google.maps.LatLng(42.2078543, -71.0011385), time_remain:0},
]


var trainPlanCoordinates = [
    {lat: 42.395428, lng: -71.142483}, // Alewife
    {lat: 42.39674, lng: -71.121815}, // Davis
    {lat: 42.3884, lng: -71.11914899999999}, // Porter Square
    {lat: 42.373362, lng: -71.118956}, // Harvard Square
    {lat: 42.365486, lng: -71.103802}, // Central Square
    {lat: 42.36249079, lng: -71.08617653}, // Kendall/MIT
    {lat: 42.361166, lng: -71.070628}, // Charlies/MGH
    {lat: 42.35639457, lng: -71.0624242}, // Park Street
    {lat: 42.355518, lng: -71.060225}, // Downtown Crossing
    {lat: 42.352271, lng: -71.05524200000001}, // south station
    {lat: 42.342622, lng: -71.056967}, // Broadway
    {lat: 42.330154, lng: -71.057655}, // Andrew
    {lat: 42.320685, lng: -71.052391}, // JFK
    {lat: 42.275275, lng: -71.029583}, // North Quincy
    {lat: 42.2665139, lng: -71.0203369}, // Wollaston
    {lat: 42.251809, lng: -71.005409}, // Quincy Center
    {lat: 42.233391, lng: -71.007153}, // Quincy Adams
    {lat: 42.2078543, lng: -71.0011385} // Braintree
]

var trainPlanCoordinates2 = [
    {lat: 42.320685, lng: -71.052391}, // JFK
    {lat: 42.31129, lng: -71.053331}, // Savin Hill
    {lat: 42.300093, lng: -71.061667}, // Fields Corner
    {lat: 42.29312583, lng: -71.06573796000001}, // Shawmut
    {lat: 42.284652, lng: -71.06448899999999}, // Ashmont
]

var map;
var mbta_icon = "MBTA_icon.png";
var me_photo = "me.png";
var marker_me;
var infowindow = new google.maps.InfoWindow();

function init() {
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    getMyLocation();
    loadTrain_info();
}


function getMyLocation() {
    if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
         navigator.geolocation.getCurrentPosition(function(position) {
            this.myLat = position.coords.latitude;
            this.myLng = position.coords.longitude;
            
            console.log(this.myLat);
            console.log(this.myLng);

            renderMap();
        });

    }
    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}

var nearest_index;
var nearest_distance;


function renderMap()
{
    me = new google.maps.LatLng(myLat, myLng);
                
    map.panTo(me);

    update_nearest_station();

    var contentString = '<p>closest station: '
    + station_list[nearest_index].station_name + '</p>'
    + '<p>which is </p>' + nearest_distance
    + '<p> miles from you</p>' ;

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker_me = new google.maps.Marker({
        position: me,
        title: "Here I Am!",
        map: map,
        icon: me_photo,
        animation: google.maps.Animation.BOUNCE
    });

    google.maps.event.addListener(marker_me, 'click', function() {
        show_nearest_station(); // nearest_index is now updated
        infowindow.open(map, marker_me);
    });

    marker_me.setMap(map);

    var infowindow_stations = {};
    for (let i = 0; i < 22; i++){
        var contentStrings = '<p>station name: </p>'
        + station_list[i].station_name
        + '<p>time remaining for the next train: </p>'
        + station_list[i].time_remain
        + '<p>seconds</p>';

        infowindow_stations[i] = new google.maps.InfoWindow({
            content: contentStrings
        });

        var Marker = new google.maps.Marker({
            position: station_list[i].location,
            title: station_list[i].station_name,
            time_remaining: station_list[i].time_remain,
            map: map,
            icon: mbta_icon,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(Marker, 'click', function() {
            infowindow_stations[i].open(map, this);
            for (j = 0; j < 22; j++){
                if (j!=i){
                    infowindow_stations[j].close(map, this);
                }
            }
        });
    }
    var trainPath = new google.maps.Polyline({
        path: trainPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    trainPath.setMap(map);

    var trainPath2 = new google.maps.Polyline({
        path: trainPlanCoordinates2,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    trainPath2.setMap(map);
}

function update_nearest_station(){
    var index_received = get_cloest_station(station_list);
    var lat_nearest = station_list[index_received].lat;
    var lng_nearest = station_list[index_received].lng;

    var Coordinates_me_to_closest_station = [
        {lat: lat_nearest, lng: lng_nearest},
        {lat: myLat, lng: myLng}
    ]

    nearest_index = index_received;
}

function show_nearest_station(){
    var index_received = get_cloest_station(station_list);
    var lat_nearest = station_list[index_received].lat;
    var lng_nearest = station_list[index_received].lng;

    var Coordinates_me_to_closest_station = [
        {lat: lat_nearest, lng: lng_nearest},
        {lat: myLat, lng: myLng}
    ]
    var lineSymbol = {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 4
    }
    var nearest_path = new google.maps.Polyline({
        path: Coordinates_me_to_closest_station,
        //geodesic: true,
        strokeColor: 'blue',
        strokeOpacity: 0,
        //strokeOpacity: 1.0,
        //strokeWeight: 2,
        icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '15px'
        }],
    })
    nearest_path.setMap(map);

    nearest_index = index_received;
}


function get_cloest_station(station_list){
    var index = 0;
    var lat_station = station_list[0].lat;
    var lng_station = station_list[0].lng;

    var smallest_distance = get_distance(lat_station, lng_station, myLat, myLng);

    for (i = 0; i < 22; i++){
        lat_station = station_list[i].lat;
        lng_station = station_list[i].lng;
        var potential_smallest_distance = get_distance(lat_station, lng_station, myLat, myLng);
        if (potential_smallest_distance < smallest_distance){
            smallest_distance = potential_smallest_distance;
            index = i;
        }
    }
    nearest_distance = smallest_distance;
    return index;
}

function get_distance(lat1, lon1, lat2, lon2){
    if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        }
    }
    var R = 6371;
    var φ1 = lat1.toRad();
    var φ2 = lat2.toRad();
    var Δφ = (lat2-lat1).toRad();
    var Δλ = (lon2-lon1).toRad();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

    return d;
}

function loadTrain_info(){
    request = new XMLHttpRequest();

    request.open("get", "https://dry-journey-83982.herokuapp.com/redline.json", true);

    request.onreadystatechange = funex;

    request.send();
}

function funex(){
    if (request.readyState == 4 && request.status == 200){

        theData = request.responseText;
                
        // Step 5B: parse the text into JSON
        train_info = JSON.parse(theData);
                

        // Step 5C: use the JavaScript object
        for (i = 0; i < train_info["TripList"]["Trips"].length; i++){
            for (j = 0; j < train_info["TripList"]["Trips"][i]["Predictions"].length; j++){
                for (k = 0; k < 22; k++){
                    if (train_info["TripList"]["Trips"][i]["Predictions"][j]["Stop"] == station_list[k].station_name)
                    {
                        station_list[k].time_remain = train_info["TripList"]["Trips"][i]["Predictions"][j]["Seconds"];
                    }
                }
            }
        }
    }
}