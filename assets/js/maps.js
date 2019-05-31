function initMap(){
      // Map options
      var options = {
        zoom:8,
        center: { lat: 53.906163042, lng: -8.817830062},
        mapTypeId: google.maps.MapTypeId.TERRAIN
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

     
    
    filterMarkers = function(category)
{
   for (i = 0; i < markers.length; i++) {
      marker = markers[i];

      // If is same category or category not picked
      if(marker.category == category || category.length == 0)
      {
          marker.setVisible(true);
      }
      
      // Categories don't match 
      else
      {          
          marker.setVisible(false);
      }
    }  
}
    
    
    
    // Types of Markers
    var airportMarker = '/assets/media/icons/map_symbol_airport_02.png'
      // Array of Markers
      var markers = [
        { //Keem Beach
          coords:{lat: 53.9672, lng: -10.1929},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Keem Beach</h3>Breathtaking<a href="http://www.visitachill.com/en/index.html" target="_blank">🡺Find out more</a>',
          category: 'beach'
        },
        { //Strandhill
          coords:{lat: 54.2700, lng: -8.5989},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Strandhill</h3> A beautiful beachside village <a href="http://gostrandhill.com/" target="_blank">🡺Find out more</a>',
          category: 'beach'
        },
        { //Mullaghmore Strand
          coords:{lat: 54.4523 , lng: -8.4414 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Mullaghmore Strand</h3>',
          category: 'beach'
        },
        { //Kilmurvey Beach
          coords:{lat: 53.1312, lng: -9.7499 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Kilmurvey Beach</h3>',
          category: 'beach'
        },
        { //Culleenamore Strand
          coords:{lat: 54.2608, lng: -8.6088 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Culleenamore Strand</h3>',
          category: 'beach'
        },
        { //Rosses Point
          coords:{lat: 54.3092, lng: -8.5719 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Rosses Point</h3>',
          category: 'beach'
        },
        { //Lahinch Beach
          coords:{lat: 53.9672, lng: -10.1929},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Lahinch Beach</h3>One of the most iconic surfing spots in the world',
          category: 'beach'
        },
        
        { //Coral Strand
          coords:{lat: 53.2297, lng: -9.6526 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Coral Strand</h3>',
          category: 'beach'
        },
        { //Dog's Bay
          coords:{lat: 53.3786, lng: -9.9622 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Dogs Bay</h3>',
          category: 'beach'
        },
        { //Old Head
          coords:{lat: 53.7758 , lng: -9.6526 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Old Head</h3>',
          category: 'beach'
        },
        { //Silverstrand
          coords:{lat: 53.6493 , lng: -9.8853 },
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h3>Silverstrand Beach</h3>',
          category: 'beach'
        },
        {//Knock Airport
          coords:{lat: 53.9061, lng: -8.8178},
          content:'<h3>✈️ Knock Airport</h3><p>A great little airport in the middle of the west of Ireland</p><p><a href="https://irelandwestairport.com/" target="_blank">🡺Find out more</a>',
          category: 'transport'
        },
        {//Cliffs of Moher
        coords:{lat: 52.9715, lng: -9.4309 },
        content:'<h3>📷 Cliffs Of Moher<h3>',
        category: 'scenery'
        },
        //{//Ceide Fields
        //coords:{lat: 54.3050, lng: -9.4569},
        //content:'<h3>📜 Ceide Fields<h3>'>,
       // category:'history'
       // },
        {//Lough Key Forest Park
        coords:{lat: 53.9854, lng: -8.2344},
        content:'<h3>🏹📷 Lough Key Forest Park<h3>',
        category: 'activities'
        },
        {//Glencar Waterfalls
        coords:{lat: 54.3400, lng: -8.3682},
        content:'<h3>📷🚶 Glencar Waterfalls<h3>',
        category: 'scenery'
        },
        {//Croagh Patrick
        coords:{lat: 53.7599, lng: -9.6598},
        content: '<h3>⛰️📷 Croagh Patrick<h3>',
        category: 'scenery'
        },
        {//Galway Aquariam
        coords:{lat: 53.2598, lng: -9.0741},
        content:'<h3>🐠 Galway Aquariam<h3>',
        category: 'activities'
        },
        {//Connemara National Park
        coords:{lat: 53.5384, lng: -9.8875},
        content:'<h3>🏞️📷 Connemara National Park<h3>',
        category: 'scenery'
        },
        {//Benbulbin
        coords:{lat: 54.3667, lng: -8.4744},
        content:'<h3>⛰️📷 Benbulbin Mountain<h3>',
        category: 'scenery'
        },
        {//Ailwee Caves
        coords:{lat: 53.0891, lng: -9.1437},
        content:'<h3>💎 Ailwee Caves<h3>',
        category: 'activities'
        },
        {//Eyre Square
        coords:{lat: 53.2743, lng: -9.0492},
        content:'<h3>🏙️🎻Eyre Square<h3>'
        },
        {//Galway City Museum
        coords:{lat: 53.2697, lng: -9.0536},
        content:'<h3>🏛️Galway City Museum<h3>',
        category: 'history'
        },
        {//Spanish Arch
        coords:{lat: 53.2697, lng: -9.0541},
        content:'<h3>📷 Spanish Arch<h3>',
        category: 'history'
        },
        {//Aran Islands
        coords:{lat: 53.0972, lng: -9.6563},
        content:'<h3>⛵📷 Aran Islands<h3>',
        category: 'scenery'
        },
        {//Westport House
        coords:{lat: 53.8000, lng: -9.5467},
        content:'<h3>🏛🏹 Westport House<h3>',
        category: 'activities'
        },
        {//Kylemore Abbey
        coords:{lat: 53.5616, lng: -9.8893},
        content:'<h3>🏛📷 Kylemore Abbey<h3>',
        category: 'history'
        },
        {//Killary Fjord
        coords:{lat:53.6167, lng: -9.7999},
        content:'<h3>⛵📷   Killary Fjord</h3> '  ,
        category: 'scenery'   
        },
        {//Killary Adventure Co
        coords:{lat: 53.5929, lng: -9.7686},
        content:'<h3>🏹 Killary Adventure Centre<h3>',
        category: 'activities'
        },
        {//Achill Island
        coords:{lat: 53.9620, lng: -10.0153},
        content:'<h3>🚗📷  Achill Island<h3>',
        category: 'scenery'
        },
        {//Mount Falcon Estate
        coords:{lat: 54.0569, lng: -9.1574},
        content:'<h3>🏹🎣 Mount Falcon Estate<h3>',
        category: 'activities'
        },
        {//Galway Racecourse
        coords:{lat: 53.2982, lng: -8.9968},
        content:'<h3>🏇 Galway Racecourse<h3>',
        category: 'sport'
        },
        {//Connacht Rugby Stadium
        coords:{lat: 53.2790, lng: -9.0367},
        content:'<h3>🏉 Connacht Rugby Stadium<h3>',
        category: 'sport'
        },
        {//Mayo Stadium
        coords:{lat:53.8535 , lng: -9.2862 },
        content:'<h3>⚽ Mayo GAA Stadium<h3>',
        category: 'sport'
        },
        {//Galway Stadium
        coords:{lat: 53.2632 , lng: -9.0843 },
        content:'<h3>⚽ Galway GAA Stadium</h3>',
        category: 'sport'
        },
        {//Roscommon Stadium
        coords:{lat: 53.6266 , lng: -8.1806 },
        content:'<h3>⚽ Roscommon GAA Stadium<h3>',
        category: 'sport'
        },
        {//Sligo Stadium
        coords:{lat: 54.2571 , lng: -8.4658 },
        content:'<h3>⚽ Sligo GAA Stadium<h3>',
        category: 'sport'
        },
        {//Leitrim Stadium
        coords:{lat: 53.9481 , lng: -8.0761 },
        content:'<h3>⚽ Leitrim GAA Stadium<h3>',
        category: 'sport'
        },
        {//The Dock
        coords:{lat: 53.9449, lng: -8.0980},
        content:'<h3>🎭 The Dock Arts Centre<h3>',
        category: 'arts'
        },
        {//The Linenhall 
        coords:{lat: 53.8580, lng: -9.2973},
        content:'<h3>🎭 The Linenhall Arts Centre<h3>',
        category: 'arts'
        },
        {//Arigna Mining Experience
        coords:{lat: 54.0776, lng: -8.1208},
        content:'<h3>⛏️ Arigna Mining Experience<h3>',
        category: 'activities'
        },
        {//Lisadell House
        coords:{lat: 54.3467, lng: -8.5809},
        content:'<h3>📜📷 Lisadell House<h3>',
        category: 'history'
        },
        {//Carrowmore Megalithic Cemetary
        coords:{lat: 54.2507, lng: -8.5197},
        content:'<h3>📜 Carrowmore Megalithic Cemetary<h3>',
        category: 'history'
        },
        {//Devil's Chimney Waterfall
        coords:{lat: 54.3405, lng: -8.3929},
        content:"<h3>📷🚶 Devil's Chimney Waterfall<h3>",
        category: 'scenery'
        },
        {//Museum Of Country Living
        coords:{lat: 53.8836, lng: -9.2075},
        content:'<h3>🏛️🚜National Musuem Of Country Living<h3>',
        category: 'history'
        },
        {//Marian Shrine
        coords:{lat: 53.7921, lng: -8.9172},
        content:'<h3>⛪Marian Shrine - Knock<h3>',
        category: 'religious'
        },
        {//Father Ted's House
        coords:{lat: 53.0105, lng: -9.0305},
        content:'<h3>🎥 Filming Location - <em>Father Ted<em><h3>',
        category: 'TV/Film'
        },
        {//Cong - Quiet Man
        coords:{ lat: 53.5417, lng: -9.2835},
        content:'<h3>🎥 Filming Location - <em>The Quiet Man<em><h3>',
        category: 'TV/Film'
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
          map:map
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
  
  
  