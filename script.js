/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);

});


/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();
        musicButton.innerHTML = "🎵";
        musicPlaying = false;

    } else {

        music.play()
            .then(() => {

                musicButton.innerHTML = "🔊";
                musicPlaying = true;

            })
            .catch(() => {

                alert("Tap again to start the music ❤️");

            });

    }

});


/* =========================
   START EXPERIENCE
========================= */

function startJourney() {

    music.play()
        .then(() => {

            musicPlaying = true;
            musicButton.innerHTML = "🔊";

        })
        .catch(() => {});

    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

    createHeartExplosion();

}


/* =========================
   WISH BUTTON
========================= */

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click", () => {

    wishMessage.style.display = "block";

    wishButton.innerHTML = "Wish Sent ❤️";

    wishButton.disabled = true;

    createHeartExplosion();

});


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const container = document.getElementById("heartBurst");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "✨",
        "🥹"
    ];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            Math.random() * 20 + "vh";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        heart.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

}


/* =========================
   RANDOM FLOATING HEARTS
========================= */

setInterval(() => {

    if (Math.random() > 0.5) {

        const heart = document.createElement("div");

        heart.className = "heart";

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "✨"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-20px";

        heart.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4500);

    }

}, 1200);


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll(
    ".reason, .timeline-item, .photo-card, .birthday-card, .letter"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "1s ease";

    observer.observe(element);

});


/* =========================
   PHOTO CLICK
========================= */

document.querySelectorAll(".photo-card img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.95)";
        overlay.style.zIndex = "10000";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "20px";

        const image = document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "100%";
        image.style.maxHeight = "90vh";
        image.style.objectFit = "contain";
        image.style.borderRadius = "15px";

        overlay.appendChild(image);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});


/* =========================
   RESTART
========================= */

function restartExperience() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHeartExplosion();

    setTimeout(() => {

        location.reload();

    }, 800);

}


/* =========================
   TAP ANYWHERE
========================= */

document.addEventListener("click", (event) => {

    if (event.target.closest("button")) {
        return;
    }

    const spark = document.createElement("div");

    spark.innerHTML = "❤️";

    spark.style.position = "fixed";
    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    spark.style.pointerEvents = "none";
    spark.style.zIndex = "9999";
    spark.style.fontSize = "18px";
    spark.style.animation = "heartFly 2s linear forwards";

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 2000);

});