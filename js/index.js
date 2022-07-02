const audio = document.querySelector("audio");
const SEEKSLIDER = document.getElementById("seek-slider");
const VOLUMESLIDER = document.getElementById("volume-slider");
const seekSliderContainer = document.getElementById("seek-slider-container");
const volumeControlContainer = document.getElementById(
  "volume-control-container"
);
const CURRENTTIME = document.getElementById("current-time");
const PLAY = document.getElementById("Play");
const PAUSE = document.getElementById("Pause");
isPlaying = false;
isMuted = false;

document.getElementById("Play").onclick = () => {
  document.getElementById("Pause").style.display = "block";
  document.getElementById("Play").style.display = "none";
};

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
    } else {
      audio.pause();
      isPlaying = false;
    }
  });

SEEKSLIDER.addEventListener("change", () => {
  audio.currentTime = SEEKSLIDER.value;
});

audio.addEventListener("timeupdate", () => {
  SEEKSLIDER.value = Math.floor(audio.currentTime);
  CURRENTTIME.textContent = calculateTime(audio.currentTime);
});

volumeControlContainer.addEventListener("click", () => {
  if (!isMuted) {
    audio.muted = true;
    isMuted = true;
  } else {
    audio.muted = false;
    isMuted = false;
  }
});
