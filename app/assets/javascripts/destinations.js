
$(document).ready(function (){
  var myLatLng = new google.maps.LatLng(latitude, longitude);

    function initialize() {
      var mapOptions = {
      center: myLatLng,
      zoom: 17,
      scrollwheel: false,
      mapmaker: true,
      };

      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: address,
      });

      var contentString = '<h2>' + address + '</h2>' +
      '<p>' + description + '</p>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

    google.maps.event.addDomListener(window, 'load', initialize);
});
