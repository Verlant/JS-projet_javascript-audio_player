// *************************************** tableau d'objets des musique à jouer ***********************************************

let song_list_arr = [
  {
    title: "Uncatchable",
    artist: "Alexandr Zhelanov",
    album: "Album inconnu",
    url: "audio_tracks/AlexandrZhelanov-Uncatchable.mp3",
  },
  {
    title: "Lovely Swindler",
    artist: "Amaria",
    album: "Album inconnu",
    url: "audio_tracks/Amaria_LovelySwindler.mp3",
  },
  {
    title: "Starcade",
    artist: "Blue Navi",
    album: "Cafe Zone • +003",
    url: "audio_tracks/BlueNavi-Starcade.mp3",
  },
  {
    title: "The Dark Woods",
    artist: "Clone Me Twice",
    album: "Album inconnu",
    url: "audio_tracks/CloneMeTwice_TheDarkWoods.mp3",
  },
  {
    title: "Days Past",
    artist: "In Closing",
    album: "Self-titled",
    url: "audio_tracks/InClosing-DaysPast.mp3",
  },
  {
    title: "Reset",
    artist: "Jaunter",
    album: "Time Capsule",
    url: "audio_tracks/Jaunter-Reset.mp3",
  },
  {
    title: "Run",
    artist: "Kai Engel",
    album: "The Run",
    url: "audio_tracks/KaiEngel-TheRun-02Run.mp3",
  },
  {
    title: "Night",
    artist: "Kosmorider",
    album: "Geometry",
    url: "audio_tracks/Kosmorider-Night.mp3",
  },
  {
    title: "Cascade",
    artist: "Kubbi",
    album: "Ember",
    url: "audio_tracks/Kubbi-Ember-04Cascade.mp3",
  },
  {
    title: "K For Kool",
    artist: "Kuromaru",
    album: "The Black Circle",
    url: "audio_tracks/Kuromaru-KForKool.mp3",
  },
  {
    title: "Ode To The Winners",
    artist: "Max Ko Music",
    album: "Album inconnu",
    url: "audio_tracks/MaxKoMusic-OdeToTheWinners.mp3",
  },
  {
    title: "Plasma",
    artist: "Meydän",
    album: "Album inconnu",
    url: "audio_tracks/Meydan-Plasma.mp3",
  },
  {
    title: "Synthwave Vibe",
    artist: "Meydän",
    album: "Album inconnu",
    url: "audio_tracks/Meydn-SynthwaveVibe.mp3",
  },
  {
    title: "Airwaves",
    artist: "Olivaw",
    album: "Red Sun Rises",
    url: "audio_tracks/Olivaw-Airwaves.mp3",
  },
  {
    title: "Poison",
    artist: "Ona",
    album: "Album inconnu",
    url: "audio_tracks/Ona_Poison.mp3",
  },
  {
    title: "Airship Thunderchild",
    artist: "Otto Halmén",
    album: "Otto's Creative Commons Tracks",
    url: "audio_tracks/OttoHalmn-OttosCreativeCommonsTracks-01AirshipThunderchild.mp3",
  },
  {
    title: "I Cant Stop",
    artist: "Punch Deck",
    album: "Album inconnu",
    url: "audio_tracks/PunchDeck-ICantStop.mp3",
  },
  {
    title: "Inn Of Good Fortune",
    artist: "Solas",
    album: "Album inconnu",
    url: "audio_tracks/Solas-InnOfGoodFortune.mp3",
  },
  {
    title: "Moonbeams",
    artist: "Tokyo Music Walker",
    album: "Album inconnu",
    url: "audio_tracks/TokyoMusicWalker-Moonbeams.mp3",
  },
  {
    title: "Follow me (feat. Paps)",
    artist: "Vendredi",
    album: "Album inconnu",
    url: "audio_tracks/Vendredi_Follow_me.mp3",
  },
];

// ******************************* declaration globale des constante des element du dom **************************************

