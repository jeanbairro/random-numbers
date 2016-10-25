function QuadradoDoMeio() {
	this.calcular = function(x) {
		x *= x;
		x = parseInt(x/10);
	
		return x % 1000;
	}

	this.testar = function() {
		var x = 121;

		for (var i = 0; i < 500; i++) {
			console.log(x);
			x = this.calcular(x);
		}
	}
}

function CongruenteLinear() {
	this.calcular = function(a, b, m, x) {
		return (a * x + b) % m;
	}

	this.testar = function() {
		var x = 1; 
		var a = 5;
		var b = 1;
    	var m = 16;

		for (var i = 0; i < 500; i++) {
			console.log(x);
			x = this.calcular(a, b, m, x);
		}
	}
}

function AtrasoDeFibonacci() {
	this.calcular = function(x0, x1) {
		return x0 %  x1; 
	}

	this.testar = function() {
		var x0 = 128;
		var x1 = 509;
		var x = 121;

		for (var i = 0; i < 500; i++) {
			console.log(x);
			x = this.calcular(x0, x1);
			x0 = x1;
			x1 = x;
		}
	}
}

function AtrasoDeFibonacciV2() {
	this.calcular = function(x0, x1, x) {
		return (x0 * x) % x1; 
	}

	this.testar = function() {
		var x0 = 128;
		var x1 = 509;
		var x = 121;

		for (var i = 0; i < 500; i++) {
			console.log(x);
			x = this.calcular(x0, x1, x);
			x0 = x1;
			x1 = x;
		}
	}
}