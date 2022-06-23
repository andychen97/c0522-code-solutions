/* exported game */

/*
 - define a function with 2 parameters (ArrayOfPlayerName, amountOfCards)
 - generate a deck of cards with their values (A = 11, and J, Q, K = 10)
 - shuffle the deck
 - give each player the amount of cards specified in the parameter
 - check for winner
 - if there is a tie, do a tie breaker game
 - return winner
*/

console.log('Lodash is loaded:', typeof _ !== 'undefined');

var suits = ['diamond', 'club', 'heart', 'spade'];
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var numericValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function game(ArrayOfPlayerName, amountOfCards) {
  var deckOfCards = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var cards = {
        suit: suits[i],
        value: values[j],
        numericValue: numericValue[j]
      };
      deckOfCards.push(cards);
    }
  }

  var cardIndex = [];
  var shuffledCards = [];
  for (var k = 0; k < deckOfCards.length; k++) {
    var value = Math.floor(Math.random() * 52);
    if (!(cardIndex.includes(value))) {
      cardIndex.push(value);
      shuffledCards.push(deckOfCards[cardIndex[k]]);
    } else {
      k--;
    }
  }

  var shuffledIndex = 0;
  var allPlayers = [];
  var winningTotal = 0;
  var winner;
  for (var l = 0; l < ArrayOfPlayerName.length; l++) {
    var currentHand = [];
    var totalValue = 0;
    for (var m = 0; m < amountOfCards; m++) {
      currentHand.push(shuffledCards[shuffledIndex]);
      totalValue += shuffledCards[shuffledIndex].numericValue;
      shuffledIndex++;
    }
    var player = {
      name: ArrayOfPlayerName[l],
      cards: currentHand,
      totalValue
    };
    allPlayers.push(player);

    if (player.totalValue > winningTotal) {
      winningTotal = player.totalValue;
      winner = player;
    }
  }
  var extraRounds = [];
  for (var n = 0; n < allPlayers.length; n++) {
    if (allPlayers[n].totalValue === winningTotal && allPlayers[n] !== winner) {
      extraRounds.push(allPlayers[n].name);
    }
  }
  if (extraRounds.length > 0) {
    extraRounds.push(winner.name);
    console.log('Oh no! There was a tie!', extraRounds);
    game(extraRounds, amountOfCards);
  }
  return 'The winner of this round is ' + winner.name + '!';
}

game(['Andy', 'Fred', 'Sharon', 'Bryan'], 5);
