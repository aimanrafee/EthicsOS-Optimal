// Logik Utama EthicsOS
const state = {
    temp: 36,
    isFocus: true,
    notifications: 0
};

function updateSovereignSystem() {
    // 1. Kemaskini Jam
    const now = new Date();
    document.getElementById('sovereign-clock').innerText = now.toLocaleTimeString('en-GB');

    // 2. Simulasi Data dari CORE (Suhu)
    // Suhu akan berubah sedikit secara rawak antara 35-38 darjah
    state.temp = (35 + Math.random() * 3).toFixed(1);
    const tempElement = document.getElementById('temp');
    tempElement.innerText = `${state.temp}°C`;

    // Amaran jika suhu mendekati had 38°C (Prinsip Solid 2050)
    if (state.temp > 37.5) {
        tempElement.style.color = "#e63946"; // Merah amaran
    } else {
        tempElement.style.color = "#81b29a";
    }
}

function takeBreak() {
    const quotes = [
        "Talk is cheap. Show me the code. - Linus",
        "Data is the soul. Keep it sovereign.",
        "Hardware is finite. Software is eternal.",
        "Ethics in code, peace in mind."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const messageElement = document.getElementById('message');
    
    // Animasi maklum balas (Haptic Feedback Simulation)
    messageElement.style.opacity = "0";
    setTimeout(() => {
        messageElement.innerText = randomQuote;
        messageElement.style.opacity = "1";
    }, 300);
}

// Jalankan sistem setiap saat (Heartbeat)
setInterval(updateSovereignSystem, 1000);
updateSovereignSystem();
