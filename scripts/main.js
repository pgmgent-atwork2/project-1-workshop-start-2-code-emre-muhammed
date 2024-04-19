const $gameBoard = document.querySelector(".game-board");



const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];

// to keep track of the cards
let firstCard = null;
// to keep track of the second card
let secondCard = null;

// to prevent clicking on more than 2 cards
let lockBoard = false;

// shuffeling the symbols


// check of the cards match with each other

function matchingCards() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
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

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}


// create board
const createBoard = () => {
    const symbols = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍑'];
    let html = "";
    for (const item of symbols) {
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
    if (lockBoard) return;
  
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

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}


function generateUI() {
    createBoard();
    flipCard();
}

generateUI();




