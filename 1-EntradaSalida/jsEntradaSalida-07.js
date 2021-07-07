/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

let valorUno;
let valorDos;
let resultado;

function sumar()
{	valorUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = valorUno + valorDos;

	alert("La suma es: " + resultado);	
}

function restar()
{	
	valorUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = valorUno - valorDos;
	
	alert("La resta es: " + resultado);	
	
}

function multiplicar()
{	
	valorUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = valorUno * valorDos;
	
	alert("La multiplicacion es: " + resultado);	
	
}

function dividir()
{
	valorUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = valorUno / valorDos;
	
	alert("La division es: " + resultado);	
}

