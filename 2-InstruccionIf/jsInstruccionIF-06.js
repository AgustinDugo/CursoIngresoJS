function mostrar()
{
	let edad;
    edad = document.getElementById("txtIdEdad").value;
	
    if (edad < 13){
        alert("Menor de 13 años");
    } 
	else
	if(edad > 17){
		alert("Es mayor de edad");
	}
	else
{
	alert("Es adolecente")
}



}//FIN DE LA FUNCIÓN