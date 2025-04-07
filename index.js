function afficherAstuce() {
    const tips = [
        "Tu peux utiliser un fichier README.md pour décrire ton projet.",
        "Le fichier d'entrée doit s'appeler index.html pour être reconnu.",
        "Tu peux utiliser une branche nommée 'gh-pages' si tu veux séparer le code source et le site."
    ];
    const index = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerText = tips[index];
}
