$(document).foundation();
$(document).ready(function() {
  if($("#fullpage").length) {
   	$("#fullpage").fullpage();
  }
}); 

$('.arrow.up').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionUp();
});

$('.arrow.down').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionDown();
});