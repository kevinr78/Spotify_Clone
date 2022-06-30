/* Sidepanel Functionality */
/* Sidepanel Variables */
let Hometab = document.getElementById("side-panel-tab-home");
let AllSongstab = document.getElementById("side-panel-tab-all-songs");
let Searchtab = document.getElementById("side-panel-tab-search");
let CreatePlaylisttab = document.getElementById(
  "side-panel-tab-create-playlist"
);
let Favouritetab = document.getElementById("side-panel-tab-favourites");
let YourLibrarytab = document.getElementById("side-panel-tab-your-library");
let PlayHistorytab = document.getElementById("side-panel-tab-play-history");

/* Main Content Variables */
let HomeMainContent = document.getElementById("main-content-tab-home");
let AllSongsMainContent = document.getElementById("main-content-tab-all-songs");
let SearchMainContent = document.getElementById("main-content-tab-search");
let CreatePlaylistMainContent = document.getElementById(
  "main-content-tab-create-playlist"
);
let FavouriteMainContent = document.getElementById(
  "main-content-tab-favourites"
);
let YourLibraryMainContent = document.getElementById(
  "main-content-tab-your-library"
);
let PlayHistoryMainContent = document.getElementById(
  "main-content-tab-play-history"
);

sidepanelButtons = [
  Hometab,
  AllSongstab,
  Searchtab,
  CreatePlaylisttab,
  Favouritetab,
  YourLibrarytab,
  PlayHistorytab,
];
/* Adding Click event Listener */
sidepanelButtons.forEach((ele) => {
  ele.onclick = () => {
    displayCorrespondingTab(ele);
  };
});

function displayCorrespondingTab(element) {
  /* Add backgroud */
  let prefix = "main-content";
  let elementName = element.id.slice(10);
  let displayBlock = document.getElementById(prefix + elementName);

  /* Removing ClassList from sidepanel */
  Array.from(document.querySelectorAll("li.active-tab-side-panel")).forEach(
    (el) => el.classList.remove("active-tab-side-panel")
  );
  element.classList.toggle("active-tab-side-panel");

  /* Displaying corresponding Content tab */
  Array.from(document.querySelectorAll("div.active-tab-main-content")).forEach(
    (el) => el.classList.remove("active-tab-main-content")
  );
  displayBlock.classList.add("active-tab-main-content");
}
