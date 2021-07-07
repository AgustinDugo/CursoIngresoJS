function mostrar()
{
	let nota;

	nota = Math.floor(Math.random() * (10 -1)+1);


	if(nota == 9 || nota == 10 ) {
		alert("Exelente: " + nota);
	}
	else 
	if (nota >=4){
		alert("Aprobo: " + nota);
	}
	else(nota <4)
	{
		alert("Vamos, la proxima se puede: " + nota );
	}


}//FIN DE LA FUNCIÓN