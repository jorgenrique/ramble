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
		$('#search-bar').removeClass("show");
  	});
	$('section, footer').on("click", function () {
		$('#menu').removeClass("show");
  	});
	//Search Bar hide/show function
	$('#lupa').on("click", function () {
		$('#search-bar').toggleClass("show");
		$('#menu').removeClass("show");
  	});
	$('section, footer').on("click", function () {
		$('#search-bar').removeClass("show");
  	});
	//Cambiar entre registro y entrar a la app, desde el usuario
	$('.sign-up').click(function(){
		$('#sign-in').hide();
		$('#sign-up').show();
	})
	$('.sign-in').click(function(){
		$('#sign-up').hide();
		$('#sign-in').show();
	})
	$('.inicio').click(function(){
		$('.overlay').show();
		$('#sign-in').show();
	})
	$('.registro').click(function(){
		$('.overlay').show();
		$('#sign-up').show();
	})
	$('.close-btn').click(function(){
		$('.overlay').hide();
		$('.account-container').hide();
	})
	$('.overlay').click(function(){
		$(this).hide();
		$('.account-container').hide();
	})
});
