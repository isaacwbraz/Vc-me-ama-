const messages = [
    "Você tem crtz?",
    "crtz crtz?",
    "vc disse sim?",
    "nenem pls...",
    "pense um pouco mlhr :)",
    "se dizer naum, vou ficar triste...",
    "estou triste...",
    "estou mt mt mt mt triste...",
    "okay, vou parar de perguntar...",
    "estou brincando, vc vai dizer sim. ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}