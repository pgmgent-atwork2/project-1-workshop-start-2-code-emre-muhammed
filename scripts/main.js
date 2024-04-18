const $gameBoard = document.querySelector(".game-board");

const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];

// to keep track of the cards
let firstCard = null;
// to keep track of the second card
let secondCard = null;

// to prevent clicking on more than 2 cards
let lockBoard = false;

// shuffeling the symbols
const shuffledSymbols = symbols.sort(() => Math.random() - 0.5);

// flip card function
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    matchingCards();
}

// check of the cards match with each other

function matchingCards() {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
    if (isMatch) {
        disableCards();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}


// create board

const createBoard = () => {
    const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];
    let html = "";
    for (const item of symbols) {
        html +=
            `
            <div class="card">${item}</div>
           `;

    };
    // Assuming $gameBoard is already defined
    $gameBoard.innerHTML = html; // Use innerHTML to set the HTML content
}




function generateUI() {
   createBoard();
}

generateUI();