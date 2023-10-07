document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerText = 'Pause Music';
        } else {
            audio.pause();
            playButton.innerText = 'Play Music';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter');
    const linesToType = [
        "I'm S Maheshwar,",
        "A Software Developer."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < linesToType.length) {
            if (charIndex < linesToType[lineIndex].length) {
                textElement.innerHTML += linesToType[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 150);
            } else {
                textElement.innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 150);
            }
        }
    }

    typeLine();
});