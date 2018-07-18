$(document).ready(function(){

			// generar arreglo de números de 4 dígitos
			var	x = []
			    for (var i = 1000; i < 10000; i++) {
			    	x.push(i)
			    }

			// expresion regular para número cuatro dígitos{4} solamente sin repetición
			var norepeat = /^(?!.*(\d).*\1)\d{4}$/;  

			//arreglo para guardar número de 4 dígitos sin repeticiones
			var	y=[];
				for (number of x) {
				    rst = norepeat.test(number);
				    if (rst==true){ 
				    y.push(number); 
					}
				}

			//obtención de elemento aleatorio
			//En JavaScript “Math.random” elige el número al azar y “Math.floor” hace que ese número sea un entero.
			var z=y.length;
			var w = Math.floor(Math.random()*z);
			var randownumber=y[w];
			console.log(randownumber); // muestra en consola el número en la página


		$('input').on('keyup',function(e){

			//valor del input, detecta el cambio de estado, solo permite ingresar números
			this.value = (this.value + '').replace(/[^0-9]/g, '');

			// detecta en el input cambio de estado y quita el color rojo una ves que:se le haya dado enter y que el número del input haya menor de 4 dígitos
			$('p span').removeClass('diferent');
			$('input').removeClass('alert alert-danger');
			$('#entrada').removeClass('diferent1');

			//guarda información del input
			var value = $(this).val();

			// determina si no hay número repetidos devuelve true
			var resultado = norepeat.test(value);

			//Handelbars
			var template = Handlebars.compile($('#tablehandle').html());
			e.preventDefault();

			//presión de tecla enter
			if(e.keyCode == 13  ) {
			   
				// si tiene número de 4 dígitos y además no tiene números repetidos
				if(value.length == 4 && resultado == true){ 

					//quitar color rojo si no es número de 4 dígitos
					$('p span').removeClass('diferent');
					$('input').removeClass('alert alert-danger');
					$('#entrada').removeClass('diferent1');

					// VALIDACIONES DE PICAS Y FIJAS

					var picas="";
					var fijas="";

					//variables de los Handlebars
					var game = {
					numeros: value,
					picas:picas,
					fijas:fijas
					};

					// inserta las variables en el handelbars del index
			   		 $('#tbody').prepend(template(game));


				    //limpiar input después del enter
				    $(":text").each(function(){	
							$($(this)).val('');
					});

					// Fin del juego, se muestra el modal una ves que haya encontrado 4 fijas
					if (fijas==4){
					jQuery.noConflict(); 
					$('#myModal').modal('show'); 
					$("input").prop('disabled', true); // deshabilita el input
					}
					

				}
					//Agregar color rojo si no es número de 4 dígitos y si tiene números repetidos
				  else {

					$('p span').addClass('diferent');
					$('input').addClass('alert alert-danger');
					$('#entrada').addClass('diferent1');
					
				  }

			
			}

		});
});


