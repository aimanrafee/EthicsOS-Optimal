// EthicsOS Optimal - System Logic (Solid 2050)
const state = {
    temp: 36.0,
    isFocus: true,
    notifications: 0
};

/**
 * 1. SOVEREIGN SYSTEM HEARTBEAT
 * Menguruskan jam, pemantauan suhu real-time, dan amaran kesihatan hardware.
 */
function updateSovereignSystem() {
    // Kemaskini Jam (Sovereign Clock)
    const now = new Date();
    const clockElement = document.getElementById('sovereign-clock');
    if (clockElement) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;

        // Logik Anti-Fatigue (Warna jam bertukar setiap 20 minit)
        if (minutes === "20" || minutes === "40" || minutes === "00") {
            clockElement.style.color = "#ffb703"; // Amaran rehat mata
        } else {
            clockElement.style.color = "#81b29a"; // Sage Green
        }
    }

    // Simulasi Data Thermal dari Tier-Core (Ceiling 38°C)
    state.temp = (35.5 + Math.random() * 2.5).toFixed(1);
    const tempElement = document.getElementById('temp');
    if (tempElement) {
        tempElement.innerText = `${state.temp}°C`;
        
        if (state.temp >= 37.8) {
            tempElement.style.color = "#e63946"; // Amaran Panas
        } else {
            tempElement.style.color = "#e0e0e0"; 
        }
    }
}

/**
 * 2. APP LAUNCHER LOGIC
 * Menguruskan pembukaan aplikasi daripada App Grid.
 */
function launchApp(appName) {
    const message = document.getElementById('message');
    
    // Kesan visual semasa 'loading'
    message.style.opacity = "0.5";
    message.innerText = `Launching ${appName}...`;
    message.style.color = "#81b29a";

    setTimeout(() => {
        message.style.opacity = "1";
        if(appName === 'Bio-Monitor') {
            message.innerText = `[CORE] Temp: ${state.temp}°C. Hardware Status: Optimal.`;
        } else if(appName === 'Vault') {
            message.innerText = "Vault: Neural-Encryption active. No leaks detected.";
        } else if(appName === 'Neural') {
            message.innerText = "Neural: Algorithm 2050 is syncing with Local Core.";
        } else if(appName === 'Settings') {
            message.innerText = "Settings: Thermal limit fixed at 38°C.";
        } else {
            message.innerText = `${appName} is operating in Sovereign Mode.`;
        }
    }, 800);
}

/**
 * 3. SYSTEM ACTIONS (NAVIGATION)
 * Menguruskan butang navigasi Home, Back, dan Recent Tasks.
 */
function systemAction(type) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    // Simulasi Haptic Feedback (Visual Shake)
    container.style.transform = "scale(0.98)";
    setTimeout(() => container.style.transform = "scale(1)", 150);

    if (type === 'home') {
        message.innerText = "System: Sovereign Home Active.";
        document.body.style.backgroundColor = "#1a1a1a";
    } else if (type === 'back') {
        message.innerText = "System: Back to previous process.";
    } else if (type === 'recent') {
        message.innerText = "System: Listing active Sovereign tasks...";
    }
}

/**
 * 4. FOCUS MODE INTERACTION
 */
function takeBreak() {
    const messageElement = document.getElementById('message');
    const quotes = [
        "Talk is cheap. Show me the code. - Linus",
        "Data is the soul. Keep it sovereign.",
        "Ethics in code, peace in mind.",
        "Respect biological limits. Take a breath."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    messageElement.style.opacity = "0";
    setTimeout(() => {
        messageElement.innerText = randomQuote;
        messageElement.style.opacity = "1";
    }, 300);

    document.body.style.backgroundColor = "#141e1b"; 
}

// Menjalankan Heartbeat Sistem
setInterval(updateSovereignSystem, 1000);

// Mula sistem
updateSovereignSystem();
console.log("EthicsOS Optimal: Full Mobile Logic Initialized.");
