str="1233";

console.log((str).replace(/^(?!.*(\d).*\1)\d{4}$/g, '')); //devuelve los números que tienen repetición de dígitos

