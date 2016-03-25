$(document).ready(function(){
	var b = true;
	
	
		
		$("#video_self img").click(function(){	
		if (b===true) {
			$("header").animate({
			"height": "770px",
	   }, 600 );
		
		alert(b+" 1");
		b = false;
		}
		else
		$("header").animate({
			"height": "370px",
	   }, 600 );
		b = true;
		});

})