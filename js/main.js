$(document).ready(function () {
	//Titulo en el select
	$('.select').selectOrDie({
		placeholder:"¿Qué quieres hacer?"
	});
	//Categories select
	$('.cat-item').click(function(){
		$(this).addClass('selected');
	});
	//Perfil eliminar intereses
	$('.interes').click(function(){
		$(this).remove();
	})
	//Pasos hide/show function
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
	//Menu Bar hide/show function
	$('#profile').on("click", function () {
		$('#menu').toggleClass("show");
  	});
	$('section, footer').on("click", function () {
		$('#menu').removeClass("show");
  	});
	//Search Bar hide/show function
	$('#lupa').on("click", function () {
		$('#search-bar').show();
  	});
	$('section, footer').on("click", function () {
		$('#search-bar').hide();
  	});
});
