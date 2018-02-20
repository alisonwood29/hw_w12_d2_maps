const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
  // this.addInfoWindow("coords");
  return marker;
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    // console.log(event);
    // console.log(event.latLng.lat());
    const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    this.addMarker(coords);
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  });
};

// MapWrapper.prototype.setCenter = function (place) {
//   console.log("setting to LA");
//   this.googleMap.setCenter(place);
// }

// MapWrapper.prototype.addInfoWindow = function (contentString) {
//   const infoWindow = new google.maps.InfoWindow({
//     content: contentString
//   })
//   console.log(infoWindow);
// }
