let userInput = 0

document.getElementById('rate').addEventListener('click', rating)

function rating () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput >= 18) {
    document.getElementById('result').innerHTML = 'You can watch 18A/R rated movies without supervision'
  }
  
  else if (userInput >= 14) {
    document.getElementById('result').innerHTML = 'You can watch 14A movies without supervision'
  }

  else {
    document.getElementById('result').innerHTML = 'You can watch PG/G movies. You will need adult supervision'
  }
}