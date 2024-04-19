const $gameBoard = document.querySelector(".game-board");



const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑', '🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];

// to keep track of the cards
let firstCard = null;
// to keep track of the second card
let secondCard = null;

// to prevent clicking on more than 2 cards
let lockBoard = false;

// shuffeling the symbols


// check of the cards match with each other

function matchingCards() {
    const firstCardId = firstCard.dataset.data-id;
    const secondCardId = secondCard.dataset.data-id;

    if (firstCardId === secondCardId) {
        disableCards();
    } else {
        unflipCards();
    }
}


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

const test = false
// create board
const createBoard = () => {
    const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];
    const symbolsWithIds = symbols.map((emoji, index) => {
        return {
            id: `emoji_${index}`,
            symbol: emoji
        };
    });
    const doubleSymbols = [...symbolsWithIds, ...symbolsWithIds]
    const shuffledSymbols1 = doubleSymbols.sort(() => Math.random() - 0.5);
    let html = "";
    for (const item of shuffledSymbols1) {
        html +=
            `
            <div class="card-container" data-id=${item.id} >
                <div class="card-hidder"></div>
                <div class="card">${item.symbol}</div>
            </div>
           `;

    };
    // Assuming $gameBoard is already defined
    $gameBoard.innerHTML = html; // Use innerHTML to set the HTML content
}

// flip the cards
function flipCard() {
    // getting the html element
    const $cardContainers = document.querySelectorAll(".card-container");

    $cardContainers.forEach($cardContainer => {
        // adding event listener to each card
        $cardContainer.addEventListener("click", () => {
            $cardContainer.classList.toggle("flip");
            console.log("clicked");
        });
        
    });
}


function generateUI() {
    createBoard();
    flipCard();
}

generateUI();

