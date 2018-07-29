 number = "1234" // dato de ingreso

 norepeat = /^(?!.*(\d).*\1)\d{4}$/; // de cuatro dígitos{4} solamente

 resultado = norepeat.test(number);  // el number puede ser string o arreglo sirve de todas formas

 console.log(number, resultado); // muestra el numero, el resultado muestra false si está repetido
 
 // => 1234 true
