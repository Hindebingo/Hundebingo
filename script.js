// script.js
document.addEventListener('DOMContentLoaded', function() {
    // List of dog breeds in German with corresponding emojis
    const dogBreeds = [
        { name: "Labrador", emoji: "🐕" },
        { name: "Schäferhund", emoji: "🐕‍🦺" },
        { name: "Golden Retriever", emoji: "🐕" },
        { name: "Dackel", emoji: "🐾" },
        { name: "Beagle", emoji: "🐕" },
        { name: "Pudel", emoji: "🐩" },
        { name: "Mops", emoji: "🐶" },
        { name: "Corgi", emoji: "🐕" },
        { name: "Chihuahua", emoji: "🐶" },
        { name: "Rottweiler", emoji: "🐺" },
        { name: "Dalmatiner", emoji: "🐕" },
        { name: "Bernersennenhund", emoji: "🐕" }
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
            card.innerHTML = `
                <span class="dog-emoji">${shuffledBreeds[i].emoji}</span>
                <span class="dog-name">${shuffledBreeds[i].name}</span>
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
    document.getElementById('reset-button').addEventListener('click', createBingoBoard);

    // Initialize the bingo board when the page loads
    createBingoBoard();
});