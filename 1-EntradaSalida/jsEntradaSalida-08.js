/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
let valorUno;
let valorDos;
let resto;

function SacarResto()
{	
	valorUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = valorUno % valorDos;
	
	alert("El resto es: " + resto);
}
