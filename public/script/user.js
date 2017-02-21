$(document).ready(function() {

	(function($, window, document, undefined) {
		$.fn.simplegallery = function(options) {
			var defaults = {
				'galltime': 300,
				'gallcontent': '.content',
				'gallthumbnail': '.thumbnail',
				'gallthumb': '.thumb'
			};

			var settings = $.extend({}, defaults, options);

			return this.each(function() {
				$(settings.gallthumb).click(function() {
					$(settings.gallcontent).find('img').stop(true,true).fadeOut(settings.galltime).hide();
					var img_attr = $(this).find('img').attr("id"),
					image_id = img_attr.replace('thumb_', '');
					$('.image_' + image_id + '').stop(true,true).fadeIn(settings.galltime);
					return false;
				});
			});
		};
	})(jQuery, window, document);
	$('#gallery').simplegallery({
		galltime : 400,
		gallcontent: '.content',
		gallthumbnail: '.thumbnail',
		gallthumb: '.thumb'
	});

	$('.map-container').click(function(){
		$(this).find('iframe').addClass('clicked')
	}).mouseleave(function(){
		$(this).find('iframe').removeClass('clicked')
	});

	$('body').on("click", "#registerbtn", function(e) {
		e.preventDefault();
		
		var datos = $('form').serializeArray();
		
		if(typeof datos[6] !== 'undefined' && datos[6].value === 'on'){
			$.ajax({
				type: 'POST',
				url: '/user/register',
				data: {data:datos},
				dataType: 'json',
				cache: false,
				beforeSend: function(){
					setError('alert', '', 'Creando cuenta...', '');
				},
				success: function(res){
					if(res.success){
						$('#reg').remove();
						$('#acc').html('Bienvenido, '+res.name);
						$('#inverModal-login').modal('hide');
					}else{
						var title = 'Unknown Error';
						var desc  = 'Por favor envia tus datos a support@inverspot.com con el asunto "Error en el registro."';
						setError('modal', title, desc, 9000);
					}
				},
				error: function(){
					var title = 'Unknown Error';
					var desc  = 'Por favor envia tus datos a support@inverspot.com con el asunto "Error en el registro."';
					setError('modal', title, desc, 9000);
				}
			});
		}else{
			alert('Acepta el aviso de política y privacidad');
		}
	});

	$('body').on('click', '#loginBtn', function(e){
		e.preventDefault();
		
		var user = $('[name="user"]').val();
		var pass = $('[name="password"]').val();

		console.debug(user);
		console.debug(pass);
		
		if(typeof user !== 'undefined' && typeof pass !== 'undefined'){
			$.ajax({
				type: 'POST',
				url: '/user/login',
				data: {user:user,pass:pass},
				dataType: 'json',
				cache: false,
				beforeSend: function(){
					setError('alert', '', 'Accediendo a tu cuenta...', '');
				},
				success: function(res){
					if(res.success){
						$('#reg').remove();
						$('#acc').html('Bienvenido, '+res.name);
						$('#inverModal-login').modal('hide');
					}else{
						var title = 'Unknown Error';
						var desc  = 'Verifica que tu email y contraseña coincidan';
						setError('modal', title, desc, 9000);
					}
				},
				error: function(){
					var title = 'Unknown Error';
					var desc  = 'Por favor envia tus datos a support@inverspot.com con el asunto "Error en el registro."';
					setError('modal', title, desc, 9000);
				}
			});
		}else{
			alert('Los campos de email y contraseña son requeridos');
		}
	});


	function setError(type, title, desc, time){
		if(type == 'modal'){
			alert(title+'\n'+desc);
		}else if (type == 'alert'){
			$('#null-div-message').html(desc);
			$('#null-div').addClass('active');
		};
	}

	$('dd').click(function(e){
		e.preventDefault();
		var info = $(this).data('date');
		var dy = info.split('_');

		if(typeof info !== 'undefined'){
			$.ajax({
				type: 'POST',
				url: '/user/getGallery',
				data: {info:info},
				dataType: 'json',
				cache: false,
				beforeSend: function(){
					setError('alert', '', 'Obteniendo avances...', '');
				},
				success: function(res){
					if(res.success){
						var fimg = '';
						var timg = '';
						$('#gal_date').replaceWith('<div class="advance-box date-box col-xs-12 col-sm-4 col-md-4" id="gal_date"><h1>'+dy[0]+' '+dy[1]+'</h1><p id="desc-1">'+res.gal[0].desc+'</p></div>');
						
						for (var i = res.gal.length - 1; i >= 0; i--) {
							var pos = i + 1;
							
							if(i === 0){
								fimg += '<img src="'+res.gal[i].image+'" alt="'+res.gal[i].alt+'" class="image_'+pos+'"/>';
							}else{
								fimg += '<img src="'+res.gal[i].image+'" alt="'+res.gal[i].alt+'" class="image_'+pos+'" style="display:none"/>';
							}

							timg += '<div class="thumb"><img onClick="changeDesc(\''+res.gal[i].desc+'\')" src="'+res.gal[i].image+'" id="thumb_'+pos+'" /></div>';

						}
						$('#fimg').replaceWith('<div class="content" id="fimg">'+fimg+'</div>');
						$('#timg').replaceWith('<div class="thumbnail" id="timg">'+timg+'</div>');

						$('#gallery').simplegallery({
							galltime : 400,
							gallcontent: '.content',
							gallthumbnail: '.thumbnail',
							gallthumb: '.thumb'
						});

					}else{
						alert('no se pudo obtener información de esta galería');
					}
				},
				error: function(){
					var title = 'NULL';
					var desc  = 'al parecer no tenemos avances en esta fecha';
					setError('modal', title, desc, 9000);
				}
			});
		}
	});

});
function changeDesc(desc){
	$('#desc-1').html(desc);
}