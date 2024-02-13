function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.key}']`);
  const key = document.querySelector(`.key[data-key='${e.key}']`);
  if (!audio) return;
  console.log(e.key);
  
  audio.currentTime = 0;
  audio.play();
  
  key.classList.add('playing');
}

function removeTransition() {
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));