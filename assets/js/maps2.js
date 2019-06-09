/*var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
  content: ''
});

// Our markers
markers1 = [
    ['0', 'Knock Airport', 53.906163042, 8.817830062, 'transport'],
    ['1', 'Keem Beach', 53.9672, 10.1929, 'beach'],
    ['2', 'Strandhill', 54.2700, 8.5989, 'beach'],
    ['3', 'Mullaghmore Strand', 54.4523, 8.4414, 'beach'],
    ['4', 'Kilmurvey Beach', 53.1312, 9.7499, 'beach'],
    ['5', 'Cullenamore Strand', 54.2608, 8.6088, 'beach'],
    ['6', 'Rosses Point', 54.3092, 8.5719, 'beach'],
    ['7', 'Lahinch Beach', 53.9672, 10.1929, 'beach'],
    ['8', 'Coral Strand', 53.2297, 9.6526, 'beach'],
    ['9', 'Dogs Bay', 53.3786, 9.7622, 'beach'],
    ['10', 'Old Head', 53.3786, 9.6526, 'beach'],
    ['11', 'Silverstrand', 53.6493, 9.8853, 'beach'],
    ['12', 'Cliffs of Moher', 52.9715, 9.4309, 'scenery'],
    ['13', 'Lough Key Forest Park', 53.9854, 8.2344, 'activities'],
    ['14', 'Glencar Waterfalls', 54.3400, 8.3682, 'scenery'],
    ['15', 'Croagh Patrick', 53.7599, 9.6598, 'scenery'],
    ['16', 'Galway Aquarium', 53.2598, 9.0741, 'activities'],
    ['17', 'Connemara National Park', 53.5384, 9.8875, 'scenery'],
    ['18', 'Benbulbin', 54.3667, 8.4744, 'scenery'],
    ['19', 'Ailwee Caves', 53.0891, 9.1437, 'scenery'],
    ['20', 'Eyre Square', 53.2743, 9.0492, 'culture'],
    ['21', 'Galway City Museum', 53.2697, 9.0536, 'history'],
    ['22', 'Spanish Arch', 53.2697, 9.0541, 'history'],
    ['23', 'Aran Islands', 53.0972, 9.6563, 'scenery'],
    ['24', 'Westport House', 53.8000, 9.6563, 'activities'],
    ['25', 'Kylemore Abbey', 53.5616, 9.8893, 'scenery'],
    ['26', 'Killary Fjord', 53.6167, 9.7999, 'scenery'],
    ['27', 'Killary Adventure Centre', 53.5929, 9.7686, 'activities'],
    ['28', 'Achill Island', 53.9620, 10.0153, 'scenery'],
    ['29', 'Mount Falcon Estate', 54.0569, 9.1574, 'activities'],
    ['30', 'Galway Racecourse', 53.2982, 8.9968, 'sports'],
    ['31', 'Connacht Rugby Stadium', 53.2790, 9.0367, 'sports'],
    ['32', 'Mayo GAA Stadium', 53.8535, 9.0367, 'sports'],
    ['33', 'Galway GAA Stadium', 53.2632, 9.0843, 'sports'],
    ['34', 'Roscommon GAA Stadium', 53.6266, 8.1806, 'sports'],
    ['35', 'Sligo GAA Stadium', 54.2571, 8.4658, 'sports'],
    ['36', 'Leitrim GAA Stadium', 53.9481, 8.0761, 'sports'],
    ['37', 'The Dock Arts Centre', 53.9449, 8.0980, 'arts'],
    ['38', 'The Linenhall Arts Centre', 53.8580, 9.2973, 'car'],
    ['39', 'Arigna Mining Experience', 54.0770, 8.1208, 'activities'],
    ['40', 'Lisadell House', 54.3467, 8.5809, 'history'],
    ['41', 'Carrowmore Megalithic Cemetary', 54.2507, 8.5197, 'car'],
    ['42', 'Devils Chimney', 54.3405, 8.3929, 'scenery'],
    ['43', 'National Museum Of Country Living', 53.8836, 9.2075, 'history'],
    ['44', 'Marian Shrine - Knock', 53.7921, 8.9172, 'religious'],
    ['45', 'Home of Father Ted', 53.0105, 9.0305, 'Film/TV'],
    ['46', 'Cong - The Quiet Man', 53.5417, 9.2835, 'Film/TV'],
    ['47', 'Voya Spa', 54.2700, 8.6095, 'spa'],
    ['48', 'Strandhill Surf School', 54.2708, 8.6090, 'activities'],
    ['49', 'Strandhill Campsite', 52.2719, 8.6013, 'activities'],
    ['50', 'Kilcullen Seaweed Baths', 54.2181, 9.0951, 'spa']
];

/**
 * Function to init map
 

function initMap(){
      // Map options
      var options = {
        zoom:8,
        center: { lat: 53.906163042, lng: -8.817830062},
        mapTypeId: google.maps.MapTypeId.TERRAIN
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/*function initialize() {
    var center = new google.maps.LatLng(53.906163042, 8.817830062);
    var mapOptions = {
        zoom: 8,
        center: center,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

map = new google.maps.Map(document.getElementById('map-div'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}
/**
 * Function to add marker to map
 

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(8);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

// Init map
//initialize();*/

// This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
     
 

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.5384, lng: -9.8875},
          zoom: 6.5,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
      
      

