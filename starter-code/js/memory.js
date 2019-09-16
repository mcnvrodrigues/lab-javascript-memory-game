class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;    
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {} 
}

