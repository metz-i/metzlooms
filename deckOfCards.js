const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'clubs', 'spades'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    initializeDeck() {
        const { 
            suits, 
            values, 
            deck } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
    },
    drawCard() {
        return this.deck.pop()
    }
}

const deck1 = makeDeck();
const card1 = drawCard(deck1);
