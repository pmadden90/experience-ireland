function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 53.906163042,
            lng: -8.817830062,
        }
    });


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    var locations = [
        { lat: 53.9061, lng: -8.8178},// Knock Airport
        { lat: 53.5417, lng: -9.2835}, // Cong - Quiet Man set here
        { lat: 52.9715, lng: -9.4309}, // Cliffs of Moher
        { lat: 54.3050, lng: -9.4569}, // Ceide Fields
        //{ lat: 53.8183, lng: -9.0374}, // The Burren
        { lat: 54.3400, lng: -8.3682}, // Glencar Waterfalls
        { lat: 53.7599, lng: -9.6598}, // Croagh Patrick
        { lat: 53.9854, lng: -8.2344}, // Lough Key Forest Park
        { lat: 53.5384, lng: -9.8875}, // Connemara National Park
        { lat: 53.8000, lng: -9.5467}, // Westport House
        { lat: 53.2598, lng: -9.0741}, // Galway Aquariam
        { lat: 54.3667, lng: -8.4744}, // Benbulbin
        { lat: 53.0891, lng: -9.1437}, // Aillwee Caves 
        { lat: 53.2743, lng: -9.0492}, // Eyre Square Galway 
        { lat: 53.2697, lng: -9.0536}, // Galway City Museum
        { lat: 53.2697, lng: -9.0541}, // Spanish Arch
        { lat: 53.0972, lng: -9.6563}, // Aran Islands
        { lat: 53.8000, lng: -9.5467}, // Westport House
        { lat: 53.5616, lng: -9.8893}, // Kylemore Abbey
        { lat: 53.6167, lng: -9.7999}, // Killary Fjord
        { lat: 53.5929, lng: -9.7686}, // Killary Adventre Centre
        { lat: 53.9620, lng: -10.0153},// Achill Island
        { lat: 54.2700, lng: -8.5989}, // Strandhill
        { lat: 54.0569, lng: -9.1574}, // Mount Falcon Estate
        { lat: 53.2982, lng: -8.9968}, // Galway Racecourse
        { lat: 53.2790, lng: -9.0367}, // Connacht Rugby Stadium
        { lat: 53.9449, lng: -8.0980}, // The Dock Arts Centre (Carrick-On-Shannon)
        { lat: 53.8580, lng: -9.2973}, // Linenhall Arts Centre
        { lat: 54.0776, lng: -8.1208}, // Arigna Mining Centre
        { lat: 54.3467, lng: -8.5809}, // Lisadell House
        { lat: 54.2507, lng: -8.5197}, // Carrowmore Megalithic Cemetery
        { lat: 54.3405, lng: -8.3929}, // The Devil's Chimney Waterfall
        { lat: 53.8836, lng: -9.2075}, // National Museum of Country Life
        { lat: 53.9211, lng: -9.1308}, // Michael Davitt Museum
        { lat: 53.7314, lng: -9.2262}, // Moore Hall
        { lat: 53.7921, lng: -8.9172}, // Marian Shrine - Knock
        { lat: 53.0105, lng: -9.0305}, // Father Ted's House
        { lat: 53.1539, lng: -9.0430} // Salthill Prom
    ];
    
    var otherLabels = "abcdefghijklmnopqrstuvwxyz";
    
    var otherLocations = [
        { lat: 53.1320, lng: -9.0012}
        ];
        
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    // Map Legend
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));

    var legend = document.getElementById('legend');
    for (var style in styles) {
        var name = style.name;
        var icon = style.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }
}