const CHOOSEN_PLAYLIST = document.querySelectorAll(".choosen_playlist");
const PLAYLIST_TITLE = document.querySelector(".playlist_title");
const ALL_SONG = document.querySelectorAll(".song");
const AUDIO_PLAYER = document.querySelector("#audio_player");
const ALL_AUDIO = document.querySelectorAll("audio");
const PLAY_BTN = document.querySelector(".play_btn");
const PAUSE_BTN = document.querySelector(".pause_btn");
const STOP_BTN = document.querySelector(".stop_btn");
const NEXT_SONG_BTN = document.querySelector(".next_song_btn");
const PREVIOUS_SONG_BTN = document.querySelector(".previous_song_btn");
const SONG_INFO_CONTAINER = document.querySelector(".this_song_info_container");
const THIS_SONG_INFO = document.querySelector(".this_song_info");
const THIS_SONG = document.querySelectorAll(".this_song");
const TIME_LINE = document.querySelector(".timeline_input_range");
const CURRENT_TIME = document.querySelector(".current-time");
const END_TIME = document.querySelector(".end-time");
const SOUND_BTN = document.querySelector(".sound_btn");
const SOUND_ICON = document.querySelector("#sound_icon");
const SOUND_MUTED_ICON = document.querySelector("#mute_icon");
const SOUND_BAR = document.querySelector(".sound_input_range");

// ******************************************** declaration des fonction *****************************************************

/**
 * Fonction qui renvoie un entier aléatoier compris en min et max
 * @param {int} min entier minimal renvoyé par la fonction
 * @param {int} max entier maximal renvoyé par la fonction
 * @returns Un entier aléatoire compris entre min et max
 */
function randomInt(min, max) {
  return min + Math.floor((max - min + 1) * Math.random());
}

/**
 * Fonction qui trie aléatoirement un tableau
 * @param {array} items
 * @returns
 */
function shuffle(items) {
  let i, j;
  let item;
  if (!items.length || items.length == 1) return;
  for (i = items.length - 1; i != 0; i--) {
    j = randomInt(0, i);
    item = items[j];
    items[j] = items[i];
    items[i] = item;
  }
}

/**
 * Place les informations des musique du tableau song_list_arr dans la liste de lecture
 * @param {array} song_array
 */
function place_song_in_playlist(song_array) {
  for (let index = 0; index < song_array.length; index++) {
    const element = song_array[index];
    ALL_SONG[index].textContent =
      element.title + " | " + element.artist + " | " + element.album;
  }
}

/**
 * Compare le premier mot d'un noeud avec la propriété title d'un tableau et retourne l'url de la musique correspondante
 * @param {node} node
 * @param {array} song_array
 * @returns string
 */
function set_url(node, song_array) {
  let url;
  str_array = node.textContent.split(" | ");
  song_array.forEach((element) => {
    if (element.title == str_array[0]) {
      url = element.url;
    }
  });
  return url;
}

/**
 * Fonction qui renvoie l'url de la prochaine chanson de la playlist,
 * si la chanson actuelle est la dernière,
 * renvoie l'url de la premiere de la playlist
 * @param {string} str_url chaine de caractere étant égal au chemin relatif de l'url de la chanson en cours
 * @param {array} song_array tableau d'objet représentant les chanson de la playslist
 * @returns string étant le chemin relatif de la chanson suivante dans la playlist
 */
function next_song_url(str_url, song_array) {
  let url;
  for (let index = 0; index < song_array.length; index++) {
    const element = song_array[index];
    if (str_url == element.url) {
      if (index + 1 >= song_array.length) {
        url = song_array[0].url;
      } else {
        url = song_array[index + 1].url;
      }
    }
  }
  return url;
}

/**
 * Fonction qui renvoie l'url de la précédente chanson de la playlist,
 * si la chanson est la premiere de la liste,
 * renvoie l'url de la derniere de la playlist
 * @param {string} str_url chaine de caractere étant égal au chemin relatif de l'url de la chanson en cours
 * @param {array} song_array tableau d'objet représentant les chanson de la playslist
 * @returns string étant le chemin relatif de la chanson précédente dans la playlist
 */
function previous_song_url(str_url, song_array) {
  let url;
  for (let index = 0; index < song_array.length; index++) {
    const element = song_array[index];
    if (str_url == element.url) {
      if (index - 1 < 0) {
        url = song_array[song_array.length - 1].url;
      } else {
        url = song_array[index - 1].url;
      }
    }
  }
  return url;
}

/**
 * Fonction renvoyant le chemin relatif de la page html où est contenu l'element
 * @param {HTMLelement} media_element element HTML contenant un attribut src
 * @returns le chemin relatif de src
 */
function get_relative_path_src_url(media_element) {
  let url =
    media_element.src.split("JavaScript/")[
      media_element.src.split("JavaScript/").length - 1
    ];
  return url;
}

/**
 * Fonction plaçant le titre, artiste et album de la chanson en cours dans la/les balise(s) HTML prévu a cet effet (THIS_SONG)
 * @param {HTMLMediaElement} media_element media element contenant une valeur dans l'attribut source
 * @param {array} song_array tableau d'objet contenant les chansons
 */
