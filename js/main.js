$(document).ready(function () {
	//Titulo en el select
	$('.select').selectOrDie({
		placeholder:"¿Qué quieres hacer?"
	});
	$('#filtro-hora').selectOrDie({
		placeholder:"Momento del dia"
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
	$('#paso-1-sel, #paso-2-atras').click(function(){
		$('.paso').hide();
		$('#paso-1').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
	})
	$('#paso-2-sel, #paso-1-continuar, #paso-3-atras').click(function(){
		$('.paso').hide();
		$('#paso-2').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
		$('#paso-2-sel').addClass('active');
	})
	$('#paso-3-sel, #paso-2-continuar, #paso-4-atras').click(function(){
		$('.paso').hide();
		$('#paso-3').show();
		$('.pasos-sel').removeClass('active');
		$('#paso-1-sel').addClass('active');
		$('#paso-2-sel').addClass('active');
		$('#paso-3-sel').addClass('active');
	})
	$('#paso-4-sel, #paso-3-continuar').click(function(){
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
	$('.overlay-bg').click(function(){
		$('.overlay').hide();
		$('.account-container').hide();
		$('.map').hide();
	})
	//comportamiento filtros
	$('#btn-open-filtro').click(function(){
		$('.filtro-cont').animate({height:850},300);
		$(this).replaceWith("<a class='small space-top btn-filtro' id='btn-close-filtro' href='retos.html'>Filtrar</a>")
	});
	$('.cerrar-filtros').click(function(){
		$('.filtro-cont').animate({height:0},300);
		$('#btn-close-filtro').replaceWith("<div class='small cont-closed btn-filtro' id='btn-open-filtro'>Filtros +</div>")
	})
	$('.icon').click(function(){
		$(this).toggleClass("active");
	})
	//ver mapa
	$('.ver-mapa').click(function(){
		$('.overlay').show();
		$('#map').show();
	})
	//Datepicker para filtro
	$("#date").datepicker()
	//Ruta logica para pasos
	$('.paso-ruta').click(function(){
		$('.paso-ruta').removeClass('active');
		$(this).addClass('active');
	})
	//concluir reto
	$('#concluir-reto').click(function(){
		$('.overlay').show();
		$('#felicidades').show();
	})
});
