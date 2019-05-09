const suits = ['hearts', 'spades', 'diamonds', 'clubs']
const faces = [
  { rank: 'ace', value: 11 },
  { rank: '2', value: 2 },
  { rank: '3', value: 3 },
  { rank: '4', value: 4 },
  { rank: '5', value: 5 },
  { rank: '6', value: 6 },
  { rank: '7', value: 7 },
  { rank: '8', value: 8 },
  { rank: '9', value: 9 },
  { rank: '10', value: 10 },
  { rank: 'jack', value: 10 },
  { rank: 'queen', value: 10 },
  { rank: 'king', value: 10 }
]

const playerHand = []
const dealerHand = []
const deck = []

const createDeck = () => {
  for (let i = 0; i < faces.length; i++) {
    console.log('faces selected')
    for (let j = 0; j < suits.length; j++) {
      console.log('suits selected')
      const card = {
        rank: faces[i].rank,
        value: faces[i].value,
        suit: suits[j]
      }
      deck.push(card)
    }
  }
  console.log(deck)
}

const shuffle = () => {
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = deck[i]
    deck[i] = deck[j]
    deck[j] = x
  }
  console.log(deck)
}

const dealOneCardToPlayer = () => {
  const firstCard = deck[0]
  console.log(firstCard)
  document.querySelector('.card-front').textContent =
    firstCard.rank +
    ' of ' +
    firstCard.suit +
    ' has a value of ' +
    firstCard.value
}

const main = () => {
  createDeck()
  shuffle()
  dealOneCardToPlayer()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.deal').addEventListener('click', dealOneCardToPlayer)
