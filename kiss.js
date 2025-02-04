
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "REALLLY? AHH THANK YOU!! <3D";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";

    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width - 10; // Leave 10px margin
    const maxY = window.innerHeight - noBtnRect.height - 10;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});