let btnsound = document.querySelector(".btn-sound");
let sound = document.querySelector("audio");
console.dir(sound);
btnsound.onclick = () => {
    if (sound.paused){
    console.log("включить");
    sound.play();
} else {
    console.log("выключить");
    sound.pause();
}
}