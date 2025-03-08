// Defina a data de início da jornada (27 de março de 2022)
const startDate = new Date("2022-03-27T00:00:00");

function updateTimer() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Ajuste para valores negativos
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Inicializa o contador imediatamente

// Função para criar corações caindo
function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 500);
}

createHearts();

// Código do carrossel (ajustado para 6 fotos)
let currentPhotoIndex = 0;
const photos = document.querySelectorAll(".carousel .photo");

function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.classList.remove("active");
        if (i === index) {
            photo.classList.add("active");
        }
    });
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

// Passa as fotos automaticamente a cada 3 segundos
setInterval(nextPhoto, 3000);

// Inicializa o carrossel com a primeira foto
showPhoto(currentPhotoIndex);
