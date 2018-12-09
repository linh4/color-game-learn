let numOfSquares = 6;
let colors = []
let pickedColor;
let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.getElementById('message')
let h1 = document.querySelector('h1')
let resetBtn = document.getElementById('reset')
let modeBtn = document.querySelectorAll('.mode')
colorDisplay.textContent = pickedColor

init()

function init() {
  setUpModeBtn()
  setUpSquares()
  reset()
}

resetBtn.addEventListener('click', function () {
  reset()
})

function setUpModeBtn() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
      modeBtn[0].classList.remove('selected')
      modeBtn[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6
      reset()
    })
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add color to squares
    squares[i].style.background = colors[i]
    squares[i].addEventListener('click', function () {
      let clickedColor = this.style.background
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        resetBtn.textContent = 'Play again?'
        changeColor(clickedColor)
        h1.style.background = clickedColor
      } else {
        this.style.background = '#232323'
        messageDisplay.textContent = 'Try again'
      }
    })
  }
}

function reset() {
  colors = generateRandom(numOfSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  messageDisplay.textContent = ''
  resetBtn.textContent = 'New colors'
  h1.style.background = 'rgb(170, 7, 74)'
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
}

function changeColor(color) {
  for (let i = 0; i < squares.length; i++) {
    // change each color to match the correct color
    squares[i].style.background = color
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandom(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
