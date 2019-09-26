window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    console.log(audio);
    if(!audio) return; // if audio key option is not available like the letter 'z' then it just stops.
});