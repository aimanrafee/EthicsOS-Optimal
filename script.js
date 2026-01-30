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
 * 2. APP LAUNCHER & OVERLAY LOGIC
 * Handles the launching of apps and managing the Deep-Notes local vault.
 */
function launchApp(appName) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    // Haptic Feedback Simulation
    container.style.transform = "scale(0.97)";
    setTimeout(() => container.style.transform = "scale(1)", 100);

    if (appName === 'Deep-Notes') {
        const notesApp = document.getElementById('notes-app');
        notesApp.style.display = 'flex';
        
        // Load data from Local Storage (Sovereign Data)
        const savedNote = localStorage.getItem('ethicsos_note');
        if (savedNote) {
            document.getElementById('note-input').value = savedNote;
        }
        message.innerText = "Deep-Notes: Secure Local Vault opened.";
    } else {
        // Animation for non-active apps
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
                case 'Moments':
                    message.innerText = "Moments: Encrypted capture ready. Hardware optimized.";
                    message.style.color = "#e0e0e0";
                    break;
                case 'Ethics-AI':
                    message.innerText = "Ethics-AI: Local Edge-Inference active. 100% Private.";
                    message.style.color = "#ffb703";
                    break;
                default:
                    message.innerText = `${appName} is operating in Sovereign Mode.`;
            }
        }, 600);
    }
}

// Close App Overlays
function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
    document.getElementById('message').innerText = "System: Process hibernated.";
}

// Secure Storage Logic
function saveNote() {
    const noteContent = document.getElementById('note-input').value;
    const status = document.getElementById('save-status');
    
    // Save to LocalStorage (Offline Data Sovereignty)
    localStorage.setItem('ethicsos_note', noteContent);
    
    status.innerText = "Data Secured in Local Vault!";
    status.style.color = "#ffb703";
    
    setTimeout(() => {
        status.innerText = "Auto-save active";
        status.style.color = "#81b29a";
    }, 2000);
}

// Auto-save Interval (Every 5 seconds)
setInterval(() => {
    const notesApp = document.getElementById('notes-app');
    if (notesApp && notesApp.style.display === 'flex') {
        const content = document.getElementById('note-input').value;
        localStorage.setItem('ethicsos_note', content);
        console.log("EthicsOS: Background Auto-save completed.");
    }
}, 5000);

/**
 * 3. SYSTEM ACTIONS (NAVIGATION)
 */
function systemAction(type) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    container.style.transform = "scale(0.98)";
    setTimeout(() => container.style.transform = "scale(1)", 150);

    if (type === 'home') {
        message.innerText = "System: Returning to Sovereign Hub.";
        document.body.style.backgroundColor = "#1a1a1a";
        // Close all overlays on home press
        document.getElementById('notes-app').style.display = 'none';
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
console.log("EthicsOS Optimal: System & Local Vault Fully Initialized.");
