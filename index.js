const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'YOUR-NAME is the champion'

let head = document.querySelector('head')
head.append(newHeader)

// let h1 = 'victory'
// element.append(newHeader)

// const element = document.getElementById('h1')
// element.textContent = 'Abram is the champion'
