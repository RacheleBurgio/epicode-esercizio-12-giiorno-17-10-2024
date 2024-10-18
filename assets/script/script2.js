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
    console.log(randomNumber)
    const allCells = document.getElementsByClassName('cella')
    for (let i = 0; i < allCells.length; i++) {
      if (randomNumber === parseInt(allCells[i].innerText)) {
        allCells[i].style.backgroundColor = 'red'
      } else {
        while (drawnNumbers.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * maxNumbers) + 1
        }
        for (let j = 0; j < allCells.length; j++) {
          if (randomNumber === parseInt(allCells[j].innerText)) {
            allCells[j].style.backgroundColor = 'red'
            break
          }
        }
      }
      break
    }
  }
  newButton.addEventListener('click', drawNumber)
}

newButton()
