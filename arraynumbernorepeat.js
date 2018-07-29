// generar arreglo de números de 4 dígitos
	pruebas = []
    for (var i = 1000; i < 10000; i++) {
    	pruebas.push(i)
    }

// expresión regular para números no repetidos de 4 dígitos
		re = /^(?!.*(\d).*\1)\d{4}$/;

//arreglo para guardar número de 4 dígitos sin repeticiones
		array=[];
		for (prueba of pruebas) {
		    resultado = re.test(prueba);
		    if (resultado==true){ 
		    array.push(prueba); 
		    
			}
		}
//elige un elemento aleatorio
		var z=array.length;
		var w = Math.floor(Math.random()*z);
		var randownumber=array[w];

// imprimir elemento
		console.log(randownumber)

// imprimir elemento convertido en array		
		console.log((""+randownumber).split(""));

