function initMap(){
      // Map options
      var options = {
        zoom:8,
        center: { lat: 53.906163042, lng: -8.817830062}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      /*
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      */
    
    // Types of Markers
    var airportMarker = '/assets/media/icons/map_symbol_airport_02.png'
      // Array of Markers
      var markers = [
        { //Keem Beach
          coords:{lat: 53.9672, lng: -10.1929},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Keem Beach</h3><a href="http://www.visitachill.com/en/index.html" target="_blank">🡺Find out more</a>'
        },
        { //Strandhill
          coords:{lat: 54.2700, lng: -8.5989},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Strandhill</h3> A beautiful beachside village <a href="http://gostrandhill.com/" target="_blank">🡺Find out more</a>'
        },
        {//Knock Airport
          coords:{lat: 53.9061, lng: -8.8178},
          content:'<h3>✈️ Knock Airport</h3>'
        },
        {//Cliffs of Moher
        coords:{lat: 52.9715, lng: -9.4309 },
        content:'<h3>📷 Cliffs Of Moher<h3>'
        },
        {//Ceide Fields
        coords:{lat: 54.3050, lng: -9.4569},
        content:'<h3>📜 Ceide Fields<h3>'
        },
        {//Lough Key Forest Park
        coords:{lat: 53.9854, lng: -8.2344},
        content:'<h3>🏹📷 Lough Key Forest Park<h3>'
        },
        {//Glencar Waterfalls
        coords:{lat: 54.3400, lng: -8.3682},
        content:'<h3>📷🚶 Glencar Waterfalls<h3>'
        },
        {//Croagh Patrick
        coords:{lat: 53.7599, lng: -9.6598},
        content: '<h3>⛰️📷 Croagh Patrick<h3>'
        },
        {//Galway Aquariam
        coords:{lat: 53.2598, lng: -9.0741},
        content:'<h3>🐠 Galway Aquariam<h3>'
        },
        {//Connemara National Park
        coords:{lat: 53.5384, lng: -9.8875},
        content:'<h3>🏞️📷 Connemara National Park<h3>'
        },
        {//Benbulbin
        coords:{lat: 54.3667, lng: -8.4744},
        content:'<h3>⛰️📷 Benbulbin Mountain<h3>'
        },
        {//Ailwee Caves
        coords:{lat: 53.0891, lng: -9.1437},
        content:'<h3>💎 Ailwee Caves<h3>'
        },
        {//Eyre Square
        coords:{lat: 53.2743, lng: -9.0492},
        content:'<h3>🏙️🎻Eyre Square<h3>'
        },
        {//Galway City Museum
        coords:{lat: 53.2697, lng: -9.0536},
        content:'<h3>🏛️Galway City Museum<h3>'
        },
        {//Spanish Arch
        coords:{lat: 53.2697, lng: -9.0541},
        content:'<h3>📷 Spanish Arch<h3>'
        },
        {//Aran Islands
        coords:{lat: 53.0972, lng: -9.6563},
        content:'<h3>⛵📷 Aran Islands<h3>'
        },
        {//Westport House
        coords:{lat: 53.8000, lng: -9.5467},
        content:'<h3>🏛🏹 Westport House<h3>'
        },
        {//Kylemore Abbey
        coords:{lat: 53.5616, lng: -9.8893},
        content:'<h3>🏛📷 Kylemore Abbey<h3>'
        },
        {//Killary Fjord
        coords:{lat:53.6167, lng: -9.7999},
        content:'<h3>⛵📷   Killary Fjord</h3> '     
        },
        {//Killary Adventure Co
        coords:{lat: 53.5929, lng: -9.7686},
        content:'<h3>🏹 Killary Adventure Centre<h3>'
        },
        {//Achill Island
        coords:{lat: 53.9620, lng: -10.0153},
        content:'<h3>🚗📷  Achill Island<h3>'
        },
        {//Mount Falcon Estate
        coords:{lat: 54.0569, lng: -9.1574},
        content:'<h3>🏹🎣 Mount Falcon Estate<h3>'
        },
        {//Galway Racecourse
        coords:{lat: 53.2982, lng: -8.9968},
        content:'<h3>🏇 Galway Racecourse<h3>'
        },
        {//Connacht Rugby Stadium
        coords:{lat: 53.2790, lng: -9.0367},
        content:'<h3>🏉 Connacht Rugby Stadium<h3>'
        },
        {//Mayo Stadium
        coords:{lat:53.8535 , lng: -9.2862 },
        content:'<h3>⚽ Mayo GAA Stadium<h3>'
        },
        {//Galway Stadium
        coords:{lat: 53.2632 , lng: -9.0843 },
        content:'<h3>⚽ Galway GAA Stadium</h3>'
        },
        {//Roscommon Stadium
        coords:{lat: 53.6266 , lng: -8.1806 },
        content:'<h3>⚽ Roscommon GAA Stadium<h3>'
        },
        {//Sligo Stadium
        coords:{lat: 54.2571 , lng: -8.4658 },
        content:'<h3>⚽ Sligo GAA Stadium<h3>'
        },
        {//Leitrim Stadium
        coords:{lat: 53.9481 , lng: -8.0761 },
        content:'<h3>⚽ Leitrim GAA Stadium<h3>'
        },
        {//The Dock
        coords:{lat: 53.9449, lng: -8.0980},
        content:'<h3>🎭 The Dock Arts Centre<h3>'
        },
        {//The Linenhall 
        coords:{lat: 53.8580, lng: -9.2973},
        content:'<h3>🎭 The Linenhall Arts Centre<h3>'
        },
        {//Arigna Mining Experience
        coords:{lat: 54.0776, lng: -8.1208},
        content:'<h3>⛏️ Arigna Mining Experience<h3>'
        },
        {//Lisadell House
        coords:{lat: 54.3467, lng: -8.5809},
        content:'<h3>📜📷 Lisadell House<h3>'
        },
        {//Carrowmore Megalithic Cemetary
        coords:{lat: 54.2507, lng: -8.5197},
        content:'<h3>📜 Carrowmore Megalithic Cemetary<h3>'
        },
        {//Devil's Chimney Waterfall
        coords:{lat: 54.3405, lng: -8.3929},
        content:"<h3>📷🚶 Devil's Chimney Waterfall<h3>"
        },
        {//Museum Of Country Living
        coords:{lat: 53.8836, lng: -9.2075},
        content:'<h3>🏛️🚜National Musuem Of Country Living<h3>'
        },
        {//Marian Shrine
        coords:{lat: 53.7921, lng: -8.9172},
        content:'<h3>⛪Marian Shrine - Knock<h3>'
        },
        {//Father Ted's House
        coords:{lat: 53.0105, lng: -9.0305},
        content:'<h3>🎥 Filming Location - <em>Father Ted<em><h3>'
        },
        {//Cong - Quiet Man
        coords:{ lat: 53.5417, lng: -9.2835},
        content:'<h3>🎥 Filming Location - <em>The Quiet Man<em><h3>'
        }
      ];


      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }
  