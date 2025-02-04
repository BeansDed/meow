const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const flowerBtn = document.querySelector(".flower-btn");
const muteBtn = document.querySelector("#mute-btn");
const backgroundMusic = document.querySelector("#background-music");

// Set initial volume to 10%
backgroundMusic.volume = 0.05;

// Start music on user interaction (needed for mobile devices)
document.body.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
}, { once: true });

yesBtn.addEventListener("click", () => {
    question.innerHTML = "REALLY? AHH THANK YOU!! <3";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";

    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    flowerBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width - 10;
    const maxY = window.innerHeight - noBtnRect.height - 10;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

flowerBtn.addEventListener("click", () => {
    window.location.href = "flower.html";
});

// Music mute/unmute functionality
muteBtn.addEventListener("click", () => {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteBtn.textContent = "🔊";
    } else {
        backgroundMusic.muted = true;
        muteBtn.textContent = "🔇";
    }
});
