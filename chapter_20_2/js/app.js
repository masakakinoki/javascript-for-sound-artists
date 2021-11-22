    var audioContext = new AudioContext();
    var waveArray = new Float32Array(20);
    waveArray[0] = 100;
    waveArray[1] = 50;
    waveArray[2] = 10;
    waveArray[3] = 50;
    waveArray[4] = 10;
    waveArray[5] = 50;
    waveArray[6] = 10;
    waveArray[7] = 50;
    waveArray[8] = 10;
    waveArray[9] = 500;
    waveArray[10] = 50;
    waveArray[11] = 10;
    waveArray[12] = 50;
    waveArray[13] = 10;
    waveArray[14] = 500;
    waveArray[15] = 50;
    waveArray[16] = 10;
    waveArray[17] = 50;
    waveArray[18] = 10;
    waveArray[19] = 50;




    var osc = audioContext.createOscillator();
    var volume = audioContext.createGain();
    osc.frequency.value = 50;
    osc.frequency.setValueAtTime(osc.frequency.value, audioContext.currentTime); // Set initial values
    osc.frequency.setValueCurveAtTime(waveArray, audioContext.currentTime + 0, 2);
    osc.start(audioContext.currentTime);
    osc.connect(audioContext.destination);