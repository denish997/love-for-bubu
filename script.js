function startLove() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {

        intro.style.display = "none";
        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);
}


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.opacity =
        Math.random() * 0.5 + 0.2;

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.style.color = "#ff6fae";

    heart.style.animation =
        `floatHeart ${Math.random() * 5 + 5}s linear forwards`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


setInterval(createHeart, 700);


/* Add floating-heart animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatHeart {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    15% {
        opacity: 0.7;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);