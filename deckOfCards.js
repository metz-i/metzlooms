const myDeck = {
    deck : [],
    suits : ['hearts', 'diamonds','spades', 'clubs'],
    values : 'A,2,3,4,5,6,7,8,9,10,J,Q,K',

    initializeDeck() {
        const {
            deck, 
            suits, 
            values
        } = this;
        for (let suit of suits){
            for (let value of values.split(',')) {
                deck.push({
                    value,
                    suit,
                })
            }
        }
    },
    drawCard() {
        return this.deck.pop()
    }
}