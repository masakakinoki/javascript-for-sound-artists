    var audioContext = new AudioContext();
    var waveArray = new Float32Array(10);
    waveArray[0] = 100;
    waveArray[1] = 500;
    waveArray[2] = 100;
    waveArray[3] = 500;
    waveArray[4] = 100;
    waveArray[5] = 500;
    waveArray[6] = 100;
    waveArray[7] = 500;
    waveArray[8] = 100;
    waveArray[9] = 500;




    var osc = audioContext.createOscillator();
    var volume = audioContext.createGain();
    osc.frequency.value = 500;
    osc.frequency.setValueAtTime(osc.frequency.value, audioContext.currentTime); // Set initial values
    osc.frequency.setValueCurveAtTime(waveArray, audioContext.currentTime + 1, 3);
    osc.start(audioContext.currentTime);
    osc.connect(audioContext.destination);