$(document).ready(function(){
var arrow = ['circle_customer_one_left','circle_customer_two_left','circle_customer_center','circle_customer_two_right','circle_customer_one_right'];
		var n=0;	
	$("#arrow_customer_right").click(function(){
			
		$("div#"+ arrow[4]).insertBefore($("div#"+ arrow[0]));
		
		arrow.unshift(arrow[4]);
		arrow.pop();
		
		/*$("div#"+ arrow[3] + " a" ).animate({
        "width": "126px",
       "height": "126px",
		"border-radius": "68px"
      }, 0 );
	  $("div#"+ arrow[2] + " a" ).animate({
        "width": "174px",
       "height": "174px",
		"border-radius": "87px"
      }, 0 );
	  $("div#"+ arrow[1] + " a" ).animate({
        "width": "126px",
       "height": "126px",
		"border-radius": "68px"		
      }, 0 );
	   $("div#"+ arrow[4] + " a" ).animate({
        "width": "90px",
       "height": "90px",
		"border-radius": "45px"	
      }, 0 );
	  
	  if(n===0) {
	  $("div#"+ arrow[3] + " a" ).animate({
			"margin-top": "24px",
	   }, 0 );
	    $("div#"+ arrow[2] + " a" ).animate({
			"margin-top": "-24px",
	   }, 0 );
	    $("div#"+ arrow[1] + " a" ).animate({
		"margin-top": "-18px",
	   }, 0 );
	    $("div#"+ arrow[4] + " a" ).animate({
			"margin-top": "18px",
	   }, 0 );
	  
	  }
	  if(n===1) {
	  $("div#"+ arrow[3] + " a" ).animate({
			"margin-top": "-4px",
	   }, 0 );
	    $("div#"+ arrow[2] + " a" ).animate({
			"margin-top": "-55px",
	   }, 0 );
	    $("div#"+ arrow[1] + " a" ).animate({
		"margin-top": "-15px",
	   }, 0 );
	    $("div#"+ arrow[4] + " a" ).animate({
			"margin-top": "42px",
	   }, 0 );
	  }*/

		
	 n=n+1;	
	}); 
	$("#arrow_customer_left").click(function(){
			
		$("div#"+ arrow[0]).insertAfter($("div#"+ arrow[4]));
		
		arrow.push(arrow[0]);
		arrow.shift();
	}); 
})
