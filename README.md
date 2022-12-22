Projet JavaScript du GRETA-CFA Montpellier

Audio Player

docu :
Pour faire soi meme un lecteur basique :
https://yard.onl/sitelycee/cours/js/_Js.html?Laudio.html

Pour trier un tableau selon les propriété des element du tableau :
https://www.delftstack.com/fr/howto/javascript/sort-array-based-on-some-property-javascript/

Pour coder un egaliseur musical en utilisant les données analysé de la musique joué :
https://orangeable.com/javascript/equalizer-web-audio-api

Fonction d'animation d'un egaliseur musical de façon aléatoire :
https://webdeasy.de/en/programming-javascript-equalizer/

Fonction de tri aleatoire des elements dun tableau :
https://www.stashofcode.fr/tri-aleatoire-des-elements-dun-tableau/

Veille Techno :

Propriétés :

- HTMLElementMedia (ex : audio, video)

duration : renvoyant le temps total du media ciblé en seconde (type : float), en read-only
currentTime : lis / ecris le temps actuel du media ciblé en seconde (type : float)
Ces 2 propriétés renvoient des valeurs différentes selon les navigateurs.

volume : permets de lire/ecrire le volume du media ciblé en utilisant un nombre décimal de 0 a 1, a utiliser comme un pourcentage
currentSrc : renvoie le lien absolu du fichier indiqué dans l'attribut src. Si src="" renvoie le lien absolu de la page html

- window :

document.location.href : renvoie l'url de la page html actuelle. Pratique pour vérifier si HTMLMediaElement.currentSrc est vide

Méthodes :

- HTMLMediaElement :

play() : permet d'activé le media ciblé
pause() : permet de mettre en pause le media ciblé.

- Array et String :

array.sort() : trie les élément d'un tableau alphabétiquement en convertissant ses élément en String et renvoie le tableau.
L'espace mémoire utilisé par cette methode peut etre conséquent, il est donc préférable d'ajouter une fonction de comparaison en parametre de cette methode pour des tableau complexe.

string.localCompare(stringParams) : renvoie un entier indiquant si string et placé avant ou apres stringParams. -1 pour avant, 1 pour après et 0 si elles sont placés au meme endroit.
La valeur de l'entier de retour dépends des navigateurs, certains renvoie -2, 2 ou d'autres valeurs.

song_array.sort((a, b) => a.artist.localeCompare(b.artist));

Fonctions :

J'ai appris a classé alphabétiquement un tableau d'objet en fonction de leur proriété

J'ai trouvé une fonction sur internet permettant de replacer aléatoirement les éléments d'un tableau dans lui-meme avec une propabilité qu'un element regagne la place qu'il avait au depart égale pour chaque élément. J'ai aussi trouvé un code permettant d'animer un egaliseur aléatoirement, en gros il sert animer des span dans une div de facon aléatoire. Je les ai analysé et serait capable de la reproduire.

Renseignement :
Je me suis renseigné sur l'ID3 des fichier mp3 car je voulais un moyen d'accès aux informations des fichiers pour les utiliser ne javascript mais si j'ai bien compris ce n'est pas possible en vanilla JS, il faut node.js et je n'ai pas eu le temps d'en apprendre plus. J'ai aussi tenté d'utilliser l'objet JS AudioContext() afin de faire une animation en rythme avec la musique mais je me suis heurté a des soucis de Cross-Origin Resource Sharing. Je ne me suis pas plus renseigné par manque de temps et c'est encore un probleme lié au fait que l'on travaille en local. Par sécurité il semble que les navigateur ont bloqué/restreint les moyens d'analyses des HTMLMediaElement lorsque l'on se passe de serveurs.

Globalement j'ai fais pas mal de recherche sur des chose un peu trop complexe pour le moment surtout que je manquais de temps. Pour le restej'ai utilisé les connaisances aquise durant la formation.
