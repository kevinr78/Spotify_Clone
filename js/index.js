const AUDIOTRACK = document.getElementById("audio-track");
const SONGAUDIO = document.getElementById("song");
const BUFFEREDAMOUNT = SONGAUDIO.buffered.end(SONGAUDIO.buffered.length - 1);
const SEEKABLEAMOUNT = SONGAUDIO.seekable.end(SONGAUDIO.seekable.length - 1);

document.getElementById("Play").onclick = () => {
  document.getElementById("Pause").style.display = "block";
  document.getElementById("Play").style.display = "none";
};

/* Display Audio Duration */

function displayAudioDuration(duration) {
  document.getElementById("end-time").innerHTML = calculateTime(duration);
}

function calculateTime(secs) {
  let mins = Math.floor(secs / 60);
  let seconds = Math.floor(secs % 60);
  let calculatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${mins}:${calculatedSeconds}`;
}

if (SONGAUDIO.readyState > 0) {
  displayAudioDuration(SONGAUDIO.duration);
  AUDIOTRACK.max = Math.floor(SONGAUDIO.duration);
} else {
  SONGAUDIO.addEventListener("loadedmetadata", () => {
    displayAudioDuration(SONGAUDIO.duration);
    AUDIOTRACK.max = Math.floor(SONGAUDIO.duration);
  });
}

/* function displayBufferedAmount(){
  let audioTrackContainer = document.getElementById('audio-track-container')

  audioTrackContainer.style.setProperty('--buffered-wid')
}
SONGAUDIO.addEventListener("progress", displayBufferedAmount);
 */
