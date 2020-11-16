

function createCardItsYourTurn() {
    const cards = document.querySelector('.its-your-turn-cards')

    const cardWrapper = document.createElement('div')
    cardWrapper.setAttribute('class', 'its-your-card')
    
    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', './src/images/carrossel1.png')
    
    const infoCard = document.createElement('div')
    infoCard.setAttribute('class', 'its-your-info')
    
    const titleCard = document.createElement('h6')
    titleCard.innerText = 'Alimentos funcionais: três opções para incluir na dieta'
    
    const discriptionCard = document.createElement('p')
    discriptionCard.innerText = 'A busca pela boa alimentação é importante como um sinônimo de saúde.'
    
    const buttonCard = document.createElement('a')
    buttonCard.setAttribute('href', '#')
    const textButton = document.createTextNode('Continuar lendo')
    buttonCard.appendChild(textButton)
    
    cardWrapper.appendChild(imgCard)
    cardWrapper.appendChild(infoCard)
    infoCard.appendChild(titleCard)
    infoCard.appendChild(discriptionCard)
    infoCard.appendChild(buttonCard)
    cards.appendChild(cardWrapper)
}


const header = document.querySelector('.content-header')
const modal = document.querySelector('.modal')

document.querySelector('#products').addEventListener('mouseenter', event => {
    header.classList.add('modal-active')
    modal.style.display = 'flex'
})

document.querySelector('.modal').addEventListener('mouseleave', event => {
    
    header.classList.remove('modal-active')
    modal.style.display = 'none'
})

function handleClickNext() {
    cards.scrollBy(144,0)
}


for(let index=0; index <= 6; index++) {
    createCardItsYourTurn()
}