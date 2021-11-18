var audioContext = new AudioContext();
var audioBuffer;
var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/snare.mp3", true);
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        audioBuffer = buffer;
    });
};

getSound.send();


function playback() {
    var playSound = audioContext.createBufferSource();
    playSound.buffer = audioBuffer;
    playSound.connect(audioContext.destination);
    playSound.start(audioContext.currentTime);
}
window.addEventListener("mousedown", playback);