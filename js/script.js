console.log('Bootstrap custome theme');

$('#map').hide();
$('#home').show();


$(document).ready(function(){
  // $('#heading').click(function(){
  //   $(this).hide();
  // });
  $('#mapBtn').click(function(){
  	$('#home').hide();
  	$('#map').show();
  });

  $('#homeBtn').click(function(){
  	$('#map').hide();
  	$('#home').show();
  });


});


 // var map;
 //      function initMap() {
 //        map = new google.maps.Map(document.getElementById('map'), {
 //          center: {lat: -34.397, lng: 150.644},
 //          zoom: 8
 //        });
 //      }

 // Initialize and add the map
function initMap() {
  // The location of Wellington
  var wellington = {lat: -41.2865, lng: 174.7762};
  var auckland = {lat: -36.849751, lng: 174.763491};
  var christchurch = {lat: -43.5321, lng: 172.6362};
  var levin = {lat: -40.6222, lng: 175.2862};
  // The map, centered at Wellington
  // NEVER CALL THE MAP OBJECT inside the loop
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: wellington});

  // The marker, positioned at wellington
  var marker1 = new google.maps.Marker({position: wellington, map: map});
  var marker2 = new google.maps.Marker({position: auckland, map: map});
  var marker3 = new google.maps.Marker({position: christchurch, map: map});
  var marker4 = new google.maps.Marker({position: levin, map: map});


  // info windows
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Wellington</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Wellington</b>, he capital of <b>New Zealand</b>, ' +
      'sits near the North Island’s southernmost point on the Cook Strait. '+
      'A compact city, it encompasses a waterfront promenade, sandy beaches,  '+
      'a working harbour and colourful timber houses on surrounding hills. '+
      'From Lambton Quay, the iconic red Wellington Cable Car heads to the  '
      'Wellington Botanic Gardens.</p>'+
      // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      // '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';


   var infowindow = new google.maps.InfoWindow({
    content: contentString
  	 });

  	var marker = new google.maps.Marker({
    	position: wellington,
    	map: map,
    	title: 'Uluru (Ayers Rock)'
 	 });
  	marker.addListener('click', function() {
    infowindow.open(map, marker1);
  	});
	

}