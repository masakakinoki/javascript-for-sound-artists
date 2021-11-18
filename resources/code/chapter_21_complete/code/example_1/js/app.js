    "use strict";

    $(function() {
        var audioContext = new AudioContext();
        var analyser = audioContext.createAnalyser();
        var osc = audioContext.createOscillator();
        var frequencyData = new Uint8Array(analyser.frequencyBinCount); //___Create array
        analyser.getByteFrequencyData(frequencyData); //______________________Store frequency data
        console.log(frequencyData.length);
        console.log(frequencyData);

        var app = $(".app");
        var bars = undefined;


        osc.frequency.value = 120;
        osc.connect(analyser);
        analyser.connect(audioContext.destination);
        osc.start(audioContext.currentTime);
        // analyser.fftSize = 64;
        console.log(analyser.frequencyBinCount); // 1024


        //________________________________BEGIN Visualization



        $(".bin-count-number").text(analyser.fftSize / 2); //____Bin count

        for (var i = 0; i < analyser.frequencyBinCount; i++) {

            $(".app").append("<div></div> <span>" + i + "</span>");
        }

        bars = $(".app > div");



        function update() {
            requestAnimationFrame(update);

            analyser.getByteFrequencyData(frequencyData);


            for (var i = 0; i < bars.length; i += 1) {

                bars[i].style.height = frequencyData[i] + 'px';



            }


        }

        update();

        //_______________________________END visualization

    });