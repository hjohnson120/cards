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
        suit: suits[j],
        imgUrl: '/cards/' + faces[i].rank + '_of_' + suits[j] + '.svg'
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
  const firstCard = deck.pop()
  console.log(firstCard)
  const imageTag = document.createElement('img')
  imageTag.src = firstCard.imgUrl
  document.querySelector('.card-front').appendChild(imageTag)
  playerHand.push(firstCard)
}

const dealOneCardToDealer = () => {
  const firstCard = deck.pop()
  // const imageTag = document.createElement('img')
  // imageTag.src = firstCard.imgUrl
  // document.querySelector('.dealer-card').appendChild(imageTag)
  dealerHand.push(firstCard)
  console.log(firstCard)
}

const standSelected = () => {
  document.querySelector('.hit').disabled = true
}

const main = () => {
  createDeck()
  shuffle()
  dealOneCardToPlayer()
  dealOneCardToPlayer()
  dealOneCardToDealer()
  dealOneCardToDealer()
}

// const reset = () => {

// }

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.hit').addEventListener('click', dealOneCardToPlayer)
document.querySelector('.stand').addEventListener('click', standSelected)
// document.querySelector('.reset').addEventListener('click', reset)
