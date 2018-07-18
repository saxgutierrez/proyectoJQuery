$('input').on('keyup',function(e){

	//valor del input, detecta el cambio de estado, solo permite ingresar números
	this.value = (this.value + '').replace(/[^0-9]/g, '');

	// detecta en el input cambio de estado y quita el color rojo una ves que:
	// se le haya dado enter y que el número del input haya menor de 4 dígitos

	$('p span').removeClass('diferent');
	$('input').removeClass('alert alert-danger');
	$('#entrada').removeClass('diferent1');

	//guarda información del input
	var value = $(this).val();

	// generación de número aleatorio de 4 dígitos no repetidos

	//Handelbars
	var template = Handlebars.compile($('#tablehandle').html());
	e.preventDefault();

	//presión de tecla enter
	if(e.keyCode == 13  ) {

		// //mostrar modal de juego ganado
		// jQuery.noConflict(); 
		// $('#myModal').modal('show'); 
		   
		// si tiene número de 4 dígitos
		if(value.length == 4){ // falta la condición de que si tiene número repetidos no pase

			//quitar color rojo si no es número de 4 dígitos
			$('p span').removeClass('diferent');
			$('input').removeClass('alert alert-danger');
			$('#entrada').removeClass('diferent1');


			//falta hacer las comparaciones de las picas y las fijas
			var game = {
			numeros: value,
			picas:"falta validar",
			fijas:"falta validar"
			};

			// pasa las variables con sus respectivos valores al handelbars del index
	   		 $('#tbody').prepend(template(game));


		    //limpiar input después del enter
		    $(":text").each(function(){	
					$($(this)).val('');
			});
		}
			//Agregar color rojo si no es número de 4 dígitos
		  else if(value.length < 4){

			$('p span').addClass('diferent');
			$('input').addClass('alert alert-danger');
			$('#entrada').addClass('diferent1');
			
		  }

	
	}

});





