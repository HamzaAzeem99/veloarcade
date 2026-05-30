function playGame(system, gameUrl) {
    // 1. Configurations set karein
    window.EJS_language = "en"; 
    window.EJS_player = '#game-player';
    window.EJS_biosUrl = '';
    window.EJS_gameUrl = gameUrl;
    window.EJS_core = system;
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';

    // 🔥 AUDIO AUR PERFORMANCE FIXES (Yeh lines awaaz ko bilkul theek kar dengi)
    window.EJS_startOnKeypress = true; // User ke click karne par audio context sahi se shuru hota hai
    window.EJS_FrameSkip = 1;          // Agar game lag kare toh frameskip kare taaki audio smoothly chale
    window.EJS_volume = 0.8;           // Default volume thoda kam (80%) taaki speaker phate na

    // 2. Popup ko display karein
    document.getElementById('emulator-popup').style.display = 'block';

    // 3. Purani script ko remove karein
    let oldScript = document.getElementById('emulator-js-loader');
    if (oldScript) {
        oldScript.remove();
    }

    // 4. Fresh script load karein
    let script = document.createElement('script');
    script.id = 'emulator-js-loader';
    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.head.appendChild(script);
}

function closeGame() {
    document.getElementById('emulator-popup').style.display = 'none';
    document.getElementById('game-player').innerHTML = '';
    location.reload();
}

function filterGames() {
    let input = document.getElementById('gameSearch').value.toLowerCase();

    // Filter Series Categories
    let cards = document.getElementById('categoryContainer').getElementsByClassName('category-card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

    // Filter Popular Hits Grid
    let popCards = document.getElementsByClassName('pop-card');
    for (let i = 0; i < popCards.length; i++) {
        let popTitle = popCards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (popTitle.includes(input)) {
            popCards[i].style.display = "";
        } else {
            popCards[i].style.display = "none";
        }
    }
}