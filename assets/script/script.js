let areabottone = document.getElementById('draw')
let drawnNumbers = []
const maxNumbers = 76

const drawNumber = () => {
  if (drawnNumbers.length >= maxNumbers) {
    alert('tutti i numeri sono stati estratti!')
    return
  }
}

const newButton = document.createElement('button')

newButton.innerText = 'pesca numero!'
areabottone.appendChild(newButton)
const draw = () => {
  for (let i = 0; i < drawnNumbers.length; i++) {
    newButton.addEventListener('click', () => {
      drawnNumbers.push(Math.floor(Math.random() * 77) + 1)
    })
  }
}
console.log(draw)
