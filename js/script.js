function validarFormulario() {
	var verificar = true;
	var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	var expRegPais = /^[a-záéíóúñ\s]*$/i;
	var expRegEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
	var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
	var expRegTelefono = /^([0-9]\s*)*$/;
	var formulario = document.getElementById("formulario");
	var nombres = document.getElementById("nombres");
	var direccion = document.getElementById("direccion");
	var pais = document.getElementById("pais");
	var email = document.getElementById("email");
	var webSite = document.getElementById("web-site");
	var telefono = document.getElementById("telefono");
	var comentario = document.getElementById("comentario");
	if (nombres.value.length <=4)  {
		alert("Escriba sus nombres por favor.");
		nombres.focus();
		verificar = false;
		return false;
	}
	else if (nombres.value.split(" ").length < 2) {
		alert("Escriba sus nombres completos por favor.");
		nombres.focus();
		verificar = false;
		return false;
	}
	else if (!expRegNombres.exec(nombres.value)) {
		alert("Este campo admite letras de la a-z y no admite espacios en blanco al final.");
		nombres.focus();
		verificar = false;
		return false;
	}
	else if (direccion.value.length <=8) {
		alert("Escriba su dirección por favor.");
		direccion.focus();
		verificar = false;
		return false;
	}
	else if (pais.value.length <=3) {
		alert("Escriba el nombre del país por favor.");
		pais.focus();
		verificar = false;
		return false;
	}
	else if (!expRegPais.exec(pais.value)) {
		alert("Escriba de que país nos visita sin números ni caracteres especiales como [+ * , . - _ { } ...].");
		pais.focus();
		verificar = false;
		return false;
	}
	else if (email.value.length <=8) {
		alert("Escriba su email por favor.");
		email.focus();
		verificar = false;
		return false;
	}
	else if (!expRegEmail.exec(email.value)) {
		alert("Escriba un email valido por favor.");
		email.focus();
		verificar = false;
		return false;
	}
	else if ((webSite.value != "") && !expRegUrl.exec(webSite.value)) {
		alert("Escriba un formato de sitio web valido por favor.");
		webSite.focus();
		verificar = false;
		return false;
	}
	else if (telefono.value.length <=9) {
		alert("Escriba un número de teléfono por favor.");
		telefono.focus();
		verificar = false;
		return false;
	}
	else if (!expRegTelefono.exec(telefono.value)) {
		alert("el campo teléfono admite números y espacios en blanco.");
		telefono.focus();
		verificar = false;
		return false;
	}
	else if (!comentario.value) {
		alert("el campo comentarios es requerido");
		comentario.focus();
		verificar = false;
		return false;
	}
	else if (comentario.value.length > 1000) {
		alert("El campo comentarios no puede tener mas de 1000 caracteres.");
		comentario.focus();
		verificar = false;
		return false;
	}

	if (verificar == true) {
		document.formulario.submit();
	}
}
function limpiarFormulario() {
	document.getElementById("formulario").reset();
}
function calcular() {
	var contadorChar = document.getElementById("contador-char").innerHTML = 1000 - document.formulario.comentario.value.length;
}
window.onload = function () {
	var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarFormulario;
	var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick = validarFormulario;
}

