/**
 * Project: EthicsOS-Optimal
 * Module: Anti-Fatigue & System Awareness Logic
 * Vision: Human-Centric Productivity
 */

const ETHICS_STANDARDS = {
    MAX_SCREEN_TIME_MINS: 60,
    CRITICAL_TEMP_CELSIUS: 38.0,
    REST_DURATION_MINS: 5
};

let userActiveMinutes = 0;

/**
 * Monitors system health and user fatigue levels.
 * Triggered every minute.
 */
function monitorWellBeing(currentTemp) {
    userActiveMinutes++;

    console.log(`[STATUS] Active: ${userActiveMinutes}m | Temp: ${currentTemp}°C`);

    // 1. Thermal Awareness Logic
    if (currentTemp > ETHICS_STANDARDS.CRITICAL_TEMP_CELSIUS) {
        displayNotification("System Warming Up", "Applying eco-cooling. Maybe take a 5-minute break?");
        reduceSystemLoad();
    }

    // 2. Anti-Fatigue Logic
    if (userActiveMinutes >= ETHICS_STANDARDS.MAX_SCREEN_TIME_MINS) {
        triggerRestMode();
    }
}

function triggerRestMode() {
    console.warn("[HEALTH] Anti-Fatigue Triggered: Human rest required.");
    alert("Time for a quick stretch! You've been productive for an hour. EthicsOS suggests a 5-minute break.");
    userActiveMinutes = 0; // Reset after rest
}

function reduceSystemLoad() {
    // Logic to dim screen or slow down background processes
    console.log("[ECO] Reducing visual effects to lower thermal footprint.");
}

// Simulated heartbeat every minute
// setInterval(() => monitorWellBeing(32.5), 60000);
