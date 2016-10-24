/* Conecta com a API de áudio HTML5 */
function getAudio() {
	if (!navigator.getUserMedia)
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia || navigator.msGetUserMedia;

	if (navigator.getUserMedia){
	    navigator.getUserMedia({ audio: true }, success, function(e) {
	    	alert('Erro ao e capturar áudio.');
	    });
	} else {
		alert('Recurso não suportado pelo HTML5');
	}
}

function success(e){
    audioContext = window.AudioContext || window.webkitAudioContext;
    context = new audioContext();

    sampleRate = context.sampleRate;

    volume = context.createGain();

    audioInput = context.createMediaStreamSource(e);

    audioInput.connect(volume);

    var bufferSize = 256;
    recorder = context.createScriptProcessor(bufferSize, 2, 2);

    var i = 0;
    recorder.onaudioprocess = function(ev) {
        var left = ev.inputBuffer.getChannelData (0);
        var right = ev.inputBuffer.getChannelData (1);

        var x = left.reduce(soma, 0);

		var dataHoje = new Date();

		while (dataHoje.getMilliseconds() == 0) {
			dataHoje = new Date();		
		}

		if (i > 100) {
			console.log(parseInt(x/dataHoje.getMilliseconds() * 10000));
		}

        if (i == 600) {
        	recorder.disconnect();
        }

        i++;
    }

    volume.connect (recorder);
    recorder.connect (context.destination);
}

function soma(a, b) {
    return Math.abs(a) + Math.abs(b);
}

getAudio();