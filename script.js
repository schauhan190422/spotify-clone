// alert("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Baby ft.Ludacris - JustinBieber", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "A Thousand Year", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ek Din Teri Rahoon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Grow Old With You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Christmas Tree", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Better To Be You", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Life Goes On", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "I Can Make It Right", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Beautiful In White", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Without Me", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//Handel play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;

    }
})

//Listen to event
audioElement.addEventListener('timeupdate', () => { //update time
    //update seekbar

    //audioElement.currentTime=(Provide the current time of audio (at which point audio is playing))
    progress = parseInt((audioElement.currentTime / audioElement.duration * 100));
    myProgressBar.value = progress;

})


//to move the song accoding to progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    })
})

//next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})

//previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})