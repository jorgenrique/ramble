$(document).ready(function () {
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
	$('.select').selectOrDie();
	$('.cat-item').click(function(){
		$(this).addClass('selected');
	});
	$('.interes').click(function(){
		$(this).remove();
	})
	//$('.pasos-sel').click(function(){
	//	$('.pasos-sel').removeClass('active');
	//	$(this).addClass('active');
	//})

	$('#paso-1-sel').click(function(){
		$('.paso').hide();
		$('#paso-1').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
	})
	$('#paso-2-sel').click(function(){
		$('.paso').hide();
		$('#paso-2').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
		$('#paso-2-sel').addClass('active');
	})
	$('#paso-3-sel').click(function(){
		$('.paso').hide();
		$('#paso-3').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
		$('#paso-2-sel').addClass('active');
		$('#paso-3-sel').addClass('active');
	})
	$('#paso-4-sel').click(function(){
		$('.paso').hide();
		$('#paso-4').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
		$('#paso-2-sel').addClass('active');
		$('#paso-3-sel').addClass('active');
		$('#paso-4-sel').addClass('active');
	})
});
