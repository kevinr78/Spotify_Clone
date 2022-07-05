const audio = document.querySelector("audio");
const SEEKSLIDER = document.getElementById("seek-slider");
const VOLUMESLIDER = document.getElementById("volume-slider");
const seekSliderContainer = document.getElementById("seek-slider-container");
const volumeIcon = document.getElementById("volume-icon");
const CURRENTTIME = document.getElementById("current-time");
const PLAY = document.getElementById("Play");
const PAUSE = document.getElementById("Pause");
isPlaying = false;
isMuted = false;

/* Display Audio Duration */

function displayAudioDuration(duration) {
  document.getElementById("total-duration").innerHTML = calculateTime(duration);
}

function calculateTime(secs) {
  let mins = Math.floor(secs / 60);
  let seconds = Math.floor(secs % 60);
  let calculatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${mins}:${calculatedSeconds}`;
}

if (audio.readyState > 0) {
  displayAudioDuration(audio.duration);
  SEEKSLIDER.max = Math.floor(audio.duration);
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayAudioDuration(audio.duration);
    SEEKSLIDER.max = Math.floor(audio.duration);
  });
}

/* Updating Slider Values */

SEEKSLIDER.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});

VOLUMESLIDER.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
  showRangeProgress(e.target);
  if (audio.volume === 0) {
    document.getElementById("mute-volume").style.display = "block";
  } else {
    document.getElementById("mute-volume").style.display = "none";
  }
});

function showRangeProgress({ name, value }) {
  if (name === "seek-slider") {
    SEEKSLIDER.value = audio.currentTime;
    audio.currentTime = (audio.duration * value) / 100;
    CURRENTTIME.textContent = calculateTime(audio.currentTime);
  } else {
    audio.volume = VOLUMESLIDER.value / 100;
  }
}

/* Play Song */
document
  .getElementById("play-pause-container")
  .addEventListener("click", () => {
    if (isPlaying == false) {
      audio.play();
      isPlaying = true;
      updatePlayPauseIcon();
    } else {
      audio.pause();
      isPlaying = false;
      updatePlayPauseIcon();
    }
  });

SEEKSLIDER.addEventListener("change", () => {
  audio.currentTime = SEEKSLIDER.value;
});

audio.addEventListener("timeupdate", () => {
  SEEKSLIDER.value = Math.floor(audio.currentTime);
  CURRENTTIME.textContent = calculateTime(audio.currentTime);
});

volumeIcon.addEventListener("click", (e) => {
  if (!isMuted) {
    audio.muted = true;
    isMuted = true;
    adjustVolume();
  } else {
    audio.muted = false;
    isMuted = false;
    adjustVolume();
  }
});

function updatePlayPauseIcon() {
  if (isPlaying) {
    document.getElementById("Pause").style.display = "block";
    document.getElementById("Play").style.display = "none";
  } else {
    document.getElementById("Play").style.display = "block";
    document.getElementById("Pause").style.display = "none";
  }
}

function adjustVolume() {
  if (isMuted) {
    audio.volume = 0;
    VOLUMESLIDER.value = 0;
    document.getElementById("mute-volume").style.display = "block";
  } else {
    audio.volume = 75;
    VOLUMESLIDER.value = 75;
    document.getElementById("mute-volume").style.display = "none";
  }
}
