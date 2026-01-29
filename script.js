// EthicsOS Optimal - System Logic (Solid 2050)
const state = {
    temp: 36.0,
    isFocus: true,
    notifications: 0
};

/**
 * 1. SOVEREIGN SYSTEM HEARTBEAT
 * Menguruskan jam, pemantauan suhu real-time, dan logik kesihatan mata.
 */
function updateSovereignSystem() {
    // Kemaskini Jam (Sovereign Clock)
    const now = new Date();
    const clockElement = document.getElementById('sovereign-clock');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;

    // Logik Anti-Fatigue (Warna jam bertukar setiap 20 minit)
    if (minutes === "20" || minutes === "40" || minutes === "00") {
        clockElement.style.color = "#ffb703"; // Amaran lembut untuk rehat mata
    } else {
        clockElement.style.color = "#81b29a"; // Warna asal Sage Green
    }

    // Simulasi Data Thermal dari Tier-Core
    // Suhu berubah secara dinamik antara 35.5°C hingga 38.0°C
    state.temp = (35.5 + Math.random() * 2.5).toFixed(1);
    const tempElement = document.getElementById('temp');
    tempElement.innerText = `${state.temp}°C`;

    // Amaran Thermal (Prinsip Solid 2050: Ceiling 38°C)
    if (state.temp >= 37.8) {
        tempElement.style.color = "#e63946"; // Merah (Bahaya Panas)
        console.warn("EthicsOS-Core: Thermal ceiling reached!");
    } else {
        tempElement.style.color = "#e0e0e0"; 
    }
}

/**
 * 2. SYSTEM ACTIONS (NAVIGATION)
 * Menguruskan butang navigasi Home, Back, dan Recent Tasks.
 */
function systemAction(type) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    // Haptic Feedback Simulation (Gegaran Visual)
    container.style.transform = "scale(0.98)";
    setTimeout(() => container.style.transform = "scale(1)", 150);

    if (type === 'home') {
        message.innerText = "System: Returning to Sovereign Home.";
        // Reset visual state
        document.body.style.backgroundColor = "#1a1a1a";
    } else if (type === 'back') {
        message.innerText = "System: Previous state restored.";
    } else if (type === 'recent') {
        message.innerText = "System: Scanning active Sovereign tasks...";
    }
}

/**
 * 3. USER INTERACTION
 * Fungsi untuk butang Focus Session.
 */
function takeBreak() {
    const messageElement = document.getElementById('message');
    const quotes = [
        "Talk is cheap. Show me the code. - Linus",
        "Data is the soul. Keep it sovereign.",
        "Hardware is finite. Software is eternal.",
        "Ethics in code, peace in mind.",
        "Respect biological limits. Take a breath."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Animasi pertukaran teks yang lancar
    messageElement.style.opacity = "0";
    setTimeout(() => {
        messageElement.innerText = randomQuote;
        messageElement.style.opacity = "1";
    }, 300);

    // Simulasi kesan menenangkan pada latar belakang
    document.body.style.backgroundColor = "#141e1b"; 
}

// Menjalankan "Nadi" Sistem setiap 1 saat
setInterval(updateSovereignSystem, 1000);

// Inisialisasi awal semasa sistem mula
updateSovereignSystem();
console.log("EthicsOS Optimal Tier: Sovereign System Operational.");
