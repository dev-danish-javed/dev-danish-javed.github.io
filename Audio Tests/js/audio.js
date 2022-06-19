let audioIndex = 0;

let initializeAudioPlayer = () => {
   
    [...document.getElementsByClassName("audio-thumbnail")].forEach(thumbnail =>
        thumbnail.insertAdjacentHTML("afterbegin", '<img class="disk-image animate-opacity" src="./images/cd clipart.png" alt="">'));
    getAudio().addEventListener("timeupdate", setProgressBar);
    getAudio().addEventListener("ended", handleAudioEnd);
    setBackground();
    showAudioView();
    enableDisableButtons();
}
let getAudio=() => {
    return document.getElementsByClassName('audio-container')[audioIndex].getElementsByTagName('audio')[0];
}
let playAudio = () => {
    getAudio().play();
    setView();
    setProgressBar(true);
}
let pauseAudio = () => {
    getAudio().pause();
    showHideButtons();
    handleDiskRotation();
}
let stopAudio = () => {
    getAudio().load();
    showHideButtons();
    handleDiskRotation();
    setProgressBar(true);
}
let playPrevious = () => {
    stopAudio();
    audioIndex--;
    playAudio();
}
let playNext = () => {
    stopAudio();
    audioIndex++;
    playAudio();
}
let setBackground = () => {
    let thumbnail = document.getElementsByClassName('audio-container')[audioIndex].getElementsByClassName('audio-thumbnail')[0];
    let thumbnailImage = thumbnail.getElementsByClassName('thumbnail')[0].getAttribute('src');
    let cover = document.getElementById("thumbnailBlurLayer");
    cover.style.backgroundImage = "url('" + thumbnailImage + "')";
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
let setProgressBar = (flag) => {
    
    let audio = getAudio();
    document.getElementById('progressBar').value = "" + audio.currentTime * 100 / audio.duration;
    // if (flag === true) {
    //     let audio = getAudio();
    //     document.getElementById('progressBar').value =""+ audio.currentTime * 100 / audio.duration;
    // }
    // else {
    //     let audio = getAudio();
    //     document.getElementById('progressBar').value =""+ audio.currentTime * 100 / audio.duration;
    // }
    
    
    
}
let resetPreogressBar = () => {
    document.getElementById('progressBar').value = 0;
}
let progressBarSliderChanges = () => {
    let progress = document.getElementById('progressBar');
    let audio = getAudio();
    audio.currentTime = progress.value / 100 * audio.duration;
}
let setView = () => {
    setBackground();
    showAudioView();
    enableDisableButtons();
    showHideButtons();
    handleDiskRotation();
}
let handleDiskRotation = () => {
    if (getAudio().paused) {
        document.getElementsByClassName("disk-image")[audioIndex].classList.remove('rotate360');
    } else
        document.getElementsByClassName("disk-image")[audioIndex].classList.add('rotate360');

}
let handleAudioEnd = () => {
    setView();
}