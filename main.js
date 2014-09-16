
$(function(){
	var can = document.getElementById("oekaki");
	if (!can || !can.getContext) return false;
	console.log("ok");
	var ctx = can.getContext("2d"),
		startX,startY,
		x,y,
		isDrawing = false,
		borderWidth= 10;
		
	$("#oekaki").mousedown(function(e){
		startX = e.pageX - $(this).offset().left - borderWidth;
		startY = e.pageY - $(this).offset().top - borderWidth;
		isDrawing = true;

	}).mousemove(function(e){
		if (!isDrawing) return;
		
		x = e.pageX - $(this).offset().left - borderWidth;
		y = e.pageY - $(this).offset().top - borderWidth;
		ctx.beginPath();
		ctx.moveTo(startX,startY);
		ctx.lineTo(x,y);
		ctx.stroke();
		startX = x;
		startY = y;
	}).mouseup(function(){
		isDrawing = false;
	}).mouseleave(function(){
		isDrawing = false;
	});

});



