function QuadradoDoMeio() {
	this.calcular = function(x) {
		x *= x;
		x = parseInt(x/10);
	
		return x % 1000;
	}

	this.testar = function(x) {
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

	this.testar = function(x){
		for (var i = 0; i < 500; i++) {
			console.log(x);
			x = this.calcular();
		}
	}
}

function AtrasoDeFibonacci() {
	this.calcular = function(x0, x1) {
		return x0 %  x1; 
	}

	this.testar = function(){
		for (var i = 0; i < 500; i++) {
		
		}
	}
}