const musicBox = document.querySelector(".music-box");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#forward");
const audio = document.querySelector("#audio");
const progress = document.querySelector("#progress");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//song titles

const songs = ["white", "relax", "rain"];

let songIndex = 2;

//Load Song
loadSong(songs[songIndex]);

//update song details

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.png`;
}

function playSong() {
  musicBox.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicBox.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = 2;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > 2) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}
//Event Listeners

playBtn.addEventListener("click", () => {
  const isPlaying = musicBox.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Change Song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
