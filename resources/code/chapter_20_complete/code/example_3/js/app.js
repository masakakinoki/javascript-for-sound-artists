	var audioContext = new AudioContext();

	var osc = audioContext.createOscillator();
	var volume = audioContext.createGain();

	osc.connect(volume);
	volume.gain.value = 1;
	volume.gain.setValueAtTime(0.1, 3);

	osc.start(audioContext.currentTime);

	volume.connect(audioContext.destination);