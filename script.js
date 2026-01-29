function takeBreak() {
    const message = document.getElementById('message');
    const tempDisplay = document.getElementById('temp');

    // Simulasi interaksi dengan EthicsOS-Core
    message.innerText = "System: Reminder to blink and rest your eyes.";
    
    // Memberi kesan visual yang lembut
    document.body.style.transition = "background 2s";
    document.body.style.backgroundColor = "#2d3436";

    setTimeout(() => {
        message.innerText = "Eye-strain protection is enabled.";
        document.body.style.backgroundColor = "#1a1a1a";
    }, 5000);
}

console.log("EthicsOS Optimal Tier Initialized.");
