function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('sovereign-clock');
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;

    // Logik 20-20-20: Setiap minit ke-20 dan ke-40, warna jam bertukar
    // Ini adalah peringatan visual "Anti-Fatigue"
    if (minutes == "20" || minutes == "40" || minutes == "00") {
        clockElement.style.color = "#ffb703"; // Warna amaran lembut
        document.getElementById('message').innerText = "System: Time for a 20-second break. Look 20 feet away.";
    } else {
        clockElement.style.color = "#81b29a"; // Warna asal (Sage Green)
    }
}

// Jalankan jam setiap saat
setInterval(updateClock, 1000);

// Fungsi asal yang diperkukuhkan
function takeBreak() {
    const message = document.getElementById('message');
    const quotes = [
        "Talk is cheap. Show me the code. - Linus Torvalds",
        "Data sovereignty is a human right.",
        "Stay focus, stay sovereign.",
        "Your mind is the ultimate hardware. Protect it."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    message.innerText = randomQuote;
    
    // Kesan "Breathe" pada UI
    document.querySelector('.glass-container').style.boxShadow = "0 8px 64px 0 rgba(129, 178, 154, 0.2)";
    setTimeout(() => {
        document.querySelector('.glass-container').style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";
    }, 2000);
}

// Inisialisasi awal
updateClock();
