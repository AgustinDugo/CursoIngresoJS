/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	let valorUno;
	let valorDos;
	let resultado;

	valorUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	valorDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = valorUno + valorDos;

	alert(resultado);
}

