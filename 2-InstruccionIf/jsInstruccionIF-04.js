function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad > 12 & edad < 18){
		alert("Es adolecente")
	}
	else{
		alert("No es adolecente")
	}
}//FIN DE LA FUNCIÓN