let audioIndex = 0;

let initializeAudioPlayer = () => {
    showAudioView();
    enableDisableButtons();
}
let getAudio=() => {
    return document.getElementsByClassName('audio-container')[audioIndex].getElementsByTagName('audio')[0];
}
let playAudio = () => {
    stopAudio();
    getAudio().play();
    setView();
}
let pauseAudio = () => {
    getAudio().pause();
    showHideButtons();
}
let stopAudio = () => {
    getAudio().load();
    showHideButtons();
}
let playPrevious = () => {
    pauseAudio();
    audioIndex--;
    playAudio();
}
let playNext = () => {
    pauseAudio();
    audioIndex++;
    playAudio();
}
let setBackground = () => {
    let thumbnail = document.getElementsByClassName('audio-container')[audioIndex].getElementsByClassName('audio-thumbnail')[0];
    let thumbnailImage = thumbnail.getElementsByTagName('img')[0].getAttribute('src');
    document.body.style.backgroundImage = "url('" + thumbnailImage + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "round";
    document.body.style.backgroundClip = "padding-box";
    document.body.style.backdropFilter = "blur(10px)";
}
let showAudioView = () => {
    [...document.getElementsByClassName('audio-container')].forEach(audio => {
        audio.classList.add('hidden');
    });
    document.getElementsByClassName('audio-container')[audioIndex].classList.remove('hidden');
}
let enableDisableButtons = () => {
    document.getElementById('playNextButton').disabled = false;
    document.getElementById('playPreviousButton').disabled = false;

    if (audioIndex == 0) {
        document.getElementById('playPreviousButton').disabled = true;
    }
    else if (audioIndex == document.getElementsByClassName('audio-container').length-1) {
        document.getElementById('playNextButton').disabled = true;
    }
}
let showHideButtons=() => {
    if(getAudio().paused) {
        document.getElementById('playButton').classList.remove('hidden');
        document.getElementById('pauseButton').classList.add('hidden');
    } 
    else {
        document.getElementById('playButton').classList.add('hidden');
        document.getElementById('pauseButton').classList.remove('hidden');
    }
}
let setView = () => {
    setBackground();
    showAudioView();
    enableDisableButtons();
    showHideButtons();
}