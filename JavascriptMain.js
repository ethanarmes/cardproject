
function playGame() {
    let colours = ['R', 'B', 'Y'];
    let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let deck = getDeck(colours, values);
    let shuffledDeck = shuffle(deck);
    showDeck(shuffledDeck);
}


//Creates an array(deck) of objects(cards)
function getDeck(colours, values) {
    //debugger;
    let deck = new Array();
    for (let i = 0; i < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Suit: colours[i], Value: values[j]};
            deck.push(card);
        }
    }
    return deck;
}

//Shuffles the deck randomly
function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let random1 = Math.floor((Math.random() * deck.length));
        let random2 = Math.floor((Math.random() * deck.length));
        let temp = deck[random1];
        deck[random1] = deck[random2];
        deck[random2] = temp;
    }
    console.log(deck);
    return deck;
}

function showDeck(deck) {
    //debugger;
    let deckHTML = '<table><tr>';        //Creates a string consisting of table tags tr=table row, td=table data
    for (let i = 0; i< deck.length; i++) {   //loops through the array and builds a string of cards to display
        let card = deck[i].Suit + deck[i].Value;      //Card suit and value
        deckHTML += `<td>${card}</td>`;  //template literal allows the card value to be added to the string - uses backticks `
    }
    deckHTML = deckHTML + '</tr></table>';
    document.getElementById("deck").innerHTML = deckHTML;   //displays the deck of cards
}

function pickCards(shuffledDeck) {
    let playerOneDeck = new Array();
    let playerTwoDeck = new Array();
    i = 1;
    while (i < shuffledDeck.length)
        if (shuffledDeck[i - 1].Suit === shuffledDeck[i].Suit) then
    if (shuffledDeck[i - 1].Value > shuffledDeck[i].Value) then
    playerOneDeck.push({Suit: shuffledDeck[i - 1].Suit, Value: shuffledDeck[i - 1].Value})
    playerOneDeck.push({Suit: shuffledDeck[i].Suit, Value: shuffledDeck[i].Value})
else
    playerTwoDeck.push({Suit: shuffledDeck[i - 1].Suit, Value: shuffledDeck[i - 1].Value})
    playerTwoDeck.push({Suit: shuffledDeck[i].Suit, Value: shuffledDeck[i].Value})
    end
    if
        end if
        end while
            //There will always be a winner!
            if (playerOneDeck.length > playerTwoDeck.length) then
    displayDeck(“Player
    One”,
    playerOneDeck
)
else
    displayDeck(“Player
    Two”,
    playerTwoDeck
)
    end
    if
        }
