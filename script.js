let totalEnergy = 100;

function changeEnergy(id, value) {
    let element = document.getElementById(id);
    let current = parseInt(element.innerText);

    // Calculate current total used energy
    let prop = parseInt(document.getElementById("prop").innerText);
    let def = parseInt(document.getElementById("def").innerText);
    let nav = parseInt(document.getElementById("nav").innerText);
    let com = parseInt(document.getElementById("com").innerText);

    let used = prop + def + nav + com;

    // Prevent going below 0
    if (current + value < 0) return;

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

    // Update progress bars (percentage of total energy)
    document.getElementById("propBar").style.width = (prop / totalEnergy * 100) + "%";
    document.getElementById("defBar").style.width = (def / totalEnergy * 100) + "%";
    document.getElementById("navBar").style.width = (nav / totalEnergy * 100) + "%";
    document.getElementById("comBar").style.width = (com / totalEnergy * 100) + "%";

    // Update overall reactor bar (remaining energy)
    document.getElementById("overallBar").style.width = (remaining / totalEnergy * 100) + "%";

    // Efficiency status based on allocation
    document.getElementById("propStatus").innerText = getEfficiency(prop);
    document.getElementById("defStatus").innerText = getEfficiency(def);
    document.getElementById("navStatus").innerText = getEfficiency(nav);
    document.getElementById("comStatus").innerText = getEfficiency(com);

    // Warning conditions
    if (remaining === 0) {
        document.getElementById("warning").innerText = "⚠ Maximum Capacity Reached!";
    } else if (remaining <= 10) {
        document.getElementById("warning").innerText = "⚠ Energy Critically Low!";
    } else {
        document.getElementById("warning").innerText = "System Stable";
    }
}

function getEfficiency(value) {
    if (value === 0) return "Efficiency: Low";
    if (value <= 30) return "Efficiency: Medium";
    return "Efficiency: High";
}