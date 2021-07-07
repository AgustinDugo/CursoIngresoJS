function mostrar()
{
	//tomo el mes
	let mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("A clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case"Diciembre":
			alert("Felices Fiestas");
		default:
			alert("Ingrese otro mes");
			break;
	}






}//FIN DE LA FUNCIÓN