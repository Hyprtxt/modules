const suits = ["♦", "♣", "♥", "♠"],
  values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"],
  setupCards = (array) => {
    for (let suit_index = 0; suit_index < suits.length; suit_index++) {
      for (let value_index = 0; value_index < values.length; value_index++) {
        array.push(suits[suit_index] + values[value_index]);
      }
    }
    return array;
  },
  // http://bost.ocks.org/mike/shuffle/
  shuffle = (array) => {
    var counter = array.length,
      temp,
      index;
    while (counter > 0) {
      index = (Math.random() * counter--) | 0;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  },
  getNewCards = () => shuffle(setupCards([])),
  isCard = (maybe_card) => {
    // console.log(typeof maybe_card, maybe_card.length)
    if (typeof maybe_card !== "string") {
      return false;
    }
    if (maybe_card.length !== 2) {
      return false;
    }
    const [suit, value] = maybe_card.split("");
    // console.log(suit, value, Deck.suits.indexOf(suit), Deck.values.indexOf(value))
    if (Deck.suits.indexOf(suit) === -1) {
      return false;
    }
    if (Deck.values.indexOf(value) === -1) {
      return false;
    }
    return true;
  };

export default {
  suits,
  values,
  setupCards,
  shuffle,
  getNewCards,
  isCard,
};
