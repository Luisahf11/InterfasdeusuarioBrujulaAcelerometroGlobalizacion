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
			navigator.compas.clearWatch(watchID);
			watchID = null;
			$('#bRes').text(0.000);
		});


	},false);
	
});