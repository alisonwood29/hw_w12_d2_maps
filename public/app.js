const initialize = function () {

  const mapDiv = document.getElementById('main-map');
  const coords = {lat: 55.953251, lng: -3.188267};
  const LA = {lat: 34.052234, lng: -118.243685};
  zoom = 11;


  const mainMap = new MapWrapper(mapDiv, coords, zoom);

  const marker = mainMap.addMarker(coords);

  mainMap.addMarker({lat: 55.948595, lng: -3.199913});

  mainMap.addClickEvent();

  const bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));


  const infoWindow = new google.maps.InfoWindow({
    content: "hi"
  })

  marker.addListener('click', function() {
    console.log("clicked on marker");
    infoWindow.open(mainMap, marker);
  });

  const takeMeToLAButton = document.getElementById('button-take-me-to-la');
  takeMeToLAButton.addEventListener('click', function(){
    mainMap.googleMap.setCenter(LA);
  })




}




document.addEventListener('DOMContentLoaded', initialize);
