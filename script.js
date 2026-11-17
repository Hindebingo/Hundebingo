// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize darkmode from localStorage
    const darkmodeCheckbox = document.getElementById('darkmode-checkbox');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkmode = localStorage.getItem('darkmode');
    
    // Set initial state: stored preference, or system preference, default to light
    if (storedDarkmode === 'true') {
        document.body.classList.add('dark-mode');
        darkmodeCheckbox.checked = true;
    } else if (storedDarkmode === 'false') {
        darkmodeCheckbox.checked = false;
    } else if (prefersDark) {
        document.body.classList.add('dark-mode');
        darkmodeCheckbox.checked = true;
    }
    
    // Toggle darkmode
    darkmodeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkmode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkmode', 'false');
        }
    });

    // List of dog breeds in German with corresponding emojis.
    // Optional "image": SVG icon that replaces the emoji (emoji stays as fallback).
    const dogBreeds = [
        { name: "Labrador", emoji: "🐕", image: "dogs/labrador.svg" },
        { name: "Schäferhund", emoji: "🐕‍🦺", image: "dogs/schaeferhund.svg" },
        { name: "Golden Retriever", emoji: "🐕", image: "dogs/golden-retriever.svg" },
        { name: "Dackel", emoji: "🐾", image: "dogs/dackel.svg" },
        { name: "Beagle", emoji: "🐕", image: "dogs/beagle.svg" },
        { name: "Pudel", emoji: "🐩", image: "dogs/pudel.svg" },
        { name: "Mops", emoji: "🐶", image: "dogs/mops.svg" },
        { name: "Corgi", emoji: "🐕", image: "dogs/corgi.svg" },
        { name: "Chihuahua", emoji: "🐶", image: "dogs/chihuahua.svg" },
        { name: "Rottweiler", emoji: "🐺", image: "dogs/rottweiler.svg" },
        { name: "Dalmatiner", emoji: "🐕", image: "dogs/dalmatiner.svg" },
        { name: "Berner\u00ADsennenhund",  // \u00AD = weiche Trennung (Zeilenumbruch nach "Berner-")
         emoji: "🐕", image: "dogs/bernersennenhund.svg" }
    ];

    // Create bingo board
    function createBingoBoard() {
        const shuffledBreeds = shuffleArray([...dogBreeds]).slice(0, 9);
        const bingoBoard = document.querySelector('.bingo-board');

        // Clear existing cards
        bingoBoard.innerHTML = '';

        // Create new cards
        for (let i = 0; i < 9; i++) {
            const card = document.createElement('div');
            card.className = 'bingo-card';
            const breed = shuffledBreeds[i];
            const icon = breed.image
                ? `<img src="${breed.image}" alt="${breed.name}" draggable="false">`
                : breed.emoji;
            card.innerHTML = `
                <span class="dog-emoji">${icon}</span>
                <span class="dog-name">${breed.name}</span>
            `;
            card.addEventListener('click', function() {
                this.classList.toggle('struck-off');
                checkWinCondition();
            });
            bingoBoard.appendChild(card);
        }
    }

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to check win condition
    function checkWinCondition() {
        const cards = document.querySelectorAll('.bingo-card');
        const positions = [];

        // Get positions of struck-off cards
        cards.forEach((card, index) => {
            if (card.classList.contains('struck-off')) {
                positions.push(index);
            }
        });

        // Check all possible winning combinations
        const winCombinations = [
            [0, 1, 2],    // Top row
            [3, 4, 5],    // Middle row
            [6, 7, 8],    // Bottom row
            [0, 3, 6],    // Left column
            [1, 4, 7],    // Middle column
            [2, 5, 8],    // Right column
            [0, 4, 8],    // Diagonal top-left to bottom-right
            [2, 4, 6]     // Diagonal top-right to bottom-left
        ];

        for (const combination of winCombinations) {
            const isWinning = combination.every(pos => positions.includes(pos));
            if (isWinning) {
                showCongratulations();
                return;
            }
        }
    }

    // Function to show congratulations message
    function showCongratulations() {
        document.getElementById('congratulations').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('congratulations').classList.add('hidden');
        }, 3000);
    }

    // Event listener for reset button
    document.getElementById('reset-button').addEventListener('click', function() {
        document.getElementById('congratulations').classList.add('hidden');
        createBingoBoard();
    });

    // Initialize the bingo board when the page loads
    createBingoBoard();
});