const state = { temp: 36.0 };

function updateSovereignSystem() {
    const clock = document.getElementById('sovereign-clock');
    if (clock) {
        const now = new Date();
        clock.innerText = now.getHours().toString().padStart(2, '0') + ":" + 
                          now.getMinutes().toString().padStart(2, '0') + ":" + 
                          now.getSeconds().toString().padStart(2, '0');
    }
    state.temp = (35.5 + Math.random() * 2).toFixed(1);
    const tempEl = document.getElementById('temp');
    if (tempEl) tempEl.innerText = `${state.temp}°C`;
}

function launchApp(appName) {
    const message = document.getElementById('message');
    if (appName === 'Deep-Notes') {
        document.getElementById('notes-app').style.display = 'flex';
        const saved = localStorage.getItem('ethicsos_note');
        if (saved) document.getElementById('note-input').value = saved;
    } else {
        message.innerText = `Booting ${appName}... (Coming Soon)`;
    }
}

function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
}

function saveNote() {
    const content = document.getElementById('note-input').value;
    localStorage.setItem('ethicsos_note', content);
    document.getElementById('save-status').innerText = "Saved Locally!";
    setTimeout(() => { document.getElementById('save-status').innerText = "Auto-save active"; }, 2000);
}

function systemAction(type) {
    if (type === 'home') document.getElementById('notes-app').style.display = 'none';
}

setInterval(updateSovereignSystem, 1000);

// REGISTER PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log("PWA Active"))
        .catch(err => console.log("PWA Failed"));
    });
}
