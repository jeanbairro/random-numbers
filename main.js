function quadradoDoMeio(n) {
	for (var i = 0; i < 20; i++) {
		n *= n;
		n = parseInt(n/10);
		n = n%1000;
		console.log(n);
	}

	return n;
}

function congruenteLinear(a, b, m, n) {
	var resultado = n;
	for (var i = 0; i < 200; i++) {
		resultado = (a * resultado + b) % m;
		console.log(resultado);
	}

	return resultado;
}