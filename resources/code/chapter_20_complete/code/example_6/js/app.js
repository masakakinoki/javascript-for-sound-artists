	var audioContext = new AudioContext();

	var osc = audioContext.createOscillator();
	var volume = audioContext.createGain();
	osc.frequency.value = 200;
	osc.frequency.setValueAtTime(osc.frequency.value, audioContext.currentTime); // Set initial values
	osc.frequency.setTargetAtTime(3000, audioContext.currentTime, 2);
	osc.start(audioContext.currentTime);
	osc.connect(audioContext.destination);