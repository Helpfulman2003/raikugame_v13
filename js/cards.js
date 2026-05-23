// Full array of possible cards built from the Raiku art set
var cards;

function createDeck() {
  var ranks = [
    { name: '2', value: 2, label: '2', srcIndex: 1 },
    { name: '3', value: 3, label: '3', srcIndex: 2 },
    { name: '4', value: 4, label: '4', srcIndex: 3 },
    { name: '5', value: 5, label: '5', srcIndex: 4 },
    { name: '6', value: 6, label: '6', srcIndex: 5 },
    { name: '7', value: 7, label: '7', srcIndex: 6 },
    { name: '8', value: 8, label: '8', srcIndex: 7 },
    { name: '9', value: 9, label: '9', srcIndex: 8 },
    { name: '10', value: 10, label: '10', srcIndex: 9 },
    { name: 'jack', value: 10, label: 'J', srcIndex: 10 },
    { name: 'queen', value: 10, label: 'Q', srcIndex: 11 },
    { name: 'king', value: 10, label: 'K', srcIndex: 12 },
    { name: 'ace', value: 11, label: 'A', srcIndex: 13 },
  ];

  var suits = [
    { name: 'clubs', glyph: '♣' },
    { name: 'diamonds', glyph: '♦' },
    { name: 'hearts', glyph: '♥' },
    { name: 'spades', glyph: '♠' },
  ];

  var deck = [];

  ranks.forEach(function (rank) {
    suits.forEach(function (suit) {
      deck.push({
        suit: suit.name,
        name: rank.name,
        src: 'raiku' + rank.srcIndex + '.png',
        value: rank.value,
        label: rank.label,
        suitGlyph: suit.glyph,
      });
    });
  });

  return deck;
}

function getCards() {
  cards = createDeck();
}
