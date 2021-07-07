function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad > 17){
		alert("Es mayor de edad");
	}
	else{
		alert("No es mayor");
	}
}//FIN DE LA FUNCIÓN