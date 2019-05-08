const suits = ['hearts', 'spades', 'diamonds', 'clubs']
const faces = [
  'ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king'
]

let deck = []

const main = () => {
  for (let i = 0; i < faces.length; i++) {
    console.log('faces selected')
    for (let j = 0; j < suits.length; j++) {
      console.log('suits selected')
      const finalCard = faces + ' ' + suits
      console.log(finalCard)
      deck.push(finalCard)
    }
  }
  console.log(deck)
  shuffle()
}

const shuffle = () => {
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = deck[i]
    deck[i] = deck[j]
    deck[j] = x
  }
  console.log('shuffle')
}

let cardButton = () => {
  document.querySelector('.button').textContent = deck[0]
}

document.addEventListener('DOMContentLoaded', main)
document.addEventListener('click', cardButton)
