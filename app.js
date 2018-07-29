
$(document).ready(function(){

	function Generatenumber(){
	// generar arreglo de números de 4 dígitos
		var	x = []
		    for (var i = 1000; i < 10000; i++) {
			x.push(i)
		 }	
		 return x;
	}

	function Norepeatnumber(x){
		// expresion regular para número cuatro dígitos{4} solamente sin repetición
		norepeat = /^(?!.*(\d).*\1)\d{4}$/;  

		// arreglo para guardar número de 4 dígitos sin repeticiones
		var	y=[];
		for (number of x) {
		    rst = norepeat.test(number);//comparación si es false es porque está repetido un dígito
		    if (rst==true){ 
		    y.push(number); 
		    }
		 }
		 return y;
	}

	function Aletorynumber(y){
		// obtención de elemento aleatorio
		// En JavaScript “Math.random” elige el número al azar 
		// y “Math.floor” hace que ese número sea un entero.
		var z=y.length;
		var w = Math.floor(Math.random()*z);

		// escoge un elemento del arreglo al azar
		return randownumber=y[w];
	}

	//Guardando en un objeto literal información del juego
	Game = {
		number:Aletorynumber(Norepeatnumber(Generatenumber())),
		randownumber:randownumber,
		//parte el número aleatorio de cuatro cifras y guarda cada dígito como un elemento en un arreglo
		//consideración especial: como el número de 4 cifras viene de un elemento de un arreglo
		// arraynumber: ("" + randownumber).split("")
		arraynumber: function(){return ("" + this.randownumber).split("");}
	};

 	//Llamado del atributo number del objeto Game que ejecuta las funciones
 	console.log(Game.number);
 	// console.log(Game.arraynumber());

	$('input').on('keyup',function(e){

		//replace solo permite ingresar números
		this.value = (this.value + '').replace(/[^0-9]/g, '');

		// detecta en el input cambio de estado y quita el color rojo una ves que:se le haya dado enter y que el número del input haya menor de 4 dígitos
		$('p span').removeClass('diferent');
		$('input').removeClass('alert alert-danger');
		$('#entrada').removeClass('diferent1');

		//Guardando en un objeto literal información del jugador
		Gamer ={
			number: $(this).val(),
			norepeat: function(){return norepeat.test(this.number);},
			arraynumber: function(){return this.number.split("");} //parte el número del input de cuatro cifras y guarda cada dígito como un elemento en un  arreglo
		}

		//Handelbars
		var template = Handlebars.compile($('#tablehandle').html());
		e.preventDefault();

		//presión de tecla enter
		if(e.keyCode == 13  ) {
			

			//si tiene la misma cantidad de dígitos que generado y además no tiene números repetidos
			if(Gamer.number.length == Game.arraynumber().length && Gamer.norepeat() == true){ 

				//quitar color rojo si no es número de 4 dígitos
				$('p span').removeClass('diferent');
				$('input').removeClass('alert alert-danger');
				$('#entrada').removeClass('diferent1');

				//cada ves que se le dá enter resetea los valores
				var fijas=0;
				var picas =0;

				//iteración - comparación picas y fijas donde x es la posición del arreglo value1
				for( var x in Gamer.arraynumber()){
				
					// al iterar se pasa a comparar cada valor de value1 y con el método indexOF con los valores de randownumber 
					// devuelve la posición donde encuentre el mismo valor, entre [0 a 3]
					// si no encuenta nada devuelve -1
					var posicion = Game.arraynumber().indexOf(Gamer.arraynumber()[x]);
					
					// si entra aquí es porque hay una coincidencia en las posiciones de [0 a 3]
						if( posicion >= 0) 
						{ 
						   if( posicion == x){fijas++;} // compara las posiciones si son la misma es una fija
						   else{picas++;} // como encontró algo y no tiene la misma posición es una pica
						}
				}

				//Objeto literal para guardar variables de los Handlebars
				var table = {
				numeros: Gamer.number,
				picas:picas,
				fijas:fijas
				};

				// inserta las variables en el handelbars del index
				$('#tbody').prepend(template(table));

				//limpiar input después del enter
				$(":text").each(function(){$($(this)).val('');});

				// Fin del juego, se muestra el modal una ves que haya encontrado n fijas de pendiendo de la longitud del número generado
				if (fijas==Game.arraynumber().length){
					jQuery.noConflict(); 
		            $('#myModal').modal('show'); 
		            $("input").prop('disabled', true);// deshabilita el input
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


