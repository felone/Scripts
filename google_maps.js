
var map;  
function initialize() {
  var styles = [{
    stylers: [
      { "hue": "#009BCC" },
      { "invert_lightness": true },
      { "saturation": 60 },
      { "lightness": 40 },
      { "gamma": 0.93 }
    ]
  }]; 
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
    var mapOptions = {
        zoom: 16,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL},
        mapTypeControl: false,  
        panControl: false,
        scrollwheel: false,
        scaleControl: false,    
        center: new google.maps.LatLng(-33.4539998,-70.5755513),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions); 
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    var image = 'img/marker.png';
    var myLatLng = new google.maps.LatLng(-33.4539998,-70.5755513);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      title: "Aqui estamos!"
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
