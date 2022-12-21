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

const LIST_SONG = document.querySelector(".list-song");
const ALL_SONG = document.querySelectorAll(".song");
const AUDIO_PLAYER = document.querySelector("#audio_player");
const ALL_AUDIO = document.querySelectorAll("audio");
const PLAY_BTN = document.querySelector(".play_btn");
const PAUSE_BTN = document.querySelector(".pause_btn");
const STOP_BTN = document.querySelector(".stop_btn");
const NEXT_SONG_BTN = document.querySelector(".next_song_btn");
const PREVIOUS_SONG_BTN = document.querySelector(".previous_song_btn");
const THIS_SONG = document.querySelectorAll(".this_song");
const TIME_LINE = document.querySelector(".timeline_input_range");
const SOUND_BTN = document.querySelector(".sound_btn");
const SOUND_BAR = document.querySelector(".sound_input_range");

// ******************************************** declaration des fonction *****************************************************

/**
 * Place les informations des musique du tableau song_list_arr dans la liste de lecture
 * @param {array} array
 */
function place_song_in_playlist(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
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

place_song_in_playlist(song_list_arr);

PAUSE_BTN.classList.add("JS-display_none");
STOP_BTN.classList.add("JS-display_none");
SOUND_BAR.classList.add("JS-display_none");

AUDIO_PLAYER.src = song_list_arr[0].url;
set_song_title(AUDIO_PLAYER, song_list_arr);

setInterval(() => {
  if (TIME_LINE.max != Math.round(AUDIO_PLAYER.duration)) {
    TIME_LINE.max = Math.round(AUDIO_PLAYER.duration);
  }
  TIME_LINE.value = AUDIO_PLAYER.currentTime;
}, 100);

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
    console.log(this.event.target);
  });
});

PLAY_BTN.addEventListener("click", (e) => {
  AUDIO_PLAYER.play();
  PLAY_BTN.classList.add("JS-display_none");
  PAUSE_BTN.classList.remove("JS-display_none");
  STOP_BTN.classList.remove("JS-display_none");
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

NEXT_SONG_BTN.addEventListener("click", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = next_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
});

PREVIOUS_SONG_BTN.addEventListener("click", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = previous_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
});

AUDIO_PLAYER.addEventListener("ended", (e) => {
  let url = get_relative_path_src_url(AUDIO_PLAYER);
  AUDIO_PLAYER.src = next_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
  set_song_title(AUDIO_PLAYER, song_list_arr);
  set_current_song_CSS_in_playlist(ALL_SONG, AUDIO_PLAYER, song_list_arr);
});

TIME_LINE.addEventListener("change", (e) => {
  AUDIO_PLAYER.currentTime = TIME_LINE.value;
});

SOUND_BTN.addEventListener("click", (e) => {
  SOUND_BAR.classList.toggle("JS-display_none");
});
