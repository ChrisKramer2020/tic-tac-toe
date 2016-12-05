if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.sass'

let player = 'x'

const checkForWinner = () => {
  const cells = document.querySelectorAll('td')
  // Describe the positions of a possible win state
  const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 6, 3],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

  ]
  console.log('ok')
  for (var i = 0; i < winningMoves.length; i++) {
    const positions = winningMoves[i]

    // An array to hold all the moves in that were checking right now
    let moves = []
    for (var j = 0; j < positions.length; j++) {
      const pos = positions[j] // 0, 4, or 8
      // Add the move from this position to the list
      moves.push(cells[pos].textContent)
    }
    // Did all the cells in these position belong to the current Player
    const didWin = moves.every((cell) => {
      return cell === player
    })
    // Has the player won?
    if (didWin) {
      alert('Winner')
      return true
    }
  }
  return false
}

const takeTurn = (event) => {
  event.target.textContent = player
  // After the player's move is made
  // Check for the winner
  if (checkForWinner()) {
    // ... DO WIN STUFF
  } else {
    if (player === 'x') {
      player = 'o'
    } else {
      player = 'x'
    }
  }
}

const main = () => {
  // document.querySelector('h1').textContent += ''
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', takeTurn)
    document.querySelector('button').addEventListener('click', reset)
  }
}

const reset = () => {
  document.body.className = ''
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
