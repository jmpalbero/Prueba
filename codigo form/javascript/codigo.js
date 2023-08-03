

function mostrarDatos(){
	let nombreyApellidos="Nombre: "+datosPersonales.nombre.value+"\n";
	nombreyApellidos +="Apellidos: "+datosPersonales.apellidos.value;

	let emailyContraseña="Email: "+datosPersonales.email.value+"\n";
	emailyContraseña +="Contraseña: "+datosPersonales.contraseña.value;

	
	alert(mensajeFinal);

    console.log (mensajeFinal);
}