const audio = document.querySelector("audio");
const SEEKSLIDER = document.getElementById("seek-slider");
const VOLUMESLIDER = document.getElementById("volume-slider");
const seekSliderContainer = document.getElementById("seek-slider-container");
const volumeIcon = document.getElementById("volume-icon");
const CURRENTTIME = document.getElementById("current-time");
const TOTALDURATION = document.getElementById("total-duration");
const PLAY = document.getElementById("Play");
const PAUSE = document.getElementById("Pause");
const SONGNAME = document.getElementById("song-name");
const ARTIST = document.getElementById("song-artist");
isPlaying = false;
isMuted = false;
let trackIndex = 1;
let songs = [
  {
    id: "1",
    songName: "Weightless",
    byArtist: "All Time Low",
    location: "../assets/songs/All Time Low - Weightless.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "2",
    songName: "Dear Maria, Count Me in",
    byArtist: "All Time Low",
    location: "../assets/songs/All Time Low - Dear Maria, Count Me In.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "3",
    songName: "Beautiful",
    byArtist: "Bazzi feat. Camila Cabello",
    location: "../assets/songs/Bazzi feat. Camila Cabello - Beautiful.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:15",
  },
  {
    id: "4",
    songName: "What Would I Change It To  ",
    byArtist: "Avicii ft. AlunaGeorge",
    location:
      "../assets/songs/Avicii - What Would I Change It To  ft. AlunaGeorge.mp3",
    isFavourite: "true",
    playlist: [],
    duration: "3:06",
  },
  {
    id: "5",
    songName: "All The Small Things",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - All The Small Things.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "2:50",
  },
  {
    id: "6",
    songName: "First Date",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - First Date.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "7",
    songName: "I Miss You",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - I Miss You.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:50",
  },
  {
    id: "8",
    songName: "Crash My Car",
    byArtist: "COIN",
    location: "../assets/songs/COIN - Crash My Car.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:09",
  },
  {
    id: "9",
    songName: "Run",
    byArtist: "COIN",
    location: "../assets/songs/COIN - RUN.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:42",
  },
  {
    id: "10",
    songName: "New",
    byArtist: "Daya",
    location: "../assets/songs/Daya - New.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "4:00",
  },
  {
    id: "11",
    songName: "San Francisco",
    byArtist: "Galantis ft. Sofia Carson",
    location: "../assets/songs/Galantis - San Francisco feat. Sofia Carson.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "2:50",
  },
  {
    id: "12",
    songName: "Cigarette Daydreams",
    byArtist: "Cage The Elephant",
    location: "../assets/songs/Cigarette Daydreams - Cage the Elephant.mp3",
    isFavourite: "false",
    playlist: [],
    duration: "3:29",
  },
];

loadTrack(1);

function calculateTime(secs) {
  let mins = Math.floor(secs / 60);
  let seconds = Math.floor(secs % 60);
  let calculatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${mins}:${calculatedSeconds}`;
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

function playSong() {
  let playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        updatePlayPauseIcon();
      })
      .catch((err) => {
        return;
      });
  }
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayPauseIcon();
}
document
  .getElementById("play-pause-container")
  .addEventListener("click", () => {
    if (isPlaying == false) {
      playSong();
    } else {
      pauseSong();
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
    audio.volume = 0.75;
    VOLUMESLIDER.value = 75;
    document.getElementById("mute-volume").style.display = "none";
  }
}

function displaySongDetails(duration) {
  SONGNAME.textContent = songs[trackIndex].songName;
  ARTIST.textContent = songs[trackIndex].byArtist;
  TOTALDURATION.textContent = calculateTime(duration);
}

function loadTrack(trackIndex) {
  resetValues();
  audio.load();
  audio.src = songs[trackIndex].location;
  audio.onloadedmetadata = () => {
    SEEKSLIDER.max = Math.floor(audio.duration);
    displaySongDetails(audio.duration);

    playSong();
  };
}

loadTrack(1);
function resetValues() {
  SONGNAME.textContent = "";
  ARTIST.textContent = "";
  SEEKSLIDER.value = 0;
  TOTALDURATION.textContent = "0:00";
  CURRENTTIME.textContent = "0:00";
}
