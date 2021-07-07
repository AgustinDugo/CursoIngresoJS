/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

let sueldo;
let descuento;

function mostrarAumento()
{
	sueldo = parseInt(document.getElementById("txtIdImporte").value);
	descuento = sueldo * 25 / 100;
	document.getElementById("txtIdResultado").value = sueldo - descuento;
}
