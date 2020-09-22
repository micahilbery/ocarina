const zeldasLullaby = ['c-left', 'c-up', 'c-right', 'c-left', 'c-up', 'c-right'];
const eponaSong = ['c-up', 'c-left', 'c-right', 'c-up', 'c-left', 'c-right'];
const songOfStorms = ['a-btn', 'c-down', 'c-up', 'a-btn', 'c-down', 'c-up'];
const songOfTime = ['c-right', 'a-btn', 'c-down', 'c-right', 'a-btn', 'c-down'];
const sariasSong = ['c-down', 'c-right', 'c-left', 'c-down', 'c-right', 'c-left'];
const sunSong = ['c-right', 'c-down', 'c-up', 'c-right', 'c-down', 'c-up'];
const minuetOfForest = ['a-btn', 'c-up', 'c-left', 'c-right', 'c-left', 'c-right'];
const boleroOfFire = ['c-down', 'a-btn', 'c-down', 'a-btn', 'c-right', 'c-down', 'c-right', 'c-down'];
const serenadeOfWater = ['a-btn', 'c-down', 'c-right', 'c-right', 'c-left'];
const nocturneOfShadow = ['c-left','c-right', 'c-right', 'a-btn', 'c-left', 'c-right', 'c-down'];
const requiemOfSpirit = ['a-btn', 'c-down', 'a-btn', 'c-right', 'c-down', 'a-btn'];
const preludeOfLight = ['c-up', 'c-right', 'c-up', 'c-right', 'c-left', 'c-up'];

const songs = [zeldasLullaby, eponaSong, songOfStorms, songOfTime, sariasSong, sunSong, minuetOfForest, boleroOfFire, serenadeOfWater, nocturneOfShadow, requiemOfSpirit, preludeOfLight];

let songArray = [];
const songError = document.querySelector('audio[data-sound="error"]');
const songSuccess = document.querySelector('audio[data-sound="success"]');
const songReset = document.querySelector('audio[data-sound="reset"]');

function playSound(sound) {
  const audio = document.querySelector(`audio[data-sound="${sound}"]`);
  const btn = document.querySelector(`.key[data-sound="${sound}"]`);

  audio.currentTime = 0;
  audio.play();
}

function compareSongs(array, song) {
  let same = true;

  if(array.length == song.length) { // see if songs are the same length
    for(let i = 0; i < array.length; i++) { // if they are compare the notes
      if(same && array[i] == song[i]) {
      } else {
        same = false;
      }
    }
  } else {
    same = false;
  }

  return same;
}

function checkForSong(array) {
  let match = false;
  
  for(let i = 0; i < songs.length; i++) {
    if(!match){
      match = compareSongs(array, songs[i]);
    }
  }

  if (match) {
    songSuccess.currentTime = 0;
    songSuccess.play();
    songArray = [];
    return;
  } else if(songArray.length < 8) {
    return;
  } else {
    songError.currentTime = 0;
    songError.play();
    songArray = [];
    return;
  }
}

function addToArray(note) {
  songArray.push(note);

  if(songArray.length >= 5) {
    checkForSong(songArray);
  }
}

function resetSong() {
  songReset.currentTime = 0;
  songReset.play();
  songArray = [];
  return;
}

const cUp = document.getElementById('c-up');
const cRight = document.getElementById('c-right');
const cDown = document.getElementById('c-down');
const cLeft = document.getElementById('c-left');
const aBtn = document.getElementById('a-btn');
const bBtn = document.getElementById('b-btn');

cUp.addEventListener('click', (e) => {
  playSound(e.target.id);
  addToArray(e.target.id);
});

cRight.addEventListener('click', (e) => {
  playSound(e.target.id);
  addToArray(e.target.id);
});

cDown.addEventListener('click', (e) => {
  playSound(e.target.id);
  addToArray(e.target.id);
});

cLeft.addEventListener('click', (e) => {
  playSound(e.target.id);
  addToArray(e.target.id);
});

aBtn.addEventListener('click', (e) => {
  playSound(e.target.id);
  addToArray(e.target.id);
});

bBtn.addEventListener('click', resetSong);
