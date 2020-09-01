function initMap() {

var latArray = [37.336730, 37.323910, 37.350370, 37.256850, 37.356540, 37.323420, 37.326046, 37.322617, 37.300497, 37.367696, 37.349543];

var longArray = [-121.892600, -121.910770, -121.894370, -121.861760, -121.905310, -121.927781, -121.898837, -121.932404, -121.980559, -121.892511, -121.893315];

var contentString = ['<h2>Back A Yard Caribbean Grill</h2>', '<h2>Gojo Ethiopian Restaurant</h2>', '<h2>Jackie’s Place</h2>', '<h2>Jubba Somali</h2>', '<h2>LeYou Ethiopian</h2>', '<h2>Lunch Box</h2>',
'<h2>Mudai Restaurant</h2>', '<h2>Walia Ethipian Cuisine</h2>', '<h2>Zeni Ethiopian Restaurant</h2>', '<h2>Jon Jon BBQ</h2>', '<h2>Kazoo Sushi Bar</h2>'];

var givenCenter = {lat: 37.3382, lng: -121.8863};



  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: givenCenter
  });

  for (i = 0; i < latArray.length; i++) {
   placeMarker(latArray[i], longArray[i], map, contentString[i]);
  }

}



function placeMarker(givenLat, givenLong, map, givenContent) {

        var infowindow = new google.maps.InfoWindow({
          content: givenContent
        });

        var marker = new google.maps.Marker({
            position: {lat: givenLat, lng: givenLong},
            map: map,
            title: 'GIVEEEEN MEEEAAAPP'
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}
