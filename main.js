let song_list_arr = [
  {
    title: "Reset",
    artist: "Jaunter",
    album: "Time Capsule",
    url: "audio_tracks/Jaunter-Reset.mp3",
    cover_album: "",
  },
  {
    title: "Airwaves",
    artist: "Olivaw",
    album: "Red Sun Rises",
    url: "audio_tracks/Olivaw-Airwaves.mp3",
    cover_album: "",
  },
  {
    title: "Night",
    artist: "Kosmorider",
    album: "Geometry",
    url: "audio_tracks/Kosmorider-Night.mp3",
    cover_album: "",
  },
];

console.log(song_list_arr[0].url);

const LIST_SONG = document.querySelector(".list-song");
const AUDIO_PLAYER = document.querySelectorAll(".audio_player");
const PLAY_BTN = document.querySelector(".play_btn");
const PAUSE_BTN = document.querySelector(".pause_btn");
const STOP_BTN = document.querySelector(".stop_btn");
const NEXT_SONG_BTN = document.querySelector(".next_song_btn");
const PREVIOUS_SONG_BTN = document.querySelector(".previous_song_btn");

PAUSE_BTN.classList.add("JS-display_none");
STOP_BTN.classList.add("JS-display_none");

AUDIO_PLAYER.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.play();
    PLAY_BTN.classList.add("JS-display_none");
    PAUSE_BTN.classList.remove("JS-display_none");
    STOP_BTN.classList.remove("JS-display_none");
  });
});

PAUSE_BTN.addEventListener("click", (e) => {
  AUDIO_PLAYER.pause();
  PAUSE_BTN.classList.add("JS-display_none");
  PLAY_BTN.classList.remove("JS-display_none");
});

STOP_BTN.addEventListener("click", (e) => {
  AUDIO_PLAYER.pause();
  AUDIO_PLAYER.currentTime = 0;
  PAUSE_BTN.classList.add("JS-display_none");
  STOP_BTN.classList.add("JS-display_none");
  PLAY_BTN.classList.remove("JS-display_none");
});

// import { readID3Tags } from "read-id3-tags";
// const NodeID3 = require("node-id3");
// const tags = NodeID3.read(file);
// NodeID3.read(file, function (err, tags) {});
// console.log(NodeID3.read(file, function (err, tags) {}));
