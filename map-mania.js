
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 8,
  });

  const myLatlng = { lat: 43.1001, lng: -88.6382 };
  
  map.addListener('idle', function() {
    console.log(map.getBounds());
    console.log(map.getBounds().contains(myLatlng));
    console.log(map.getZoom());
  });

  var marker = new google.maps.Marker({
    position:{ lat: 41.6475306, lng: -88.0895061 },
    map:map
  });
}
