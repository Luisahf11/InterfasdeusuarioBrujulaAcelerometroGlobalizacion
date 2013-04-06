$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		//Brujula
		var watchID = null;
		$('#bInc').tap(function(){
			 watchID = navigator.compass.watchHeading(function (heading){
				 $('#bRes').text(heading.magneticHeading);
			 },
function (compassError) {
        alert('Compass error: ' + compassError.code);
},

	{ frequency: 3000 });// Update every 3 seconds
		});
		$('#bDtn').tap(function(){
			navigator.compass.clearWatch(watchID);
			watchID = null;
			$('#bRes').text(0.000);
		});

		//Acelerometro
		var awatchID = null;
		$('#aInc').tap(function(){
			 awatchID = navigator.accelerometer.watchAcceleration(function (acceleration){
				 $('#aRes').html('Acceleration X: ' + acceleration.x + '<br />' +
                            	 'Acceleration Y: ' + acceleration.y + '<br />' +
                           		 'Acceleration Z: ' + acceleration.z + '<br />' +
                            	 'Timestamp: '      + acceleration.timestamp + '<br />');
			 },
function (accError) {
        alert('Accelerelometer error: ' + accError.code);
},

	{ frequency: 500 });// Update every 3 seconds
		});
		$('#aDtn').tap(function(){
			navigator.accelerometer.clearWatch(awatchID);
			awatchID = null;
			$('#aRes').text('Detenido');
		});
		
		//Globalización
		navigator.globalization.getPreferredLanguage(function (language){
			 $('#gRes').text('language: ' + language.value + '\n');
				},function (){
			   alert('Error getting language\n');
	   });		

	},false);
	
});