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

let playerHand = []
let dealerHand = []
let deck = []

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

let playerHandSum = () => {
  playerHand.reduce((a, b) => a + b.value, 0)
  const total = playerHandSum(playerHand)
  document.querySelector('.player-total').textContent = total
  console.log(total)
}

let dealerHandSum = () => {
  dealerHand.reduce((a, b) => a + b.value, 0)
  const dealerTotal = dealerHandSum(dealerHand)
  document.querySelector('.dealer-total').textContent = dealerTotal
  console.log(dealerTotal)
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
  dealerHand.push(firstCard)
  console.log(firstCard)
  const imageTag = document.createElement('img')
  imageTag.src = 'card-back.jpg'
  document.querySelector('.dealer-card').appendChild(imageTag)
}

const showDealerHand = () => {
  document.querySelector('.dealer-card').textContent = ''
  for (let i = 0; i < dealerHand.length; i++) {
    const card = dealerHand[i]
    const img = document.createElement('img')
    img.src = card.imageUrl
    document.querySelector('.dealer-card').appendChild(img)
  }
}

const standSelected = () => {
  document.querySelector('.hit').disabled = true
}

const displayMessage = message => {
  document.querySelector('.message').textContent = message
}
while (dealerHandSum < 17) {
  dealOneCardToDealer()
  showDealerHand()
}

if (dealerHandSum > 21) {
  displayMessage('Busted!')
} else if (playerHandSum > dealerHandSum) {
  displayMessage('Player Wins!')
} else if (dealerHandSum > playerHandSum) {
  displayMessage('Dealer Wins!')
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
// document.querySelector('.result').textContent = result

// document.querySelector('.reset').addEventListener('click', reset)
