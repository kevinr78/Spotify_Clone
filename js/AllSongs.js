const SONGSTABLE = document.getElementsByTagName("tbody")[0];

function displaySongs(songList) {
  for (song of songList) {
    let { id, songName, byArtist, duration, isPlaying: songIsPlaying } = song;
    let tableRow = `
     <tr>
        <td>${parseInt(id) + 1}</td>
        <td >  <svg
        width="22"
        id="song-${id}"
        height="22"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Play-pause-button">
          <g  class="allSongs-Pause" id="pause-song-${id}-icon">
            <rect
              id="pause-rect-1"
              x="23"
              width="10"
              height="32.67"
              fill="#C7B1EF"
            />
            <rect
              id="pause-rect-2"
              width="10"
              height="32.67"
              fill="#C7B1EF"
            />
          </g>
          <path
            class="allSongs-Play"
            id="play-song-${id}-icon"
            d="M1 31.5V0L31.25 15.75L1 31.5ZM5.125 25.3688L23.6188 15.75L5.125 6.13125V25.3688Z"
            fill="#C7B1EF"
          />
        </g>
      </svg></td>
        <td>${songName}</td>
        <td>${byArtist}</td>
        <td>${duration}</td>
        <td>Favourite</td>
    </tr>
    `;

    let newRow = SONGSTABLE.insertRow();
    newRow.innerHTML = tableRow;
  }
}

displaySongs(songs);