function set_song_title(media_element, song_array) {
  let url = get_relative_path_src_url(media_element);
  song_array.forEach((element) => {
    if (url == element.url) {
      THIS_SONG[0].textContent = element.title;
      THIS_SONG[1].textContent = element.artist;
      THIS_SONG[2].textContent = element.album;
    }
  });
}

/**
 * Fonction changeant le style CSS la chanson en cours dans la playlist
 * @param {node_list} playlist Liste de noeud html correspond a la playslit
 * @param {HTMLMediaElement} media_element HTML element contenant un attribut src
 * @param {array} song_array Tableau d'objet correspondant aux chansons disponible
 */
function set_current_song_CSS_in_playlist(playlist, media_element, song_array) {
  let url = get_relative_path_src_url(media_element);
  let this_song_title; //= playlist
  playlist.forEach((playlist_element) => {
    playlist_element.classList.remove("JS-current_song");
    this_song_title = playlist_element.textContent.split(" | ")[0];
    song_array.forEach((song_array_element) => {
      if (
        url == song_array_element.url &&
        this_song_title == song_array_element.title
      ) {
        playlist_element.classList.add("JS-current_song");
      }
    });
  });
}

/**
 * Fonction gérant la time line : affiche le temps actuel ou est la musique,
 * affiche le temps total de la musique,
 * affiche le pointeur sur la barre de défilement par rapport a l'avancement de la musique.
 * Cette fonction est utilisé dans un setInterval
 */
function time_line() {
  TIME_LINE.max = Math.round(AUDIO_PLAYER.duration);
  if (Math.floor(AUDIO_PLAYER.duration) % 60 < 10) {
    END_TIME.textContent =
      "0" +
      Math.floor(AUDIO_PLAYER.duration / 60) +
      " : " +
      "0" +
      Math.floor(AUDIO_PLAYER.duration % 60);
  } else {
    END_TIME.textContent =
      "0" +
      Math.floor(AUDIO_PLAYER.duration / 60) +
      " : " +
      Math.floor(AUDIO_PLAYER.duration % 60);
  }
  TIME_LINE.value = AUDIO_PLAYER.currentTime;
  if (
    Math.floor(AUDIO_PLAYER.currentTime / 60) < 10 &&
    Math.floor(AUDIO_PLAYER.currentTime) % 60 < 10
  ) {
    CURRENT_TIME.textContent =
      "0" +
      Math.floor(AUDIO_PLAYER.currentTime / 60) +
      " : " +
      "0" +
      Math.floor(AUDIO_PLAYER.currentTime % 60);
  } else if (Math.floor(AUDIO_PLAYER.currentTime / 60) < 10) {
    CURRENT_TIME.textContent =
      "0" +
      Math.floor(AUDIO_PLAYER.currentTime / 60) +
      " : " +
      Math.floor(AUDIO_PLAYER.currentTime % 60);
  } else if (Math.floor(AUDIO_PLAYER.currentTime) % 60 < 10) {
    CURRENT_TIME.textContent =
      Math.floor(AUDIO_PLAYER.currentTime / 60) +
      " : " +
      "0" +
      Math.floor(AUDIO_PLAYER.currentTime % 60);
  } else {
    CURRENT_TIME.textContent =
      Math.floor(AUDIO_PLAYER.currentTime / 60) +
      " : " +
      Math.floor(AUDIO_PLAYER.currentTime % 60);
  }
}

// /**
//  * Fonctione classe aléatoirement le tableau contenant les musique puis les place dans la playlsit
//  * @param {array} song_array
//  */
// function random_playlist(song_array) {
//   shuffle(song_array);
//   place_song_in_playlist(song_array);
//   PLAYLIST_TITLE.textContent = "Liste aléatoire";
//   AUDIO_PLAYER.src = song_array[0].url;
//   set_song_title(AUDIO_PLAYER, song_array);
//   set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_array);
// }

/**
 * Fonctione qui crée la playlist
 * @param {array} song_array
 * @param {element} element
 */
