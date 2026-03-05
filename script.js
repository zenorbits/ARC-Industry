let totalEnergy = 100;

function changeEnergy(id, value) {
    let element = document.getElementById(id);
    let current = parseInt(element.innerText);

    // Calculate current total used energy
    let prop = parseInt(document.getElementById("prop").innerText);
    let def = parseInt(document.getElementById("def").innerText);
    let nav = parseInt(document.getElementById("nav").innerText);
    let com = parseInt(document.getElementById("com").innerText);
    let warning = document.getElementById('warning');

    let used = prop + def + nav + com;

    // Prevent going below 0
    if (current + value < 0) {
        return warning.innerText = "Can't go below energy level"
    };

    // Prevent exceeding totalEnergy
    if (used + value > totalEnergy) return;

    element.innerText = current + value;

    updateEnergy();
}

function updateEnergy() {
    let prop = parseInt(document.getElementById("prop").innerText);
    let def = parseInt(document.getElementById("def").innerText);
    let nav = parseInt(document.getElementById("nav").innerText);
    let com = parseInt(document.getElementById("com").innerText);

    let used = prop + def + nav + com;
    let remaining = totalEnergy - used;

    document.getElementById("remaining").innerText = remaining;

    if (remaining < 0) {
        document.getElementById("remaining").innerText = 0;
        document.getElementById("warning").innerText = "⚠ Energy Overload!";
    } else {
        document.getElementById("warning").innerText = "System Stable";
    }
}