function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (!audio) return; // if audio key option is not available, stops it
    key.classList.add('playing');
    audio.currentTime = 0; // rewind back to start so you can play sounds fast
    audio.play();
    
}

  function endSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return; // if it doesn't, stops function
    key.classList.remove('playing');
  }

window.addEventListener('keyup', endSound)
window.addEventListener('keydown', playSound);

// **Leaving this for historical reasons. Not sure why this script below only works inline inside <script> tags. The script above does work as JS from an src external file. The script below works if you want to include JS into your HTML document for some reason.**

//function removeTransition(e) {
//    if (e.propertyName !== 'transform') return; //skip if its not a transform
//    e.target.classList.remove('playing');
//}
//
//function playSound(e) {
//    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
//    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
//    if (!audio) return; // if audio key option is not available, stops it
//    key.classList.add('playing');
//    audio.currentTime = 0; // rewind back to start so you can play sounds fast
//    audio.play();
//    
//}
//
//const keys = document.querySelectorAll('.key');
//keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
//window.addEventListener('keydown', playSound);