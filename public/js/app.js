$(document).foundation();
$(document).ready(function() {
  if($("#fullpage").length) {
   	$("#fullpage").fullpage({
   		anchors: ['bobby','work','resume','contact']
   	});
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