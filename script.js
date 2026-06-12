const songs = [

    {
        title: "Cheppave Chirugali",
        artist: "Udit Narayan",
        src: "songs/song1.mp3",
        cover: "images/cover1.jpg"
    },

    {
        title: "Ararey Manasaa",
        artist: "Sid Sriram",
        src: "songs/song2.mp3",
        cover: "images/cover2.jpg"
    },

    {
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        src: "songs/song3.mp3",
        cover: "images/cover3.jpg"
    }

];

const audio = new Audio();

const title = document.getElementById("title");

const artist = document.getElementById("artist");

const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");
const volumeBtn =
    document.getElementById("volume-btn");

const volumeContainer =
    document.getElementById("volume-container");

let currentSong = 0;

let isPlaying = false;


function loadSong(index){

    currentSong = index;

    audio.src = songs[index].src;

    title.textContent = songs[index].title;

    artist.textContent = songs[index].artist;

    cover.src = songs[index].cover;

}
loadSong(currentSong);


function playSelectedSong(index){

    loadSong(index);

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;

}

playBtn.addEventListener("click", () => {

    if(isPlaying){

        audio.pause();

        playBtn.textContent = "▶";

    }

    else{

        audio.play();

        playBtn.textContent = "⏸";

    }

    isPlaying = !isPlaying;

});



nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;

});


prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length - 1;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;

});



audio.addEventListener("timeupdate", () => {


    progress.value =
        (audio.currentTime / audio.duration) * 100 || 0;



    let currentMinutes =
        Math.floor(audio.currentTime / 60);

    let currentSeconds =
        Math.floor(audio.currentTime % 60);

    if(currentSeconds < 10){

        currentSeconds = "0" + currentSeconds;

    }

    currentTimeEl.textContent =
        `${currentMinutes}:${currentSeconds}`;

});



audio.addEventListener("loadedmetadata", () => {

    let durationMinutes =
        Math.floor(audio.duration / 60);

    let durationSeconds =
        Math.floor(audio.duration % 60);

    if(durationSeconds < 10){

        durationSeconds = "0" + durationSeconds;

    }

    durationEl.textContent =
        `${durationMinutes}:${durationSeconds}`;

});

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});



volume.addEventListener("input", () => {

    audio.volume = volume.value;

});
const currentTimeEl =
    document.getElementById("current-time");

const durationEl =
    document.getElementById("duration");

const playlistBtn =
    document.getElementById("playlist-btn");

const playlistContainer =
    document.getElementById("playlist-container");

const autoplayBtn =
    document.getElementById("autoplay-btn");

let autoplay = true;


audio.addEventListener("ended", () => {

    if(autoplay){

        nextBtn.click();

    }

});


playlistBtn.addEventListener("click", () => {

    if(
        playlistContainer.style.display === "block"
    ){

        playlistContainer.style.display = "none";

    }

    else{

        playlistContainer.style.display = "block";

    }

});


autoplayBtn.addEventListener("click", () => {

    autoplay = !autoplay;

    if(autoplay){

        autoplayBtn.textContent = "Autoplay: ON";

    }

    else{

        autoplayBtn.textContent = "Autoplay: OFF";

    }

});


volumeBtn.addEventListener("click", () => {

    if(
        volumeContainer.style.display === "block"
    ){

        volumeContainer.style.display = "none";

    }

    else{

        volumeContainer.style.display = "block";

    }

});
