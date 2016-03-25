$(document).ready(function(){
	var b = true;
	
	
		
		$("#video_self img").click(function(){	
		if (b===true) {
			$("header").animate({
			"height": "770px",
	   }, 600 );
				b = false;
		}
		else {
            
		$("header").animate({
			"height": "570px",
	   }, 600 );
		b = true;
        }
            
		});
        

})