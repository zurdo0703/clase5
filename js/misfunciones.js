
function __(id) {
	var id = document.getElementById(id);
	return id;
}

function Confirmar() {
	var ValidarForm = ValidarCampos();
	if (ValidarForm) {
		var Confirmar = confirm("Esta seguro que desea continuar.");
		if (Confirmar) {
			var Formulario = __('formLogeo');
			Formulario.submit();
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function ValidarCampos() {
	var nombre = __('nombre').value;
	var apellido = __('apellido').value;
	var foto = __('foto').value;
	var materia = __('materia').selectedIndex;
	var repitente = document.getElementsByName('repitente');
	var observacion = __('observacion').value;

	var seleccionado = false;
	for (var i = 0; i < repitente.length; i++) {
		if (repitente[i].checked) { seleccionado = true; break; }
	}

	if (nombre == null || nombre.length == 0) {
		alert("Nombre Vacio");
		__('nombre').focus();
		return false;
	} else if (apellido == null || apellido.length == 0) {
		alert("Apellido Vacio");
		__('apellido').focus();
		return false;	
	} else if (foto == null || foto.length == 0) {
		alert("La foto no se ha elegido");
		__('foto').focus();
		return false;	
	} else if (materia == null || materia == 0) {
		alert("No ha elegido una materia");
		__('materia').focus();
		return false;	
	} else if (!seleccionado) {
		alert("Se debe elegir una opcion");
		__('repitente1').focus();
		return false;	
	} else if (observacion == null || observacion.length == 0 || /^\s+$/.test(observacion)) {
		alert("Las observaciones estan Vacias");
		__('observacion').focus();
		return false;	
	} 
	return true;
}


function Cancelar() {
	location.href = "http://www.google.com";
}
