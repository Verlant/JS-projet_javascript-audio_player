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
    url: "audio_tracks/Meydän - Plasma.mp3",
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

console.log(song_list_arr[0].url);

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

PAUSE_BTN.classList.add("JS-display_none");
STOP_BTN.classList.add("JS-display_none");

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
  str_array = node.textContent.split(" - ");
  song_array.forEach((element) => {
    if (element.title == str_array[0]) {
      url = element.url;
    }
  });
  return url;
}

/**
 * Fonction qui renvoie l'url de la prochaine chanson de la playlist, si la chanson actuelle est la dernière, renvoie l'url de la premiere de la playlist
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
 * Fonction qui renvoie l'url de la précédente chanson de la playlist, si la chanson est la premiere de la liste, renvoie l'url de la derniere de la playlist
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

function set_song_title(node_array, song_array) {
  for (let index = 0; index < node_array.length; index++) {
    const element = node_array[index];
    element.textContent = song_array[index];
  }
}

place_song_in_playlist(song_list_arr);

AUDIO_PLAYER.src = song_list_arr[0].url;

ALL_SONG.forEach((element) => {
  element.addEventListener("click", (e) => {
    AUDIO_PLAYER.src = set_url(element, song_list_arr);
    AUDIO_PLAYER.play();
    PLAY_BTN.classList.add("JS-display_none");
    PAUSE_BTN.classList.remove("JS-display_none");
    STOP_BTN.classList.remove("JS-display_none");
    ALL_SONG.forEach((element) => {
      element.classList.remove("JS-current_song");
    });
    element.classList.add("JS-current_song");
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
  // déclaration du chemin relatif récupéré de la valeur de l'attribut source de <audio>
  let url =
    AUDIO_PLAYER.src.split("JavaScript/")[
      AUDIO_PLAYER.src.split("JavaScript/").length - 1
    ];
  AUDIO_PLAYER.src = next_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
});

PREVIOUS_SONG_BTN.addEventListener("click", (e) => {
  // déclaration du chemin relatif récupéré de la valeur de l'attribut source de <audio>
  let url =
    AUDIO_PLAYER.src.split("JavaScript/")[
      AUDIO_PLAYER.src.split("JavaScript/").length - 1
    ];
  AUDIO_PLAYER.src = previous_song_url(url, song_list_arr);
  AUDIO_PLAYER.play();
});