function set_playlist(song_array, element) {
  let sort_arr = [];
  switch (element.textContent) {
    case "Chansons":
      sort_arr = song_array.sort((a, b) => a.title.localeCompare(b.title));
      place_song_in_playlist(sort_arr);
      PLAYLIST_TITLE.textContent = "Liste par chanson";
      set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
      break;
    case "Artiste":
      sort_arr = song_array.sort((a, b) => a.artist.localeCompare(b.artist));
      place_song_in_playlist(sort_arr);
      PLAYLIST_TITLE.textContent = "Liste par artiste";
      set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, sort_arr);
      break;
    case "Album":
      sort_arr = song_array.sort((a, b) => a.album.localeCompare(b.album));
      place_song_in_playlist(sort_arr);
      PLAYLIST_TITLE.textContent = "Liste par album";
      set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, sort_arr);
      break;
    case "Aléatoire":
      shuffle(song_array);
      place_song_in_playlist(song_array);
      PLAYLIST_TITLE.textContent = "Liste aléatoire";
      set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_array);
      break;
    default:
      break;
  }
  place_song_in_playlist(sort_arr);
}

//*********************************************************** EQUALIZER ***********************************************************/

const MAX_BAR_HEIGHT = 20;

addBarSpans();

let equalizer_interval;

// Main programm (repeats)
function setRandomBars() {
  const bars = document.getElementsByClassName("equalizer-bar");

  for (let i = 0; i < bars.length; i++) {
    let spans = bars[i].getElementsByTagName("span");
    let activeSpanCount = getActiveSpans(spans);
    let newHeight = getRandomHeight(MAX_BAR_HEIGHT);

    for (let j = 0; j < spans.length; j++) {
      if (newHeight > activeSpanCount) {
        spans[j].style.opacity = "1";
      } else if (j > newHeight) {
        spans[j].style.opacity = "0";
      }

      // set little opacity
      let upperSpan = MAX_BAR_HEIGHT - j;
      if (newHeight > MAX_BAR_HEIGHT - 5 && upperSpan < 5) {
        spans[j].style.opacity = "0." + upperSpan;
      }
    }
  }
}

// Returns the number of active spans
function getActiveSpans(spans) {
  let counter = 0;

  for (let i = 0; i < spans.length; i++) {
    if (spans[i].style.opacity > 0) counter++;
  }

  return counter;
}

// Returns a random number between 1 and 20
function getRandomHeight(maxBarHeight) {
  return Math.round(Math.random() * (maxBarHeight - 1)) + 1;
}

// Add the default spans
function addBarSpans() {
  const bars = document.getElementsByClassName("equalizer-bar");

  let html = "";
  for (let j = 0; j < MAX_BAR_HEIGHT; j++) {
    html += "<span></span>";
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].innerHTML = html;
  }
}

PAUSE_BTN.classList.add("JS-display_none");
STOP_BTN.classList.add("JS-display_none");
SOUND_BAR.classList.add("JS-display_none");
SOUND_MUTED_ICON.classList.add("JS-display_none");

//initialise une liste de lecture aléatoire lors de l'ouverture ou du rafraichissement de la page
// random_playlist(song_list_arr);

place_song_in_playlist(song_list_arr);

//rafaichi la barre de lecture de la musique actuelle
setInterval(time_line, 100);

console.log(get_relative_path_src_url(AUDIO_PLAYER));

// ************************************************* declaration des evenement *************************************************

ALL_SONG.forEach((element) => {
  element.addEventListener("click", (e) => {
    AUDIO_PLAYER.src = set_url(element, song_list_arr);
    AUDIO_PLAYER.play();
    PLAY_BTN.classList.add("JS-display_none");
    PAUSE_BTN.classList.remove("JS-display_none");
    STOP_BTN.classList.remove("JS-display_none");
    set_song_title(AUDIO_PLAYER, song_list_arr);
    set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
    clearInterval(equalizer_interval);
    equalizer_interval = setInterval(() => {
      setRandomBars();
    }, 200);
  });
});

PLAY_BTN.addEventListener("click", (e) => {
  if (get_relative_path_src_url(AUDIO_PLAYER) == "index.html") {
    AUDIO_PLAYER.src = song_list_arr[0].url;
    set_song_title(AUDIO_PLAYER, song_list_arr);
    set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
  }
  AUDIO_PLAYER.play();
  PLAY_BTN.classList.add("JS-display_none");
  PAUSE_BTN.classList.remove("JS-display_none");
  STOP_BTN.classList.remove("JS-display_none");
  clearInterval(equalizer_interval);
  equalizer_interval = setInterval(() => {
    setRandomBars();
  }, 200);
});

PAUSE_BTN.addEventListener("click", (e) => {
  AUDIO_PLAYER.pause();
  PAUSE_BTN.classList.add("JS-display_none");
  PLAY_BTN.classList.remove("JS-display_none");
  clearInterval(equalizer_interval);
});

