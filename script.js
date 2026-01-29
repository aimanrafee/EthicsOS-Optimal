// EthicsOS Optimal - System Logic (Solid 2050)
const state = {
    temp: 36.0,
    isFocus: true,
    notifications: 0
};

/**
 * 1. SOVEREIGN SYSTEM HEARTBEAT
 * Manages clock updates, real-time thermal monitoring, and hardware health alerts.
 */
function updateSovereignSystem() {
    // Update Sovereign Clock
    const clockElement = document.getElementById('sovereign-clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;

        // Anti-Fatigue Logic (Visual cue every 20 minutes)
        if (minutes === "20" || minutes === "40" || minutes === "00") {
            clockElement.style.color = "#ffb703"; // Eye-rest alert (Amber)
        } else {
            clockElement.style.color = "#81b29a"; // Sovereign Sage Green
        }
    }

    // Thermal Data Simulation (Solid 2050 Principle: 38°C Ceiling)
    state.temp = (35.5 + Math.random() * 2.5).toFixed(1);
    const tempElement = document.getElementById('temp');
    if (tempElement) {
        tempElement.innerText = `${state.temp}°C`;
        
        if (state.temp >= 37.8) {
            tempElement.style.color = "#e63946"; // Thermal Danger Alert
        } else {
            tempElement.style.color = "#e0e0e0"; 
        }
    }
}

/**
 * 2. APP LAUNCHER LOGIC
 * Handles the launching of apps within the Sovereign Productivity Suite.
 */
function launchApp(appName) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    // Haptic Feedback Simulation (Subtle Scale Effect)
    container.style.transform = "scale(0.97)";
    setTimeout(() => container.style.transform = "scale(1)", 100);

    // Sovereign Loading Animation
    message.style.opacity = "0.5";
    message.innerText = `Booting ${appName}...`;
    message.style.color = "#81b29a";

    setTimeout(() => {
        message.style.opacity = "1";
        
        switch(appName) {
            case 'Sovereign-Talk':
                message.innerText = "Talk: Peer-to-Peer link secured. Zero-Server mode.";
                message.style.color = "#81b29a";
                break;
                
            case 'Deep-Notes':
                message.innerText = "Notes: Markdown engine active. Local storage only.";
                message.style.color = "#e0e0e0";
                break;
                
            case 'Moments':
                message.innerText = "Moments: Encrypted capture ready. Hardware optimized.";
                message.style.color = "#e0e0e0";
                break;
                
            case 'Ethics-AI':
                message.innerText = "Ethics-AI: Local Edge-Inference active. 100% Private.";
                message.style.color = "#ffb703"; // Gold accent for AI
                break;
                
            default:
                message.innerText = `${appName} is operational in Sovereign Mode.`;
                message.style.color = "#e0e0e0";
        }
    }, 600);
}

/**
 * 3. SYSTEM ACTIONS (NAVIGATION)
 * Manages Home, Back, and Recent Tasks behavior.
 */
function systemAction(type) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    // Haptic Feedback Simulation
    container.style.transform = "scale(0.98)";
    setTimeout(() => container.style.transform = "scale(1)", 150);

    if (type === 'home') {
        message.innerText = "System: Returning to Sovereign Hub.";
        document.body.style.backgroundColor = "#1a1a1a";
    } else if (type === 'back') {
        message.innerText = "System: Previous state restored.";
    } else if (type === 'recent') {
        message.innerText = "System: Scanning active Sovereign processes...";
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

/**
 * 5. PWA SERVICE WORKER REGISTRATION
 * Ensures the OS is installable and works offline.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log("EthicsOS: PWA Engine Online", reg.scope))
        .catch(err => console.log("PWA Registration Failed:", err));
    });
}

// Start Heartbeat
setInterval(updateSovereignSystem, 1000);

// Initial System Boot
updateSovereignSystem();
console.log("EthicsOS Optimal: System Fully Initialized.");
