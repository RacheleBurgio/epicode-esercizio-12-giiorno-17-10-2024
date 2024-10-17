const maxNumbers = 76
let drawnNumbers = []

const createCells = () => {
  const sezioniTombola = document.getElementById('tabella')
  const numeroCaselle = maxNumbers
  sezioniTombola.innerHTML = ''

  for (let i = 1; i <= numeroCaselle; i++) {
    const cella = document.createElement('div')
    cella.className = 'cella'
    cella.innerText = i
    sezioniTombola.appendChild(cella)
  }
}
createCells()

const newButton = () => {
  const areabottone = document.getElementById('draw')
  const newButton = document.createElement('button')
  newButton.innerText = 'pesca numero!'
  areabottone.appendChild(newButton)

  const drawNumber = () => {
    const randomNumber = Math.floor(Math.random() * 76) + 1
  }
  newButton.addEventListener('click', drawNumber())
}
newButton()