STOP_BTN.addEventListener("click", (e) => {
  AUDIO_PLAYER.pause();
  AUDIO_PLAYER.currentTime = 0;
  PAUSE_BTN.classList.add("JS-display_none");
  STOP_BTN.classList.add("JS-display_none");
  PLAY_BTN.classList.remove("JS-display_none");
  clearInterval(equalizer_interval);
});

NEXT_SONG_BTN.addEventListener("click", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = next_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
  clearInterval(equalizer_interval);
  equalizer_interval = setInterval(() => {
    setRandomBars();
  }, 200);
});

PREVIOUS_SONG_BTN.addEventListener("click", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = previous_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
  clearInterval(equalizer_interval);
  equalizer_interval = setInterval(() => {
    setRandomBars();
  }, 200);
});

AUDIO_PLAYER.addEventListener("ended", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = next_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
  clearInterval(equalizer_interval);
  equalizer_interval = setInterval(() => {
    setRandomBars();
  }, 200);
});

TIME_LINE.addEventListener("change", (e) => {
  AUDIO_PLAYER.currentTime = TIME_LINE.value;
});

SOUND_BTN.addEventListener("mouseover", (e) => {
  SOUND_BAR.classList.toggle("JS-display_none");
});

SOUND_BTN.addEventListener("mouseout", (e) => {
  SOUND_BAR.classList.toggle("JS-display_none");
});

SOUND_BAR.addEventListener("input", (e) => {
  AUDIO_PLAYER.volume = SOUND_BAR.value;
  if (SOUND_BAR.value == 0) {
    SOUND_MUTED_ICON.classList.remove("JS-display_none");
    SOUND_ICON.classList.add("JS-display_none");
  } else {
    SOUND_ICON.classList.remove("JS-display_none");
    SOUND_MUTED_ICON.classList.add("JS-display_none");
  }
});

CHOOSEN_PLAYLIST.forEach((element) => {
  element.addEventListener("click", (e) => {
    CHOOSEN_PLAYLIST.forEach((style_element) => {
      style_element.classList.remove("JS-current_playlsit");
    });
    element.classList.add("JS-current_playlsit");
    set_playlist(song_list_arr, element);
    // AUDIO_PLAYER.pause();
    // AUDIO_PLAYER.currentTime = 0;
    // PAUSE_BTN.classList.add("JS-display_none");
    // STOP_BTN.classList.add("JS-display_none");
    // PLAY_BTN.classList.remove("JS-display_none");
    clearInterval(equalizer_interval);
  });
});

//******************************************************* TEST ********************************************************/

// let canvas,
//   ctx,
//   source,
//   context,
//   analyser,
//   fbc_array,
//   bar_count,
//   bar_pos,
//   bar_width,
//   bar_height;

// let audio = new Audio();

// audio.id = "audio_player";
// audio.src = song_list_arr[0];
// audio.controls = true;
// audio.loop = false;
// audio.autoplay = false;

// window.addEventListener(
//   "load",
//   function () {
//     document.getElementById("equaliser").appendChild(audio);

//     AUDIO_PLAYER.onplay = function () {
//       if (typeof context === "undefined") {
//         context = new AudioContext();
//         analyser = context.createAnalyser();
//         canvas = document.getElementById("canvas");
//         ctx = canvas.getContext("2d");
//         source = context.createMediaElementSource(AUDIO_PLAYER);

//         canvas.width = window.innerWidth * 0.8;
//         canvas.height = window.innerHeight * 0.6;

//         source.connect(analyser);
//         analyser.connect(context.destination);
//       }

//       FrameLooper();
//     };
//   },
//   false
// );

// function FrameLooper() {
//   window.RequestAnimationFrame =
//     window.requestAnimationFrame(FrameLooper) ||
//     window.msRequestAnimationFrame(FrameLooper) ||
//     window.mozRequestAnimationFrame(FrameLooper) ||
//     window.webkitRequestAnimationFrame(FrameLooper);

//   fbc_array = new Uint8Array(analyser.frequencyBinCount);
//   bar_count = window.innerWidth / 2;

//   analyser.getByteFrequencyData(fbc_array);

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "#ffffff";

//   for (let i = 0; i < bar_count; i++) {
//     bar_pos = i * 4;
//     bar_width = 2;
//     bar_height = -(fbc_array[i] / 2);

//     ctx.fillRect(bar_pos, canvas.height, bar_width, bar_height);
//   }
// }
