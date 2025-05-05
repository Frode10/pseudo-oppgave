// viser skjult teskt i html
document.querySelector(".skjult-tekst-btn").addEventListener("click", () => {
    const melding = document.getElementById("melding");
    melding.style.display = melding.style.display === "none" ? "block" : "none";
});

// legger til ny i listen
document
    .querySelector(".legg-til-element-btn")
    .addEventListener("click", () => {
        const ny = document.createElement("li");
        ny.textContent = "Ny pseudo-basert teknikk";
        document.querySelector("ul").appendChild(ny);
    });

// alert button
document.querySelector(".alert").addEventListener("click", () => {
    alert("Du trykket på knappen!");
});

// Skriv noe... og vis teksten
document.querySelector(".skriv-noe").addEventListener("click", () => {
    const input = document.getElementById("input-field").value.trim();
    const output = document.getElementById("output");

    if (input) {
        output.textContent = `Du skrev: "${input}"`;
    } else {
        output.textContent = "Skriv inn noe først!";
    }
});
