// carousels

const carousel = [...document.querySelectorAll(".carousel img")];
let carouselImageIndex = 0;
const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if (carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }
    carousel[carouselImageIndex].classList.toggle('active');
}
setInterval(() => {
    changeCarousel();
}, 3000);

//navigations

//toggling music player

const musicPlayerSection = document.querySelector('.music-player-section');

let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    // checking for double click manually idk why default dbclick event was not working with this project If you know what could the problem Kindly tell me in the discussion below
    if (clickCount >= 2) {
        musicPlayerSection.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250);
})

// back from music player

const backToHomeBtn = document.querySelector('#player .back-btn');

backToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
})

//access playlist

const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('#player .nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
})

// back from playlist to music player

const backToMusicPlayer = document.querySelector('.playlist .back-btn-p');

backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
})

//navigation done 

// music
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');

repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active');
})

// volume section

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
})