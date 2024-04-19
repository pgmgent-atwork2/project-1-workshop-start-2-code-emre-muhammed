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
            <div class="card-container">
                <div class="card">${item}</div>
            </div>
           `;

    };
    // Assuming $gameBoard is already defined
    $gameBoard.innerHTML = html; // Use innerHTML to set the HTML content
}

// flip the card
function flipCard() {
    // getting the html element
    const $cardContainer = document.querySelector(".card-container");
    // adding event listener to the card container
    $cardContainer.addEventListener("click", () => {
        $cardContainer.classList.toggle("flip");
        console.log("clicked");
    });
}




function generateUI() {
   createBoard();
   flipCard();
}

generateUI();