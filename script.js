// EthicsOS Optimal - System Logic (Solid 2050)
const state = {
    temp: 36.0,
    isFocus: true,
    notifications: 0
};

/**
 * 1. SOVEREIGN SYSTEM HEARTBEAT
 * Menguruskan jam, suhu real-time, dan amaran kesihatan hardware.
 */
function updateSovereignSystem() {
    const clockElement = document.getElementById('sovereign-clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;

        if (minutes === "20" || minutes === "40" || minutes === "00") {
            clockElement.style.color = "#ffb703"; 
        } else {
            clockElement.style.color = "#81b29a"; 
        }
    }

    state.temp = (35.5 + Math.random() * 2.5).toFixed(1);
    const tempElement = document.getElementById('temp');
    if (tempElement) {
        tempElement.innerText = `${state.temp}°C`;
        if (state.temp >= 37.8) {
            tempElement.style.color = "#e63946"; 
        } else {
            tempElement.style.color = "#e0e0e0"; 
        }
    }
}

/**
 * 2. APP LAUNCHER & OVERLAY LOGIC
 */
function launchApp(appName) {
    const message = document.getElementById('message');
    const container = document.querySelector('.glass-container');
    
    container.style.transform = "scale(0.97)";
    setTimeout(() => container.style.transform = "scale(1)", 100);

    if (appName === 'Deep-Notes') {
        const notesApp = document.getElementById('notes-app');
        notesApp.style.display = 'flex';
        
        const savedNote = localStorage.getItem('ethicsos_note');
        if (savedNote) {
            document.getElementById('note-input').value = savedNote;
        }
        message.innerText = "Deep-Notes: Secure Local Vault opened.";
    } else {
        message.style.opacity = "0.5";
        message.innerText = `Booting ${appName}...`;
        message.style.color = "#81b29a";

        setTimeout(() => {
            message.style.opacity = "1";
            switch(appName) {
                case 'Sovereign-Talk':
                    message.innerText = "Talk: P2P link ready. No server active.";
                    break;
                case 'Moments':
                    message.innerText = "Moments: Encrypted capture ready.";
                    break;
                case 'Ethics-AI':
                    message.innerText = "Sovereign AI: Edge-Inference model loaded.";
                    message.style.color = "#ffb703";
                    break;
                default:
                    message.innerText = `${appName} is operating in Sovereign Mode.`;
            }
        }, 600);
    }
}

function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
    document.getElementById('message').innerText = "System: Process hibernated.";
}

function saveNote() {
    const noteContent = document.getElementById('note-input').value;
    const status = document.getElementById('save-status');
    localStorage.setItem('ethicsos_note', noteContent);
    
    status.innerText = "Data Secured in Local Vault!";
    setTimeout(() => {
        status.innerText = "Auto-save active";
    }, 2000);
}

// Auto-save setiap 5 saat
setInterval(() => {
    const notesApp = document.getElementById('notes-app');
    if (notesApp && notesApp.style.display === 'flex') {
        localStorage.setItem('ethicsos_note', document.getElementById('note-input').value);
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
        message.innerText = "System: Sovereign Home Active.";
        document.getElementById('notes-app').style.display = 'none';
    } else if (type === 'back') {
        message.innerText = "System: Back to previous process.";
    } else if (type === 'recent') {
        message.innerText = "System: Scanning active tasks...";
    }
}

/**
 * 4. FOCUS MODE
 */
function takeBreak() {
    const messageElement = document.getElementById('message');
    const quotes = ["Respect biological limits.", "Data is the soul.", "Ethics in code."];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    messageElement.innerText = randomQuote;
    document.body.style.backgroundColor = "#141e1b"; 
}

// Menjalankan Heartbeat
setInterval(updateSovereignSystem, 1000);
updateSovereignSystem();

/**
 * 5. PWA SERVICE WORKER REGISTRATION
 * Pendaftaran diletakkan di bahagian bawah fail.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log("PWA Active", reg.scope))
        .catch(err => console.error("PWA Failed", err));
    });
}
