function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}

function getRandomChar(number, lower, upper, other) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
	var charSet = '';
	if (number == true)
		charSet += numberChars;
	if (lower == true)
		charSet += lowerChars;
	if (upper == true)
		charSet += upperChars;
	if (other == true)
		charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
}

function getPassword(length, latterNumber, latterLower, latterUpper, latterOther) {
	var rc = "";
	for (var idx = 1; idx <= length; ++idx) {
		rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther);
	}
	return rc;
}

document.getElementById("gerar").addEventListener("touchstart", function(){
	gerarSenha();
});

document.getElementById("gerar-barra").addEventListener("touchstart", function(){
	gerarSenha();
});

function gerarSenha(){
	var numeros = document.getElementById("numeros");
	numeros = numeros.classList.contains('active');
	var simbolos = document.getElementById("simbolos");
	simbolos = simbolos.classList.contains('active');
	var letras_maiusculas = document.getElementById("letras-maiusculas");
	letras_maiusculas = letras_maiusculas.classList.contains('active');
	var letras_minusculas = document.getElementById("letras-minusculas");
	letras_minusculas = letras_minusculas.classList.contains('active');
	if(!numeros && !simbolos && !letras_minusculas && !letras_maiusculas){
		alert('Choose a type of character to generate the password!');
		document.getElementById("senha").value = '';
		return false;
	}
	else if(document.getElementById("tamanho").value <= 0){
		alert('Select a number of characters greater than 0!');
		return false;
	}
	else if(document.getElementById("tamanho").value > 1000){
		alert('Choose an amount of less than 1000 characters!');
		return false;
	}
    document.getElementById("senha").value = getPassword(document.getElementById("tamanho").value,numeros,letras_minusculas,letras_maiusculas,simbolos);
}