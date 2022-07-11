const audio = document.querySelector("audio");
const SEEKSLIDER = document.getElementById("seek-slider");
const VOLUMESLIDER = document.getElementById("volume-slider");
const seekSliderContainer = document.getElementById("seek-slider-container");
const PLAYPAUSEICONS = document.getElementById("play-pause-container");
const volumeIcon = document.getElementById("volume-icon");
const CURRENTTIME = document.getElementById("current-time");
const TOTALDURATION = document.getElementById("total-duration");
const PLAY = document.getElementById("Play");
const PAUSE = document.getElementById("Pause");
const NEXT = document.getElementById("next-track");
const PREVIOUS = document.getElementById("previous-track");
const SONGNAME = document.getElementById("song-name");
const ARTIST = document.getElementById("song-artist");
const songRow = document.getElementsByTagName("tbody")[0].children;
console.log(songRow);
isPlaying = false;
isMuted = false;
let trackIndex = 0;

let songs = [
  {
    id: "0",
    songName: "Weightless",
    byArtist: "All Time Low",
    location: "../assets/songs/All Time Low - Weightless.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "1",
    songName: "Dear Maria, Count Me in",
    byArtist: "All Time Low",
    location: "../assets/songs/All Time Low - Dear Maria, Count Me In.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "2",
    songName: "Beautiful",
    byArtist: "Bazzi feat. Camila Cabello",
    location: "../assets/songs/Bazzi feat. Camila Cabello - Beautiful.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:15",
  },
  {
    id: "3",
    songName: "What Would I Change It To  ",
    byArtist: "Avicii ft. AlunaGeorge",
    location:
      "../assets/songs/Avicii - What Would I Change It To  ft. AlunaGeorge.mp3",
    isFavourite: "true",
    iPlayinge: "true",
    playlist: [],
    duration: "3:06",
  },
  {
    id: "4",
    songName: "All The Small Things",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - All The Small Things.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "2:50",
  },
  {
    id: "5",
    songName: "First Date",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - First Date.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:37",
  },
  {
    id: "6",
    songName: "I Miss You",
    byArtist: "Blink-182",
    location: "../assets/songs/blink-182 - I Miss You.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:50",
  },
  {
    id: "7",
    songName: "Crash My Car",
    byArtist: "COIN",
    location: "../assets/songs/COIN - Crash My Car.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:09",
  },
  {
    id: "8",
    songName: "Run",
    byArtist: "COIN",
    location: "../assets/songs/COIN - RUN.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:42",
  },
  {
    id: "9",
    songName: "New",
    byArtist: "Daya",
    location: "../assets/songs/Daya - New.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "4:00",
  },
  {
    id: "10",
    songName: "San Francisco",
    byArtist: "Galantis ft. Sofia Carson",
    location: "../assets/songs/Galantis - San Francisco feat. Sofia Carson.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "2:50",
  },
  {
    id: "11",
    songName: "Cigarette Daydreams",
    byArtist: "Cage The Elephant",
    location: "../assets/songs/Cigarette Daydreams - Cage the Elephant.mp3",
    isFavourite: "false",
    isPlaying: "false",
    playlist: [],
    duration: "3:29",
  },
];

loadTrack(0);

/* Display calculate duration of songs */
function calculateTime(secs) {
  let mins = Math.floor(secs / 60);
  let seconds = Math.floor(secs % 60);
  let calculatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${mins}:${calculatedSeconds}`;
}

/* Adjust values of volume and seek sliders */
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
        songs[trackIndex].isPlaying = isPlaying;
        updatePlayPauseIcon();
      })
      .catch((err) => {
        alert("Unable to play song" + err);
      });
  }
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayPauseIcon();
}

function nextTrack() {
  if (trackIndex == songs.length - 1) {
    trackIndex = 0;
  } else trackIndex++;
  loadTrack(trackIndex);
}

function previousTrack() {
  if (trackIndex == 0) {
    trackIndex = songs.length - 1;
  } else {
    trackIndex--;
  }

  loadTrack(trackIndex);
}

/* Change play-pause-icon based on song state */
function updatePlayPauseIcon() {
  let pause = document.getElementById("song-" + trackIndex).childNodes[1]
    .childNodes[1].id;
  let play = document.getElementById("song-" + trackIndex).childNodes[1]
    .childNodes[3].id;

  showPreviousSongPauseIcon();
  if (isPlaying) {
    document.getElementById("Pause").style.display = "block";
    document.getElementById("Play").style.display = "none";
    /*Shows/hides current songs play/pause btn in all songs container  */
    document.getElementById(pause).style.display = "block";
    document.getElementById(play).style.display = "none";
  } else {
    document.getElementById("Play").style.display = "block";
    document.getElementById("Pause").style.display = "none";
    /*Shows/hides current songs play/pause btn in all songs container  */
    document.getElementById(pause).style.display = "none";
    document.getElementById(play).style.display = "block";
  }
}

function showPreviousSongPauseIcon() {
  let songid = trackIndex - 1;
  if (songid == -1) songid = songs.length - 1;
  if (songid == songs.length - 1) songid = 0;

  console.log("songid", songid);
  let pause = document.getElementById("song-" + songid).childNodes[1]
    .childNodes[1].id;
  let play = document.getElementById("song-" + songid).childNodes[1]
    .childNodes[3].id;

  document.getElementById(pause).style.display = "none";
  document.getElementById(play).style.display = "block";
}
/* Adjust mute and unmute controls */
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

/* Display corresponding song details */
function displaySongDetails(duration) {
  SONGNAME.textContent = songs[trackIndex].songName;
  ARTIST.textContent = songs[trackIndex].byArtist;
  TOTALDURATION.textContent = calculateTime(duration);
}

/* Load first track in player */
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

/* Reset all values */
function resetValues() {
  SONGNAME.textContent = "";
  ARTIST.textContent = "";
  SEEKSLIDER.value = 0;
  TOTALDURATION.textContent = "0:00";
  CURRENTTIME.textContent = "0:00";
}

/* Event Listeners */

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

PLAYPAUSEICONS.addEventListener("click", () => {
  if (isPlaying == false) {
    playSong();
  } else {
    pauseSong();
  }
});

NEXT.addEventListener("click", () => {
  nextTrack();
});

PREVIOUS.addEventListener("click", () => {
  previousTrack();
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
